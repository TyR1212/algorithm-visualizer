function createTable() {
  document.getElementById("table-placeholder").innerHTML = getTableHeading();
}

function redrawTable(table) {
  var tableLabel = document.getElementById('table-label');
  var table = document.getElementById('table-container');
  
  tableLabel.parentNode.removeChild(tableLabel);
  table.parentNode.removeChild(table);
  
  table = getTableHeading();

  for (let i = previousRuns.length - 1; i >= 0; i--) {
    table += previousRuns[i];
  }

  document.getElementById("table-placeholder").innerHTML = table;
}

function getTableHeading() {
  return (
    '<div id="table-label" class="table-positioning">Previous Runs</div>' +
    '<div id="table-container" class="table-positioning">' +
    '<table id="runs-table">' +
    '<tr><th>Algorithm</th><th>Bars</th><th>Speed</th><th>Time</th></tr>'
  );
}

function addRow() {
  var row =
    '<tr><td class="algorithm-name">' + capitalize(algorithm) + ' Sort</td>' +
    '<td>' + numBars + '</td>' + '<td>' + getSpeedInStringForm() + '</td>' +
    '<td>' + stopwatchSeconds + '.' + stopwatchMilliseconds + 's</td>' + '</tr>';

  previousRuns.push(row);
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function getSpeedInStringForm() {
  if (sortingSpeed == 50) {
    return '1x';
  }
  else {
    return '2x';
  }
}

createTable();
