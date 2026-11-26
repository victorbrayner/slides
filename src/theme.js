(function () {
  var root = document.documentElement;

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

  function sync(button, theme) {
    button.textContent = label(theme);
    button.setAttribute("aria-label", ariaLabel(theme));
  }

  // sincroniza rótulo e nome acessível com o tema aplicado no <head> (sem gravar nada)
  var btn = document.getElementById("theme-toggle");
  if (btn) sync(btn, currentTheme());

  document.addEventListener("click", function (e) {
    var target = e.target && e.target.closest ? e.target.closest("#theme-toggle") : null;
    if (!target) return;

    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    sync(target, next);
    try {
      localStorage.setItem("theme", next);
    } catch (err) {}
  });
})();
