import { describe, it, afterEach } from "node:test";
import assert from "node:assert/strict";

// harness mínimo de DOM para executar o IIFE do theme.js no Node
function makeEnv({ storedTheme = null, currentTheme = "dark", systemLight = false } = {}) {
  const state = { theme: currentTheme, stored: storedTheme };
  const listeners = {};
  const mediaListeners = [];

  const attrs = {};
  const meta = {
    content: "",
    setAttribute(name, value) {
      if (name === "content") this.content = value;
    },
  };

  const button = {
    textContent: "",
    setAttribute(name, value) { attrs[name] = value; },
    getAttribute(name) { return attrs[name] ?? null; },
  };

  globalThis.localStorage = {
    getItem: (key) => (key === "theme" ? state.stored : null),
    setItem: (key, value) => {
      if (key === "theme") state.stored = value;
    },
  };

  globalThis.window = {
    matchMedia: (query) => ({
      matches: systemLight && query.indexOf("light") !== -1,
      addEventListener: (type, handler) => {
        if (type === "change") mediaListeners.push(handler);
      },
    }),
  };

  globalThis.document = {
    documentElement: {
      getAttribute: (name) => (name === "data-theme" ? state.theme : null),
      setAttribute: (name, value) => {
        if (name === "data-theme") state.theme = value;
      },
    },
    getElementById: (id) => (id === "theme-toggle" ? button : null),
    querySelector: (selector) =>
      selector === 'meta[name="theme-color"]' ? meta : null,
    addEventListener: (type, handler) => {
      listeners[type] = handler;
    },
  };

  return { state, listeners, mediaListeners, button, attrs, meta };
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
    delete globalThis.window;
  });

  it("sincroniza o rótulo do botão com o tema escuro", async () => {
    const { button, attrs, meta } = makeEnv({ currentTheme: "dark" });
    await loadTheme();
    assert.equal(button.textContent, "◐ claro");
    assert.equal(attrs["aria-label"], "Alternar para o tema claro");
    assert.equal(meta.content, "#222222");
  });

  it("sincroniza o rótulo do botão com o tema claro", async () => {
    const { button, attrs, meta } = makeEnv({ currentTheme: "light" });
    await loadTheme();
    assert.equal(button.textContent, "◑ escuro");
    assert.equal(attrs["aria-label"], "Alternar para o tema escuro");
    assert.equal(meta.content, "#eeeeee");
  });

  it("não grava no localStorage apenas ao carregar", async () => {
    const { state } = makeEnv({ currentTheme: "dark" });
    await loadTheme();
    assert.equal(state.stored, null);
  });

  it("clique alterna o tema, atualiza o rótulo e persiste", async () => {
    const { state, listeners, button, attrs, meta } = makeEnv({ currentTheme: "dark" });
    await loadTheme();

    listeners.click(clickOn(button));
    assert.equal(state.theme, "light");
    assert.equal(button.textContent, "◑ escuro");
    assert.equal(attrs["aria-label"], "Alternar para o tema escuro");
    assert.equal(meta.content, "#eeeeee");
    assert.equal(state.stored, "light");

    listeners.click(clickOn(button));
    assert.equal(state.theme, "dark");
    assert.equal(button.textContent, "◐ claro");
    assert.equal(attrs["aria-label"], "Alternar para o tema claro");
    assert.equal(meta.content, "#222222");
    assert.equal(state.stored, "dark");
  });

  it("clique em filho do botão também funciona", async () => {
    const { state, listeners, button } = makeEnv({ currentTheme: "dark" });
    await loadTheme();

    // simula um clique cujo target é um filho que resolve para o botão via closest()
    listeners.click({ target: { closest: (sel) => (sel === "#theme-toggle" ? button : null) } });
    assert.equal(state.theme, "light");
  });

  it("clique fora do botão não altera nada", async () => {
    const { state, listeners } = makeEnv({ currentTheme: "dark" });
    await loadTheme();

    listeners.click({ target: { closest: () => null } });
    assert.equal(state.theme, "dark");
    assert.equal(state.stored, null);
  });

  it("segue o sistema ao vivo quando não há preferência salva", async () => {
    const { state, mediaListeners, meta } = makeEnv({ currentTheme: "dark" });
    await loadTheme();

    assert.equal(mediaListeners.length, 1);
    mediaListeners[0]({ matches: true });
    assert.equal(state.theme, "light");
    assert.equal(meta.content, "#eeeeee");

    mediaListeners[0]({ matches: false });
    assert.equal(state.theme, "dark");
    assert.equal(meta.content, "#222222");
  });

  it("não segue o sistema quando há preferência salva", async () => {
    const { state, mediaListeners } = makeEnv({ storedTheme: "dark", currentTheme: "dark" });
    await loadTheme();

    mediaListeners[0]({ matches: true });
    assert.equal(state.theme, "dark");
  });
});
