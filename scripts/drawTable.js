//draw table with just the heading when page first loads
function createTable() {
  document.getElementById("table-placeholder").innerHTML = getTableHeading();
}

//redraw the table with the added row
function redrawTable(table) {
  var table = document.getElementById("table-container");

  table.parentNode.removeChild(table);

  table = getTableHeading();

  for (let i = previousRuns.length - 1; i >= 0; i--) {
    table += previousRuns[i];
  }

  document.getElementById("table-placeholder").innerHTML = table;
}

//return HTML for the table heading
function getTableHeading() {
  return ('<div id="table-container">' +
    '<table id="runs-table">' +
    "<tr><th>Algorithm</th><th>Bars</th><th>Speed</th><th>Time</th></tr>");
}

//add the HTML for another row
function addRow() {
  var row = '<tr><td class="algorithm-name">' + capitalize(algorithm) +
    " Sort</td>" + "<td>" + numBars + "</td>" + "<td>" +
    getSpeedInStringForm() + "</td>" + "<td>" + stopwatchSeconds +
    "." + stopwatchMilliseconds + "s</td>" + "</tr>";

  previousRuns.push(row);
}

//capitalize a string
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

//convert speed int to string
function getSpeedInStringForm() {
  if (sortingSpeed == 100) return "1x";
  else if (sortingSpeed == 50) return "2x";
  else if (sortingSpeed == 10) return "3x";
}

createTable();
