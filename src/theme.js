(function () {
  var root = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');

  var COLORS = { dark: "#222222", light: "#eeeeee" };

  function currentTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function label(theme) {
    return theme === "dark" ? "◐ claro" : "◑ escuro";
  }

  // o nome acessível descreve a ação e muda junto com o tema,
  // para leitores de tela anunciarem o novo estado a cada clique
  function ariaLabel(theme) {
    return theme === "dark" ? "Alternar para o tema claro" : "Alternar para o tema escuro";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    if (meta) meta.setAttribute("content", COLORS[theme]);

    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.textContent = label(theme);
      btn.setAttribute("aria-label", ariaLabel(theme));
    }
  }

  // sincroniza o documento com o tema aplicado no <head> (sem gravar nada)
  apply(currentTheme());

  document.addEventListener("click", function (e) {
    var target = e.target && e.target.closest ? e.target.closest("#theme-toggle") : null;
    if (!target) return;

    var next = currentTheme() === "dark" ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem("theme", next);
    } catch (err) {}
  });

  // sem preferência salva, acompanha mudanças do sistema operacional ao vivo
  var mq = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: light)")
    : null;

  if (mq && mq.addEventListener) {
    mq.addEventListener("change", function (event) {
      var stored = null;
      try {
        stored = localStorage.getItem("theme");
      } catch (err) {}
      if (stored === "light" || stored === "dark") return;
      apply(event.matches ? "light" : "dark");
    });
  }
})();
