function insertionSort() {
  var left = 1,
    right = heightsArr.length - 1,
    temp = 0,
    location = 0;

  while (left <= right) {
    timeline.addCompareEvent(left, left - 1);

    if (heightsArr[left] < heightsArr[left - 1]) {
      temp = heightsArr[left];
      location = left;

      do {
        timeline.addSwapEvent(location, location - 1);

        heightsArr[location] = heightsArr[location - 1];
        location--;
      } while (location > 0 && heightsArr[location - 1] > temp);
      {
        timeline.addSwapEvent(location, location);
        heightsArr[location] = temp;
      }
    }
    left++;
  }

  finishedSorting();
}
