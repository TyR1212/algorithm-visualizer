//if ready to sort, start the sorting
function startSort() {
  if (!isSortingStarted && sortingSpeed != 0) {
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

    if (isSortingStarted) {
      isSortCancelled = false;
      isCurrentlySorting = true;
      setTime(0, 0);
      startStopwatch();
    }
  }
  
  if (isSortingStarted) {
    isPaused = false;
    setButtonColorActive("play");
    resetButtonColor("pause");
    greyOutButton("reset");
    greyOutButton("randomize");
  }
  else { //algorithm and or speed is not selected
    toggleSlideMenu();
  }
}

//if sorting was completed, play back the results stored in the timeline
async function finishedSorting() {
  await timeline.playBack();

  if (isPlaybackComplete) {
    isPlaybackComplete = true;
    colorFlashEffect("bar", "green");
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
