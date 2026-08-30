(function () {
  var root = document.documentElement;
  var stored = null;
  try {
    stored = localStorage.getItem("theme");
  } catch (e) {}

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "◐ claro" : "◑ escuro";
  }

  apply(stored === "light" ? "light" : "dark");

  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === "theme-toggle") {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      try {
        localStorage.setItem("theme", next);
      } catch (err) {}
    }
  });
})();
