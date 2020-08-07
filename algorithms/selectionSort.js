function selectionSort() {
    var mixIndex = 0;

    for (let i = 0; i < heightsArr.length - 1; i++) {
      mixIndex = i;

      for (let j = i + 1; j < heightsArr.length; j++) {
        timeline.addCompareEvent(j, mixIndex);

        if (heightsArr[j] < heightsArr[mixIndex]) {
          mixIndex = j;
        }
      }

      timeline.addSwapEvent(i, mixIndex);

      swap(mixIndex, i); //from bubbleSort.js
    }

  finishedSorting();
}
