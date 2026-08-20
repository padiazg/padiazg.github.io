(function () {
  function init() {
    var tables = document.querySelectorAll(".post-content table");
    if (!tables.length) return;

    tables.forEach(function (table) {
      var rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));
      if (!rows.length) return;

      var wrapper = document.createElement("div");
      wrapper.className = "reports-filter";
      wrapper.innerHTML =
        '<input type="search" placeholder="Filter\u2026" aria-label="Filter reports">';

      var input = wrapper.querySelector("input");
      input.style.cssText =
        "box-sizing:border-box;width:100%;max-width:20em;padding:6px 10px;" +
        "margin:0 0 12px;border:1px solid var(--tertiary);border-radius:6px;" +
        "background:var(--entry);color:var(--primary);font:inherit;" +
        "outline:none;" +
        "transition:border-color .15s ease;";
      input.addEventListener("focus", function () {
        input.style.borderColor = "var(--primary)";
      });
      input.addEventListener("blur", function () {
        input.style.borderColor = "var(--tertiary)";
      });

      var emptyRow = table.insertRow(-1);
      emptyRow.hidden = true;
      var emptyCell = emptyRow.insertCell(0);
      emptyCell.colSpan = table.querySelector("thead tr") ? table.querySelector("thead tr").cells.length : rows[0].cells.length;
      emptyCell.textContent = "No matching reports";

      input.addEventListener("input", function () {
        var q = input.value.trim().toLowerCase();
        var visible = 0;
        rows.forEach(function (row) {
          var match = !q || row.textContent.toLowerCase().indexOf(q) !== -1;
          row.hidden = !match;
          if (match) visible++;
        });
        emptyRow.hidden = visible !== 0;
      });

      table.parentNode.insertBefore(wrapper, table);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
