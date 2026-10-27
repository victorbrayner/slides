import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, rm, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";

import {
  slugify,
  titleize,
  semesterOf,
  formatDate,
  esc,
  scan,
  build,
} from "../build.mjs";

async function createFixture(structure) {
  const base = await mkdtemp(join(tmpdir(), "slides-test-"));

  for (const [relPath, content] of Object.entries(structure)) {
    const fullPath = join(base, relPath);
    await mkdir(dirname(fullPath), { recursive: true });
    await writeFile(fullPath, content ?? "");
  }

  return base;
}

describe("utilitários", () => {
  it("slugify remove acentos e converte para kebab-case", () => {
    assert.equal(slugify("Cálculo I"), "calculo-i");
    assert.equal(slugify("Engenharia  de Software"), "engenharia-de-software");
    assert.equal(slugify("SISTEMAS Operacionais!!!"), "sistemas-operacionais");
  });

  it("titleize capitaliza a primeira palavra", () => {
    assert.equal(titleize("aula-03-derivadas"), "Aula 03 derivadas");
    assert.equal(titleize("introducao"), "Introducao");
  });

  it("semesterOf deriva o semestre a partir da data", () => {
    assert.equal(semesterOf("2026-03-15"), "2026.1");
    assert.equal(semesterOf("2026-07-31"), "2026.1");
    assert.equal(semesterOf("2026-08-01"), "2026.2");
    assert.equal(semesterOf("2026-12-20"), "2026.2");
  });

  it("formatDate formata a data no padrão brasileiro", () => {
    assert.equal(formatDate("2026-03-15"), "15/03/26");
  });

  it("esc escapa caracteres HTML perigosos", () => {
    assert.equal(esc("<script>\"alert\" & 'x'"), "&lt;script&gt;&quot;alert&quot; &amp; 'x'");
  });
});

describe("scan", () => {
  let base;

  afterEach(async () => {
    if (base) await rm(base, { recursive: true, force: true });
  });

  it("descobre PDFs válidos organizados por universidade e disciplina", async () => {
    base = await createFixture({
      "UFERSA/Cálculo I/2026-03-15--aula-01-introducao.pdf": "%PDF-1.4",
      "UFERSA/Cálculo I/2026-03-22--aula-02-limites.pdf": "%PDF-1.4",
    });

    const universities = await scan({ slidesDir: base });

    assert.equal(universities.length, 1);
    assert.equal(universities[0].name, "UFERSA");
    assert.equal(universities[0].disciplines.length, 1);

    const disc = universities[0].disciplines[0];
    assert.equal(disc.name, "Cálculo I");
    assert.equal(disc.slug, "calculo-i");
    assert.equal(disc.slides.length, 2);
    assert.equal(disc.slides[0].date, "2026-03-22");
    assert.equal(disc.slides[1].date, "2026-03-15");
  });

  it("ignora PDFs fora do padrão e emite aviso", async () => {
    base = await createFixture({
      "UFERSA/Cálculo I/2026-03-15--aula-valida.pdf": "%PDF-1.4",
      "UFERSA/Cálculo I/slide errado.pdf": "%PDF-1.4",
    });

    const warnings = [];
    const originalWarn = console.warn;
    console.warn = (...args) => warnings.push(args.join(" "));

    try {
      const universities = await scan({ slidesDir: base });
      assert.equal(universities[0].disciplines[0].slides.length, 1);
      assert.ok(warnings.some((w) => w.includes("slide errado.pdf")));
    } finally {
      console.warn = originalWarn;
    }
  });

  it("usa _titulos.json para sobrescrever títulos", async () => {
    base = await createFixture({
      "UFERSA/Cálculo I/_titulos.json": JSON.stringify({
        "2026-03-15--aula-01-introducao.pdf": "Aula 01 — Introdução ao Cálculo",
      }),
      "UFERSA/Cálculo I/2026-03-15--aula-01-introducao.pdf": "%PDF-1.4",
    });

    const universities = await scan({ slidesDir: base });
    const slide = universities[0].disciplines[0].slides[0];
    assert.equal(slide.title, "Aula 01 — Introdução ao Cálculo");
  });

  it("ignora disciplinas sem PDFs válidos", async () => {
    base = await createFixture({
      "UFERSA/Cálculo I/2026-03-15--aula-01.pdf": "%PDF-1.4",
      "UFERSA/Vazia/slide errado.pdf": "%PDF-1.4",
    });

    const universities = await scan({ slidesDir: base });
    assert.equal(universities[0].disciplines.length, 1);
    assert.equal(universities[0].disciplines[0].name, "Cálculo I");
  });
});

