var heightsArr = [];         //the array for sorting, stores the heights of all the bars
var heightsArrOriginal = []; //keeps track of the original unsorted array for the reset function
const maxNumBars = 300;
var isPaused = false;
var isCurrentlySorting = false;
var isSortCancelled = false;
var isSortingStarted = false;
var isPlaybackComplete = false;
var stopwatchSeconds = 0;
var stopwatchMilliseconds = 0;
var previousRuns = [];      //stores all the runs for the previous runs table
var timeline = new Timeline(); //stores the swap and compare events for the sorting algorithms to play back once sorting is complete
var isMenuSliding = false;
var pageJustLoaded = true;

//options
var numBars = 30;
var algorithm = "";
var sortingSpeed = 0;

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
