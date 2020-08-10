async function toggleSlideMenu() {
  if (!isMenuSliding) {
    var greyOverlay = document.getElementById("grey-overlay");
    var slideMenu = document.getElementById("slide-menu");
    var slideMenuToggler = document.getElementById("slide-menu-toggler");
    
    slideMenu.classList.toggle("active");
    greyOverlay.classList.toggle("active");
    slideMenuToggler.classList.toggle("active");
    isMenuSliding = true;
    
    //clicking the grey overlay when menu is active can toggle the menu
    if (greyOverlay.style.zIndex == "2") {
      await sleep(400); //wait for slide animation to end
      greyOverlay.style.zIndex = "-1";
    }
    else {
      greyOverlay.style.zIndex = "2";
      await sleep(400); //wait for slide animation to end
    }

    isMenuSliding = false;
  }
}

async function moveTogglerAnimationPageStart() {
  var slideMenuToggler = document.getElementById("slide-menu-toggler");
  
  await sleep(300);
  slideMenuToggler.style.top = '125px';
  await sleep(1000);
  slideMenuToggler.style.top = '90px';
}

function unselectAllChildButtons(parentId) {
  var buttons = document.getElementById(parentId).getElementsByTagName('button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('selected');
  }
}

function selectAlgorithm(name) {
  unselectAllChildButtons("algorithm-select-container")

  document.getElementsByName(name)[0].classList.toggle('selected');
  algorithm = name;
  updateHeading();
}

function selectSpeed(name) {
  unselectAllChildButtons("speed-select-container")

  document.getElementsByName(name)[0].classList.toggle('selected');
}

function validateNumBarsField(value) {
  var numBarsField = document.getElementById('num-bars-select-container').getElementsByTagName('input')[0];
  var numBarsPopup = document.getElementById('num-bars-popup');

  if (value > 300 || value < 15) {
    numBarsField.style.backgroundColor = "lightcoral";
    numBarsPopup.style.opacity = '1';
  }
  else {
    numBarsField.style.backgroundColor = "white";
    numBarsPopup.style.opacity = '0';
  }
}

function updateHeading() {
  if (algorithm == "insertion") {
    document.getElementById('heading').innerText = "Insertion Sort";
  }
  else if (algorithm == "bubble") {
    document.getElementById('heading').innerText = "Bubble Sort";
  }
  else if (algorithm == "merge") {
    document.getElementById('heading').innerText = "Merge Sort";
  }
  else {
    document.getElementById('heading').innerText = "Selection Sort";
  }
}

moveTogglerAnimationPageStart();
//toggleSlideMenu();
