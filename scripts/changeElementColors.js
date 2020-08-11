function changeBarColor(id, color) {
  document.getElementById("b" + id.toString()).style.backgroundColor = color;
}

function resetAllBarColors() {
  let bars = document.getElementsByClassName("bar");

  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "green";
  }
}

//flash effect for the bars when sorting is completed
async function colorFlashEffect(className, initialColor) {
  let elements = document.getElementsByClassName(className);

  for (let i = 80; i >= 25; i--) {
    for (let j = 0; j < elements.length; j++) {
      elements[j].style.backgroundColor = "hsl(125, 100%, " + i.toString() + "%)";
    }
    await sleep(10);
  }

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = initialColor;
  }
}

//button color functions

function greyOutButton(btnId) {
  document.getElementById(btnId + "-btn").style.color = greyColor;
  document.getElementById(btnId + "-btn").style.backgroundColor = greyBgColor;
  document.getElementById(btnId + "-icon").style.color = greyColor;
}

function resetButtonColor(btnId) {
  document.getElementById(btnId + "-btn").style.color = "unset";
  document.getElementById(btnId + "-btn").style.backgroundColor = "unset";
  document.getElementById(btnId + "-icon").style.color = "unset";
}

function setBtnsToStartingColors() {
  greyOutButton("pause");
  resetButtonColor("play");
  resetButtonColor("reset");
  resetButtonColor("randomize");
}

function setStartAndPauseBtnsToStartingColors() {
  greyOutButton("pause");
  resetButtonColor("play");
}

async function buttonColorFlash(btnId) {
  var bgColor = btnId == "reset" ? resetBtnBgColor : randomizeBtnBgColor;
  var iconColor = btnId == "reset" ? resetBtnIconColor : randomizeBtnIconColor;

  document.getElementById(btnId + "-btn").style.backgroundColor = bgColor;
  document.getElementById(btnId + "-icon").style.color = iconColor;
  await sleep(1000);

  if (document.getElementById(btnId + "-icon").style.color != greyColor) {
    document.getElementById(btnId + "-btn").style.backgroundColor = "unset";
  }

  document.getElementById(btnId + "-icon").style.color = "unset";
}

function setButtonColorActive(btnId) {
  var bgColor = "unset";
  var iconColor = "unset";

  if (btnId == "play") {
    bgColor = playBtnBgColor;
    iconColor = playBtnIconColor;
  } else if (btnId == "pause") {
    bgColor = pauseBtnBgColor;
    iconColor = pauseBtnIconColor;
  } else if (btnId == "reset") {
    bgColor = resetBtnBgColor;
    iconColor = resetBtnIconColor;
  } else if (btnId == "randomize") {
    bgColor = randomizeBtnBgColor;
    iconColor = randomizeBtnIconColor;
  }

  document.getElementById(btnId + "-btn").style.backgroundColor = bgColor;
  document.getElementById(btnId + "-icon").style.color = iconColor;
}
