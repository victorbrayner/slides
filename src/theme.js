(function () {
  var root = document.documentElement;

  function currentTheme() {
    return root.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function label(theme) {
    return theme === "dark" ? "◐ claro" : "◑ escuro";
  }

  // sincroniza o rótulo com o tema aplicado no <head> (sem gravar nada)
  var btn = document.getElementById("theme-toggle");
  if (btn) btn.textContent = label(currentTheme());

  document.addEventListener("click", function (e) {
    var target = e.target && e.target.closest ? e.target.closest("#theme-toggle") : null;
    if (!target) return;

    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    target.textContent = label(next);
    try {
      localStorage.setItem("theme", next);
    } catch (err) {}
  });
})();
