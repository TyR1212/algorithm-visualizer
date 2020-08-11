//restore to original heights array
function resetBars() {
  if (!isCurrentlySorting) {
    for (let i = 0; i < numBars; i++) {
      let bar = document.getElementById("b" + i.toString());
      bar.style.height = heightsArrOriginal[i].toString() + "px";
    }

    heightsArr = heightsArrOriginal.slice();

      buttonColorFlash('reset');
      resetStates();
  }
}
