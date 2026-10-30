import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, rm, readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";
import { HtmlValidate } from "html-validate";
import { JSDOM } from "jsdom";
import axe from "axe-core";

import { build } from "../build.mjs";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SRC_DIR = join(ROOT, "src");
const ASSETS_DIR = join(ROOT, "assets");
let base;
let distDir;

before(async () => {
  base = await mkdtemp(join(tmpdir(), "validate-test-"));
  distDir = join(base, "dist");
  const slidesDir = join(base, "slides");

  const files = {
    "UFERSA/Cálculo I/2026-03-15--aula-01-introducao.pdf": "%PDF-1.4",
    "UFERSA/Cálculo I/2026-03-22--aula-02-limites.pdf": "%PDF-1.4",
  };
  for (const [relPath, content] of Object.entries(files)) {
    const fullPath = join(slidesDir, relPath);
    await mkdir(dirname(fullPath), { recursive: true });
    await writeFile(fullPath, content);
  }

  await build({ slidesDir, srcDir: SRC_DIR, assetsDir: ASSETS_DIR, distDir, silent: true });
});

after(async () => {
  if (base) await rm(base, { recursive: true, force: true });
});

const pages = [
  ["index.html", () => join(distDir, "index.html")],
  ["disciplina", () => join(distDir, "ufersa", "calculo-i", "index.html")],
  ["404.html", () => join(distDir, "404.html")],
];

const config = JSON.parse(await readFile(join(ROOT, ".htmlvalidate.json"), "utf8"));

describe("validação de HTML (html-validate)", () => {
  const htmlValidate = new HtmlValidate(config);

  for (const [name, path] of pages) {
    it(`${name} é HTML válido`, async () => {
      const source = await readFile(path(), "utf8");
      const report = await htmlValidate.validateString(source, name);

      const messages = report.results.flatMap((r) => r.messages);
      const errors = messages.filter((m) => m.severity === 2);
      assert.deepEqual(
        errors.map((m) => `${m.ruleId}: ${m.message} (linha ${m.line})`),
        []
      );
    });
  }
});

describe("acessibilidade (axe-core)", () => {
  for (const [name, path] of pages) {
    it(`${name} não tem violações WCAG A/AA`, async () => {
      const source = await readFile(path(), "utf8");
      const dom = new JSDOM(source);

      // o contexto do axe precisa ser um Element (ele deduz window/document daqui)
      const results = await axe.run(dom.window.document.documentElement, {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] },
        // jsdom não calcula layout: contraste é fixo nos tokens do CSS (testado à parte)
        rules: { "color-contrast": { enabled: false } },
      });

      assert.deepEqual(
        results.violations.map((v) => `${v.id}: ${v.help}`),
        []
      );
    });
  }
});
