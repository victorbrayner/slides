import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, rm, readFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

import { build, encodePath } from "../build.mjs";

// usa os templates e assets REAIS do projeto (não fixtures descartáveis)
const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SRC_DIR = join(ROOT, "src");
const ASSETS_DIR = join(ROOT, "assets");

async function buildFixture(structure) {
  const base = await mkdtemp(join(tmpdir(), "frontend-test-"));
  const slidesDir = join(base, "slides");
  const distDir = join(base, "dist");

  for (const [relPath, content] of Object.entries(structure)) {
    const fullPath = join(slidesDir, relPath);
    await mkdir(dirname(fullPath), { recursive: true });
    await writeFile(fullPath, content ?? "%PDF-1.4");
  }

  await build({ slidesDir, srcDir: SRC_DIR, assetsDir: ASSETS_DIR, distDir, silent: true });
  return { base, distDir };
}

describe("encodePath", () => {
  it("codifica cada segmento do caminho", () => {
    assert.equal(encodePath("2026-01-01--aritmetica-binaria.pdf"), "2026-01-01--aritmetica-binaria.pdf");
    assert.equal(encodePath("2026-01-05--aula com espacos.pdf"), "2026-01-05--aula%20com%20espacos.pdf");
    assert.equal(encodePath('a b/c"d.pdf'), "a%20b/c%22d.pdf");
  });
});

