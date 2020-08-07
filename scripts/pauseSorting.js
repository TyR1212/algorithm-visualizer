function togglePaused() {
  if (isCurrentlySorting) {
    isPaused = true;
    setButtonColorActive("pause");
    resetButtonColor("play");
    resetButtonColor("reset");
    resetButtonColor("randomize");
  }
}

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
