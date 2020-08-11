//toggle sorting pause
function togglePaused() {
  if (isCurrentlySorting) {
    isPaused = true;
    setButtonColorActive("pause");
    resetButtonColor("play");
    resetButtonColor("reset");
    resetButtonColor("randomize");
  }
}

//if paused, loop until unpaused or until cancelled
async function checkIfPaused() {
  if (isPaused) {
    isCurrentlySorting = false;

    while (isPaused) {
      await sleep(10);
    }

    if (!isSortCancelled) {
      isCurrentlySorting = true;
      startStopwatch();
    }
  }
}