describe("front-end (templates reais)", () => {
  let base;
  let distDir;

  afterEach(async () => {
    if (base) await rm(base, { recursive: true, force: true });
  });

  it("gera index com tabela semântica, metadados e estrutura acessível", async () => {
    ({ base, distDir } = await buildFixture({
      "UFERSA/Cálculo I/2026-03-15--aula-01.pdf": "%PDF-1.4",
    }));

    const html = await readFile(join(distDir, "index.html"), "utf8");

    // tabela semântica
    assert.ok(html.includes('<table class="board board-index">'));
    assert.ok(html.includes('<caption class="meta">'));
    assert.ok(html.includes('<th scope="col" class="name">Disciplina</th>'));
    assert.ok(html.includes('<th scope="row" class="name">'));
    assert.ok(html.includes('data-label="Universidade"'));
    assert.ok(html.includes('<time datetime="2026-03-15">'));

    // nada de placeholder vazado nem <p> dentro da tabela
    assert.ok(!html.includes("{{"));
    const table = /<table[\s\S]*?<\/table>/.exec(html)[0];
    assert.ok(!table.includes("<p"));

    // landmarks e skip link
    assert.ok(html.includes('<a class="skip" href="#conteudo">'));
    assert.ok(html.includes('<main id="conteudo">'));

    // SEO/social
    assert.ok(html.includes('<meta name="description"'));
    assert.ok(html.includes('<link rel="canonical"'));
    assert.ok(html.includes('<meta property="og:title"'));
    assert.ok(html.includes('<link rel="icon"'));
    assert.ok(html.includes("https://slides.brayner.dev/"));

    // script anti-FOUC antes do CSS no <head>
    const head = html.slice(0, html.indexOf("</head>"));
    assert.ok(head.indexOf("localStorage.getItem") < head.indexOf('rel="stylesheet"'));
    assert.ok(html.includes('aria-label="Alternar tema claro e escuro"'));
  });

  it("gera página de disciplina com links relativos e ações acessíveis", async () => {
    ({ base, distDir } = await buildFixture({
      "UFERSA/Cálculo I/2026-03-15--aula-01.pdf": "%PDF-1.4",
    }));

    const html = await readFile(join(distDir, "ufersa", "calculo-i", "index.html"), "utf8");

    assert.ok(html.includes('<table class="board board-slides">'));
    // links relativos (funcionam fora da raiz do domínio)
    assert.ok(html.includes('href="./2026-03-15--aula-01.pdf"'));
    assert.ok(html.includes('href="../../style.css"'));
    assert.ok(html.includes('href="../../assets/favicon.svg"'));
    assert.ok(html.includes('<a class="back" href="../../">'));
    // ações
    assert.ok(html.includes('target="_blank" rel="noopener">ver</a>'));
    assert.ok(html.includes(" download>baixar</a>"));
    assert.ok(!html.includes('href="/'));
  });

  it("codifica hrefs com espaços e escapa títulos especiais", async () => {
    ({ base, distDir } = await buildFixture({
      "UFERSA/Cálculo I/2026-01-05--aula com espacos.pdf": "%PDF-1.4",
      "UFERSA/Cálculo I/_titulos.json": JSON.stringify({
        "2026-01-05--aula com espacos.pdf": 'Aula "especial" & <teste>',
      }),
    }));

    const html = await readFile(join(distDir, "ufersa", "calculo-i", "index.html"), "utf8");

    assert.ok(html.includes('href="./2026-01-05--aula%20com%20espacos.pdf"'));
    assert.ok(!html.includes("aula com espacos.pdf"));
    assert.ok(html.includes('title="Aula &quot;especial&quot; &amp; &lt;teste&gt;"'));
    assert.ok(html.includes(">Aula &quot;especial&quot; &amp; &lt;teste&gt;</a>"));

    // o PDF continua sendo copiado com o nome original em disco
    await access(join(distDir, "ufersa", "calculo-i", "2026-01-05--aula com espacos.pdf"));
  });

  it("ordena slides empatados por data de forma determinística", async () => {
    ({ base, distDir } = await buildFixture({
      "UFERSA/Cálculo I/2026-02-01--bbb.pdf": "%PDF-1.4",
      "UFERSA/Cálculo I/2026-02-01--aaa.pdf": "%PDF-1.4",
    }));

    const html = await readFile(join(distDir, "ufersa", "calculo-i", "index.html"), "utf8");
    assert.ok(html.indexOf("aaa") < html.indexOf("bbb"));
  });

  it("usa o nome do arquivo quando _titulos.json é inválido", async () => {
    ({ base, distDir } = await buildFixture({
      "UFERSA/Cálculo I/2026-03-10--introducao.pdf": "%PDF-1.4",
      "UFERSA/Cálculo I/_titulos.json": "{ não é json",
    }));

    const html = await readFile(join(distDir, "ufersa", "calculo-i", "index.html"), "utf8");
    assert.ok(html.includes(">Introducao</a>"));
  });

  it("cria páginas distintas para disciplinas homônimas em universidades diferentes", async () => {
    ({ base, distDir } = await buildFixture({
      "UFERSA/Cálculo I/2026-03-15--aula-01.pdf": "%PDF-1.4",
      "UFRN/Cálculo I/2026-03-16--aula-01.pdf": "%PDF-1.4",
    }));

    const a = await readFile(join(distDir, "ufersa", "calculo-i", "index.html"), "utf8");
    const b = await readFile(join(distDir, "ufrn", "calculo-i", "index.html"), "utf8");
    assert.ok(a.includes("2026-03-15"));
    assert.ok(b.includes("2026-03-16"));

    const index = await readFile(join(distDir, "index.html"), "utf8");
    assert.ok(index.includes('href="ufersa/calculo-i/"'));
    assert.ok(index.includes('href="ufrn/calculo-i/"'));
  });

  it("gera estado vazio fora da tabela", async () => {
    ({ base, distDir } = await buildFixture({}));
    // força a varredura de um diretório vazio (buildFixture não cria arquivos)
    const html = await readFile(join(distDir, "index.html"), "utf8");

    assert.ok(/<\/table>\s*<p class="comment">/.test(html));
    const table = /<table[\s\S]*?<\/table>/.exec(html)[0];
    assert.ok(!table.includes('<p class="comment">'));
  });

  it("gera robots.txt, sitemap.xml, 404.html e copia os assets", async () => {
    ({ base, distDir } = await buildFixture({
      "UFERSA/Cálculo I/2026-03-15--aula-01.pdf": "%PDF-1.4",
    }));

    const robots = await readFile(join(distDir, "robots.txt"), "utf8");
    assert.ok(robots.includes("User-agent: *"));
    assert.ok(robots.includes("Sitemap: https://slides.brayner.dev/sitemap.xml"));

    const sitemap = await readFile(join(distDir, "sitemap.xml"), "utf8");
    assert.ok(sitemap.includes("<loc>https://slides.brayner.dev/</loc>"));
    assert.ok(sitemap.includes("<loc>https://slides.brayner.dev/ufersa/calculo-i/</loc>"));
    assert.ok(sitemap.includes("<lastmod>2026-03-15</lastmod>"));

    await access(join(distDir, "404.html"));
    await access(join(distDir, "assets", "favicon.svg"));
    await access(join(distDir, "assets", "DepartureMono-Regular.woff2"));

    // fonte referenciada de forma relativa no CSS
    const css = await readFile(join(distDir, "style.css"), "utf8");
    assert.ok(css.includes('url("assets/DepartureMono-Regular.woff2")'));
    assert.ok(!css.includes('url("/assets'));
  });
});
