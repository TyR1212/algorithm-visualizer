function bubbleSort() {
  for (let i = 0; i < heightsArr.length; i++) {
    for (let j = 0; j < heightsArr.length - i - 1; j++) {
      timeline.addCompareEvent(j, j + 1);

      if (heightsArr[j] > heightsArr[j + 1]) {
        swap(j, j + 1);
        timeline.addSwapEvent(j, j + 1);
      }
    }
  }
  
  finishedSorting();
}

function swap(i, j) {
  var temp = heightsArr[i];
  heightsArr[i] = heightsArr[j];
  heightsArr[j] = temp;
}
