function setTime(sec, ms) {
  document.getElementById("time-label").innerHTML =
    "Time: " + sec.toString() + "." + ms.toString() + "s";
  if (sec == 0 && ms == 0) {
    stopwatchSeconds = 0;
    stopwatchMilliseconds = 0;
  }
}

async function startStopwatch() {
  setTime(stopwatchSeconds, stopwatchMilliseconds);

  while (isCurrentlySorting) {
    await sleep(100);

    if (isCurrentlySorting) {
      if (stopwatchMilliseconds < 9) {
        stopwatchMilliseconds++;
      } else {
        stopwatchMilliseconds = 0;
        stopwatchSeconds++;
      }

      setTime(stopwatchSeconds, stopwatchMilliseconds);
    }
  }
}
