import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SOURCE = readFileSync(join(ROOT, "src", "filter.js"), "utf8");

const ROWS = `
  <tr><th scope="row" class="name"><a href="#">Cálculo I</a></th><td class="uni">UNINASSAU</td></tr>
  <tr><th scope="row" class="name"><a href="#">Banco de Dados</a></th><td class="uni">UNIT</td></tr>
  <tr><th scope="row" class="name"><a href="#">Redes de Computadores</a></th><td class="uni">UNIT</td></tr>
`;

function setup(rowsHtml = ROWS) {
  const dom = new JSDOM(
    `<!DOCTYPE html><html><body>
      <div class="filtro" hidden>
        <label for="filtro">filtrar</label>
        <input id="filtro" type="search" />
      </div>
      <table class="board"><tbody>${rowsHtml}</tbody></table>
      <p class="comment" id="filtro-status" role="status" hidden></p>
    </body></html>`,
    { runScripts: "outside-only" }
  );

  dom.window.eval(SOURCE);

  const doc = dom.window.document;
  const input = doc.getElementById("filtro");

  return {
    dom,
    doc,
    input,
    status: doc.getElementById("filtro-status"),
    wrapper: doc.querySelector(".filtro"),
    rows: Array.from(doc.querySelectorAll("tbody tr")),
    type(value) {
      input.value = value;
      input.dispatchEvent(new dom.window.Event("input", { bubbles: true }));
    },
  };
}

const visible = (rows) => rows.map((row) => !row.hidden);

describe("filter.js", () => {
  it("revela o campo apenas quando o script está ativo", () => {
    const { wrapper } = setup();
    assert.equal(wrapper.hidden, false);
  });

  it("não quebra quando não há campo de filtro na página", () => {
    const dom = new JSDOM("<!DOCTYPE html><html><body><p>x</p></body></html>", {
      runScripts: "outside-only",
    });
    assert.doesNotThrow(() => dom.window.eval(SOURCE));
  });

  it("filtra ignorando acentos e caixa", () => {
    const { rows, type } = setup();
    type("calculo");
    assert.deepEqual(visible(rows), [true, false, false]);
  });

  it("mostra a contagem de resultados no status", () => {
    const { status, type } = setup();
    type("unit");
    assert.equal(status.hidden, false);
    assert.equal(status.textContent, "// 2 de 3 resultados");
  });

  it("avisa quando nada corresponde", () => {
    const { status, type } = setup();
    type("inexistente");
    assert.equal(status.hidden, false);
    assert.equal(status.textContent, "// nenhum resultado");
  });

  it("restaura todas as linhas ao limpar a busca", () => {
    const { rows, status, type } = setup();
    type("calculo");
    type("");
    assert.deepEqual(visible(rows), [true, true, true]);
    assert.equal(status.hidden, true);
  });

  it("Escape limpa o campo e restaura a lista", () => {
    const { dom, input, rows, type } = setup();
    type("calculo");
    input.dispatchEvent(new dom.window.KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    assert.equal(input.value, "");
    assert.deepEqual(visible(rows), [true, true, true]);
  });
});
