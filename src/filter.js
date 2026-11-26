(function () {
  var input = document.getElementById("filtro");
  if (!input) return;

  var table = document.querySelector("table.board");
  if (!table || !table.tBodies.length) return;

  var rows = Array.prototype.slice.call(table.tBodies[0].rows);
  var status = document.getElementById("filtro-status");

  // sem acentos e sem caixa: "calculo" encontra "Cálculo"
  function normalize(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function apply() {
    var query = normalize(input.value.trim());
    var visible = 0;

    for (var i = 0; i < rows.length; i++) {
      var match = query === "" || normalize(rows[i].textContent).indexOf(query) !== -1;
      rows[i].hidden = !match;
      if (match) visible++;
    }

    if (!status) return;

    if (query === "") {
      status.textContent = "";
      status.hidden = true;
    } else {
      status.hidden = false;
      status.textContent =
        visible === 0
          ? "// nenhum resultado"
          : "// " + visible + " de " + rows.length + " resultados";
    }
  }

  input.addEventListener("input", apply);
  input.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && input.value !== "") {
      input.value = "";
      apply();
    }
  });

  // o campo só aparece quando o filtro pode funcionar (progressive enhancement)
  if (input.parentElement) input.parentElement.hidden = false;
})();
