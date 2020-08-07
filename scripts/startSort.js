function startSort() {
  if (!isSortingStarted) {
    isSortingStarted = true;
    isSortCancelled = false;
    isCurrentlySorting = true;
    setTime(0, 0);
    startStopwatch();

    if (algorithm == "bubble") {
      bubbleSort();
    }
    if (algorithm == "merge") {
      mergeSort();
    }
    if (algorithm == "insertion") {
      insertionSort();
    }
    if (algorithm == "selection") {
      selectionSort();
    }
}

if (isSortingStarted) {
  isPaused = false;
  setButtonColorActive('play')
  resetButtonColor('pause');
  greyOutButton('reset');
  greyOutButton('randomize');
  }
}

async function finishedSorting() {
  await timeline.playBack();

  if (isPlaybackComplete) {
    isPlaybackComplete = true;
    colorFadeEffect("bar", "green");
    addRow();
    redrawTable();
  }
  else {
    timeline.clearEvents();
  }

  isCurrentlySorting = false;
  isSortingStarted = false;
  setBtnsToStartingColors();
}
