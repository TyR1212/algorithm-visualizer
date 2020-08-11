//determine the numbers for the heights array based on the number of bars
function getHeights() {
  let height = 0;

  heightsArr = [];

  for (let i = 0; i < numBars; i++) {
    height += Math.floor(maxNumBars / numBars);
    heightsArr.push(height);
  }
}
