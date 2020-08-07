var heightsArr = [];
const numBars = 15;
const maxNumBars = 300;
var isPaused = false;
var isCurrentlySorting = false;
var isSortCancelled = false;
var isSortingStarted = false;
var isPlaybackComplete = false;
var stopwatchSeconds = 0;
var stopwatchMilliseconds = 0;
var sortingSpeed = 100;
var algorithm = "merge";
var previousRuns = [];
var timeline = new Timeline();

//button colors
const resetBtnBgColor = "rgba(30, 143, 255, 0.233)";
const resetBtnIconColor = "dodgerblue";
const randomizeBtnBgColor = "rgba(138, 43, 226, 0.233)";
const randomizeBtnIconColor = "blueviolet";
const playBtnBgColor = "rgba(0, 128, 0, 0.233)";
const playBtnIconColor = "green";
const pauseBtnBgColor = "rgba(255, 140, 0, 0.233)";
const pauseBtnIconColor = "darkorange";
const greyBgColor = "rgba(128, 128, 128, 0.2)";
const greyColor = "grey";
