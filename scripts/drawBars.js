function drawBars() {
  getHeights();
  randomizeHeights();
  let bars = '<div id="graph">';
  let width = Math.floor(maxNumBars / numBars);
  let marginLeft = determineBarMargin();

  for (let i = 0; i < numBars; i++) {
    bars +=
      '<div class="bar" id="b' +
      i.toString() +
      '" style="height: ' +
      heightsArr[i] +
      "px; width: " +
      width +
      "px; margin-left: " +
      marginLeft +
      'px"></div>';
  }

  bars += "</div>";
  document.getElementById('graph-placeholder').innerHTML = bars;
  document.getElementById("graph").style.minWidth = (numBars * width + numBars * marginLeft).toString() + "px";
  setBtnsToStartingColors();
}

drawBars();

function removeBars() {
  var bars = document.getElementById("graph");
  bars.parentNode.removeChild(bars);
  drawBars();
}

function determineBarMargin() {
  if (numBars <= 30) return 5;
  else if (numBars <= 50) return 4;
  else if (numBars <= 70) return 3;
  else if (numBars <= 100) return 2;
  else return 1;
}
