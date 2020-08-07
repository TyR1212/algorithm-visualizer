function mergeSort() {
  heightsArr = startMerge(heightsArr);
  finishedSorting();
}

function startMerge(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var middle = Math.floor(arr.length / 2),
    left = startMerge(arr.slice(0, middle)),
    right = startMerge(arr.slice(middle));

  return merge(left, right);
}

function merge(arrLeft, arrRight) {
  var sorted = [];

  while (arrLeft.length > 0 && arrRight.length > 0) {
    if (arrLeft[0] < arrRight[0]) {
      sorted.push(arrLeft.shift());
    }
    else {
      sorted.push(arrRight.shift());
    }
  }

  sorted = sorted.concat(arrLeft.slice().concat(arrRight.slice()));
  var minIndex = maxNumBars + 1;

  //find starting index in heightsArr to apply the sectional sort
  for (let i = 0; i < sorted.length; i++) {
    if (heightsArr.indexOf(sorted[i]) < minIndex) {
      minIndex = heightsArr.indexOf(sorted[i]);
    }
  }

  //apply the sorted section
  for (let i = 0; i < sorted.length; i++) {
    var swapIndex = heightsArr.indexOf(sorted[i]);

    timeline.addCompareEvent(minIndex, swapIndex);

    if (minIndex != swapIndex) {
      swap(minIndex, swapIndex); //from bubbleSort.js

      timeline.addSwapEvent(minIndex, swapIndex);
    }
    minIndex++;
  }

  return sorted;
}
