function filterTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputTable");
  filter = input.value.toUpperCase();
  table = document.getElementById("co2Tablebody");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i]
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
