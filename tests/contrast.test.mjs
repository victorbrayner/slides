import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));

// ── utilitários WCAG ────────────────────────────────────────

function luminance(hex) {
  const n = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4]
    .map((i) => parseInt(n.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

// ── parser minimalista de custom properties do CSS ──────────

function parseScopes(css) {
  const scopes = { base: {}, dark: {}, light: {} };
  const blockRe = /([^{}]+)\{([^{}]*)\}/g;
  let match;

  while ((match = blockRe.exec(css))) {
    const selector = match[1].trim();

    // bloco base (:root) alimenta os dois temas; blocos de tema sobrescrevem
    const decls = {};
    for (const decl of match[2].split(";")) {
      const [prop, ...rest] = decl.split(":");
      if (rest.length && prop.trim().startsWith("--")) {
        decls[prop.trim()] = rest.join(":").trim();
      }
    }

    if (selector === ":root") {
      Object.assign(scopes.base, decls);
    } else if (selector.includes('data-theme="dark"')) {
      Object.assign(scopes.dark, decls);
    } else if (selector.includes('data-theme="light"')) {
      Object.assign(scopes.light, decls);
    }
  }

  scopes.dark = { ...scopes.base, ...scopes.dark };
  scopes.light = { ...scopes.base, ...scopes.light };
  return scopes;
}

function resolve(scope, value, depth = 0) {
  const varMatch = /var\((--[a-z-]+)\)/.exec(value);
  if (!varMatch || depth > 5) return value;
  return resolve(scope, scope[varMatch[1]], depth + 1);
}

describe("contraste dos temas (WCAG AA)", () => {
  it("tokens de cor atingem 4,5:1 em cada tema", async () => {
    const css = await readFile(join(ROOT, "src", "style.css"), "utf8");
    const scopes = parseScopes(css);

    const pairs = [
      ["dark · texto/principal", scopes.dark, "--fg", "--bg"],
      ["dark · texto suave", scopes.dark, "--muted", "--bg"],
      ["dark · acento", scopes.dark, "--accent", "--bg"],
      ["light · texto/principal", scopes.light, "--fg", "--bg"],
      ["light · texto suave", scopes.light, "--muted", "--bg"],
      ["light · acento", scopes.light, "--accent", "--bg"],
    ];

    const failures = [];
    for (const [name, scope, fgVar, bgVar] of pairs) {
      const fg = resolve(scope, scope[fgVar]);
      const bg = resolve(scope, scope[bgVar]);
      const ratio = contrast(fg, bg);
      if (ratio < 4.5) {
        failures.push(`${name}: ${fg} sobre ${bg} = ${ratio.toFixed(2)}:1`);
      }
    }

    assert.deepEqual(failures, []);
  });
});
