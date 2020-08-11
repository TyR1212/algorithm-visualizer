//this class is meant to store all of the compares and swaps an algorithm does while sorting, then
//it can be played back visually by swapping around the bars and changing the colors
class Timeline {
  constructor() {
    this._events = [];
  }

  addSwapEvent(index1, index2) {
    this._events.push(new Event('swap', index1, index2));
  }

  addCompareEvent(index1, index2) {
    this._events.push(new Event('compare', index1, index2));
  }

  clearEvents() {
    this._events = [];
  }

  //visually play back the compares and swaps of the algorithm that was just ran
  async playBack() {
    if (!isPlaybackComplete) {
      heightsArr = heightsArrOriginal.slice();
    }

    for (let i = 0; i < this._events.length; i++) {
      if (this._events[i].type == "compare") {
        changeBarColor(this._events[i].index1, "mediumpurple");
        changeBarColor(this._events[i].index2, "mediumpurple");
      }
      else if (this._events[i].type == "swap") {
        changeBarColor(this._events[i].index1, "red");
        changeBarColor(this._events[i].index2, "red");
        swap(this._events[i].index1, this._events[i].index2); //from bubbleSort.js
        updateBars();
      }

      await sleep(sortingSpeed);
      await checkIfPaused();

      if (isSortCancelled) {
        isSortCancelled = false;
        resetAllBarColors();
        return;
      }

      changeBarColor(this._events[i].index1, "green");
      changeBarColor(this._events[i].index2, "green");
    }

    this.clearEvents();
    isPlaybackComplete = true;
  }
}

//a compare or swap event
class Event {
  constructor(t, i1, i2) {
    this.type = t;
    this.index1 = i1;
    this.index2 = i2;
  }
}
