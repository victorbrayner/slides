import { describe, it, afterEach } from "node:test";
import assert from "node:assert/strict";

// harness mínimo de DOM para executar o IIFE do theme.js no Node
function makeEnv({ storedTheme = null, currentTheme = "dark" } = {}) {
  const state = { theme: currentTheme, stored: storedTheme };
  const listeners = {};

  const button = {
    textContent: "",
    setAttribute() {},
    getAttribute() { return null; },
  };

  globalThis.localStorage = {
    getItem: (key) => (key === "theme" ? state.stored : null),
    setItem: (key, value) => {
      if (key === "theme") state.stored = value;
    },
  };

  globalThis.document = {
    documentElement: {
      getAttribute: (name) => (name === "data-theme" ? state.theme : null),
      setAttribute: (name, value) => {
        if (name === "data-theme") state.theme = value;
      },
    },
    getElementById: (id) => (id === "theme-toggle" ? button : null),
    addEventListener: (type, handler) => {
      listeners[type] = handler;
    },
  };

  return { state, listeners, button };
}

// cache-buster para reexecutar o IIFE do zero a cada cenário
async function loadTheme() {
  await import(`../src/theme.js?cb=${Date.now()}-${Math.random()}`);
}

function clickOn(button) {
  return { target: { closest: (sel) => (sel === "#theme-toggle" ? button : null) } };
}

describe("theme.js", () => {
  afterEach(() => {
    delete globalThis.document;
    delete globalThis.localStorage;
  });

  it("sincroniza o rótulo do botão com o tema escuro", async () => {
    const { button } = makeEnv({ currentTheme: "dark" });
    await loadTheme();
    assert.equal(button.textContent, "◐ claro");
  });

  it("sincroniza o rótulo do botão com o tema claro", async () => {
    const { button } = makeEnv({ currentTheme: "light" });
    await loadTheme();
    assert.equal(button.textContent, "◑ escuro");
  });

  it("não grava no localStorage apenas ao carregar", async () => {
    const { state } = makeEnv({ currentTheme: "dark" });
    await loadTheme();
    assert.equal(state.stored, null);
  });

  it("clique alterna o tema, atualiza o rótulo e persiste", async () => {
    const { state, listeners, button } = makeEnv({ currentTheme: "dark" });
    await loadTheme();

    listeners.click(clickOn(button));
    assert.equal(state.theme, "light");
    assert.equal(button.textContent, "◑ escuro");
    assert.equal(state.stored, "light");

    listeners.click(clickOn(button));
    assert.equal(state.theme, "dark");
    assert.equal(button.textContent, "◐ claro");
    assert.equal(state.stored, "dark");
  });

  it("clique em filho do botão também funciona", async () => {
    const { state, listeners } = makeEnv({ currentTheme: "dark" });
    await loadTheme();

    // simula um clique cujo target é um filho que resolve para o botão via closest()
    listeners.click({ target: { closest: (sel) => (sel === "#theme-toggle" ? {} : null) } });
    assert.equal(state.theme, "light");
  });

  it("clique fora do botão não altera nada", async () => {
    const { state, listeners } = makeEnv({ currentTheme: "dark" });
    await loadTheme();

    listeners.click({ target: { closest: () => null } });
    assert.equal(state.theme, "dark");
    assert.equal(state.stored, null);
  });
});