describe("build", () => {
  let base;
  let srcDir;
  let assetsDir;
  let distDir;

  beforeEach(async () => {
    base = await mkdtemp(join(tmpdir(), "slides-test-"));
    srcDir = join(base, "src");
    assetsDir = join(base, "assets");
    distDir = join(base, "dist");

    await mkdir(srcDir, { recursive: true });
    await mkdir(assetsDir, { recursive: true });

    await writeFile(
      join(srcDir, "index.template.html"),
      "<!DOCTYPE html><html><title>{{TITLE}}</title>{{ROWS}}<p>{{META}}</p></html>"
    );
    await writeFile(
      join(srcDir, "disciplina.template.html"),
      "<!DOCTYPE html><html><title>{{TITLE}}</title><h1>{{DISCIPLINA}}</h1><h2>{{UNIVERSIDADE}}</h2>{{ROWS}}<p>{{META}}</p></html>"
    );
    await writeFile(join(srcDir, "style.css"), "body{}");
    await writeFile(join(srcDir, "theme.js"), "console.log('theme');");
    await writeFile(join(assetsDir, "DepartureMono-Regular.woff2"), "woff2");
  });

  afterEach(async () => {
    if (base) await rm(base, { recursive: true, force: true });
  });

  it("copia os PDFs enviados para a estrutura de distribuição", async () => {
    const slidesDir = join(base, "slides");
    await mkdir(join(slidesDir, "UFERSA", "Cálculo I"), { recursive: true });
    await writeFile(
      join(slidesDir, "UFERSA", "Cálculo I", "2026-03-15--aula-01.pdf"),
      "%PDF-1.4 test"
    );

    await build({
      slidesDir,
      srcDir,
      assetsDir,
      distDir,
      silent: true,
    });

    const pdfPath = join(distDir, "ufersa", "calculo-i", "2026-03-15--aula-01.pdf");
    const content = await readFile(pdfPath, "utf8");
    assert.equal(content, "%PDF-1.4 test");
  });

  it("gera index.html e páginas de disciplina com metadados corretos", async () => {
    const slidesDir = join(base, "slides");
    await mkdir(join(slidesDir, "UFERSA", "Cálculo I"), { recursive: true });
    await writeFile(
      join(slidesDir, "UFERSA", "Cálculo I", "2026-08-10--aula-01.pdf"),
      "%PDF-1.4"
    );

    const { totalSlides } = await build({
      slidesDir,
      srcDir,
      assetsDir,
      distDir,
      silent: true,
    });

    assert.equal(totalSlides, 1);

    const indexHtml = await readFile(join(distDir, "index.html"), "utf8");
    assert.ok(indexHtml.includes("Cálculo I"));
    assert.ok(indexHtml.includes("UFERSA"));
    assert.ok(indexHtml.includes("2026.2"));

    const discHtml = await readFile(join(distDir, "ufersa", "calculo-i", "index.html"), "utf8");
    assert.ok(discHtml.includes("Cálculo I"));
    assert.ok(discHtml.includes("UFERSA"));
    assert.ok(discHtml.includes("Aula 01"));
  });

  it("ordena disciplinas pela data do slide mais recente", async () => {
    const slidesDir = join(base, "slides");
    await mkdir(join(slidesDir, "UFERSA", "Cálculo I"), { recursive: true });
    await mkdir(join(slidesDir, "UFRN", "Álgebra"), { recursive: true });

    await writeFile(
      join(slidesDir, "UFERSA", "Cálculo I", "2026-03-01--aula-01.pdf"),
      "%PDF-1.4"
    );
    await writeFile(
      join(slidesDir, "UFRN", "Álgebra", "2026-05-01--aula-01.pdf"),
      "%PDF-1.4"
    );

    const { allDisciplines } = await build({
      slidesDir,
      srcDir,
      assetsDir,
      distDir,
      silent: true,
    });

    assert.equal(allDisciplines[0].disc.name, "Álgebra");
    assert.equal(allDisciplines[1].disc.name, "Cálculo I");
  });
});
