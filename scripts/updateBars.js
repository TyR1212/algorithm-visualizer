//update bars to show sorting changes
function updateBars() {
  for (let i = 0; i < numBars; i++) {
    let bar = document.getElementById("b" + i.toString());
    bar.style.height = heightsArr[i].toString() + "px";
  }
}
