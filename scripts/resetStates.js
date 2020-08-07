function resetStates() {
  isSortingStarted = false;
  isPaused = false;
  isCurrentlySorting = false;
  isSortCancelled = true;
  isPlaybackComplete = false;
  setTime(0, 0);
  greyOutButton("pause");
}
