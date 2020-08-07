function getHeights() {
  let height = 0;

  for (let i = 0; i < numBars; i++) {
    height += Math.floor(maxNumBars / numBars);
    heightsArr.push(height);
  }
}
