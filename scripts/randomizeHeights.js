//randomize the heights array
function randomizeHeights() {
  if (!isCurrentlySorting) {
    let currentIndex = heightsArr.length;
    let temp = 0;
    let randomIndex = 0;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temp = heightsArr[currentIndex];
      heightsArr[currentIndex] = heightsArr[randomIndex];
      heightsArr[randomIndex] = temp;
    }

    heightsArrOriginal = heightsArr.slice();

      buttonColorFlash('randomize');
      resetStates();
  }
}
