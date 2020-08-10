function startSort() {
  if (!isSortingStarted) {
    if (algorithm == "bubble") {
      bubbleSort();
      isSortingStarted = true;
    }
    if (algorithm == "merge") {
      mergeSort();
      isSortingStarted = true;
    }
    if (algorithm == "insertion") {
      insertionSort();
      isSortingStarted = true;
    }
    if (algorithm == "selection") {
      selectionSort();
      isSortingStarted = true;
    }
  }

  if (isSortingStarted) {
    isSortCancelled = false;
    isCurrentlySorting = true;
    setTime(0, 0);
    startStopwatch();
    isPaused = false;
    setButtonColorActive("play");
    resetButtonColor("pause");
    greyOutButton("reset");
    greyOutButton("randomize");
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

  if (isPlaybackComplete) {
    setBtnsToStartingColors();
  }
}
