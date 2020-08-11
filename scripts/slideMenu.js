//slide menu in or out
async function toggleSlideMenu() {
  if (!isMenuSliding) {
    var greyOverlay = document.getElementById("grey-overlay");
    var slideMenu = document.getElementById("slide-menu");
    var slideMenuToggler = document.getElementById("slide-menu-toggler");
    
    slideMenu.classList.toggle("active");
    greyOverlay.classList.toggle("active");
    slideMenuToggler.classList.toggle("active");
    isMenuSliding = true;
    
    //clicking the grey overlay, when menu is active, can toggle the menu
    if (greyOverlay.style.zIndex == "2") {
      await sleep(400); //wait for slide animation to end
      greyOverlay.style.zIndex = "-1";
    }
    else {
      if (isCurrentlySorting) {
        togglePaused(); //sliding menu out will pause the sorting
      }

      greyOverlay.style.zIndex = "2";
      await sleep(400); //wait for slide animation to end
    }

    isMenuSliding = false;
  }
}

//when page first loads, move the toggler button down and back up
async function moveTogglerAnimationPageStart() {
  var slideMenuToggler = document.getElementById("slide-menu-toggler");
  
  await sleep(300);
  slideMenuToggler.style.top = '95px';
  await sleep(1000);
  slideMenuToggler.style.top = '60px';
}

//unselect all of the slide menu buttons
function unselectAllChildButtons(parentId) {
  var buttons = document.getElementById(parentId).getElementsByTagName('button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('selected');
  }
}

//change the selected algorithm
function selectAlgorithm(name) {
  unselectAllChildButtons("algorithm-select-container")

  document.getElementsByName(name)[0].classList.toggle('selected');
  algorithm = name;
  updateHeadingAndComplexity();

  if (isSortingStarted) {
    resetBars();
  }
}

//change the selected speed
function selectSpeed(name) {
  unselectAllChildButtons("speed-select-container")

  document.getElementsByName(name)[0].classList.toggle('selected');
  sortingSpeed = getSpeedInIntForm(name);
  document.getElementById('speed-label').innerText = "Speed: " + name;

  if (isSortingStarted) {
    resetBars();
  }
}

//convert speed string to int
function getSpeedInIntForm(speed) {
  if (speed == "1x") return 100;
  else if (speed == "2x") return 50;
  else if (speed == "3x") return 10;
}

//make sure the number of bars is between 15 and 300, redraw bars with new number selected
function validateNumBarsField(value) {
  var numBarsField = document.getElementById('num-bars-select-container').getElementsByTagName('input')[0];
  var numBarsPopup = document.getElementById('num-bars-popup');
  var numBarsLabel = document.getElementById('num-bars-label');

  if (value > 300 || value < 15) {
    numBarsField.style.backgroundColor = "lightcoral";
    numBarsPopup.style.opacity = '1';
  }
  else {
    numBarsField.style.backgroundColor = "white";
    numBarsPopup.style.opacity = '0';
    numBars = value;
    numBarsLabel.innerText = "No. of Bars: " + numBars;
    getHeights();
    randomizeHeights();
    drawBars();
  }
}

//change the heading to the algorithm name and change complexity text
function updateHeadingAndComplexity() {
  var heading = document.getElementById('heading');
  var complexity = document.getElementById('complexity-label');

  if (algorithm == "insertion") {
    heading.innerText = "Insertion Sort";
    complexity.innerText = "Complexity: O(n*2)";
  }
  else if (algorithm == "bubble") {
    heading.innerText = "Bubble Sort";
    complexity.innerHTML = 'Complexity: O(n<sup style="font-size: 14px;">2</sup>)';
  }
  else if (algorithm == "merge") {
    heading.innerText = "Merge Sort";
    complexity.innerText = "Complexity: O(n*log(n))";
  }
  else if (algorithm == "selection") {
    heading.innerText = "Selection Sort";
    complexity.innerHTML = 'Complexity: O(n<sup style="font-size: 14px;">2</sup>)';
  }
}

moveTogglerAnimationPageStart();
//toggleSlideMenu();
