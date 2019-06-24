var pageMenu_do;
var thumb;

var body_el;


var myDivAPI_el = null;
var apiMainText_el = null;
var byFWD_img = null;
var apiMainVideoHolder_el = null;
var apiSeconsVideoHolder_el = null;
var apiLogger_el = null;
var textApiLogger_el = null;
var apiButtonsHolder_el = null;
var normalVideoButton;
var fillVideoButton;
var stopButton;
var scrubbButton;
var volumeButton;
var fullscreenButton;
var setPosterButton;
var setYoutubeButton;
var mp4Button;
var getCurrentTimeButton;
var getTotalTimeButton;
var buyButton;

var apiCheckerInterval;
var separatorWidth = 980;
var mainWidth = 906;
var byFWDImageWidth = 65;
var html5ImageWidth = 95;
var logoImageWidth = 957;
var productHolderWidth = 940;
var productHolderHeight = 550;
var whatIsImageWidth = 415;
var whyBuyImageWidth = 940;
var lastLoggerHeight;
var windowW = 0;
var windowH = 0;
var mainMenuId;
var secondMenuId;
var menuBackground;
var menuSeparator;
var button1NormalColor;
var button1SelectedColor;
var button2NormalColor;
var button2SelectedColor;

var prevent;

var resizeHandlerId_to;

function init(){
	
	body_el = document.getElementsByTagName("body")[0];
	myDivAPI_el = document.getElementById("myDivAPI");
	
	
	apiButtonsHolder_el = document.getElementById("apiButtonsHolder");
	apiMainVideoHolder_el  = document.getElementById("apiMainVideoHolder");
	apiSeconsVideoHolder_el = document.getElementById("apiSeconsVideoHolder");
	setupVideoPlayer();
	
	setupAPIButtons();
	setTimeout( function(){
		positionStuff();
		}, 300);
	
	if(window.addEventListener){
		window.addEventListener("resize", onResizeHandler);
	}else if(window.attachEvent){
		window.attachEvent("onresize", onResizeHandler);
	}
}

//#####################################//
/* Resize handler */
//#####################################//
function onResizeHandler(){
	positionStuff();
	setTimeout(positionStuff, 50);
}

//#####################################//
/* Setup API buttons */
//####################################//
function setupAPIButtons(){
	FWDPageSimpleButton.setPrototype();
	normalVideoButton = new FWDPageSimpleButton("FILL NORMAL SCREEN", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	normalVideoButton.getStyle().marginRight = "14px";
	normalVideoButton.getStyle().marginTop = "6px";
	normalVideoButton.addListener(FWDPageSimpleButton.CLICK, normalVideoClickHandler);
	normalVideoButton.disable();
	
	FWDPageSimpleButton.setPrototype();
	fillVideoButton = new FWDPageSimpleButton("FILL ENTIRE SCREEN", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	fillVideoButton.getStyle().marginRight = "14px";
	fillVideoButton.getStyle().marginTop = "6px";
	fillVideoButton.addListener(FWDPageSimpleButton.CLICK, fillVideoClickHandler);
	
	document.documentElement.appendChild(normalVideoButton.screen);
	document.documentElement.appendChild(fillVideoButton.screen);
};

function normalVideoClickHandler(){
	//player1.normalVideo();
	normalVideoButton.disable();
	fillVideoButton.enable();
	player1.fillEntireVideoScreen(false);
}

function fillVideoClickHandler(){
	//player1.fillVideo();
	normalVideoButton.enable();
	fillVideoButton.disable();
	player1.fillEntireVideoScreen(true);
}


//#####################################//
/* Position stuff */
//#####################################//
function positionStuff(){
	return;
	windowW = window.innerWidth;
	
	var whatIsMainTextWidth = Math.min(mainWidth - 20, windowW - 16);
	var whatIsMainTextX = parseInt((windowW - whatIsMainTextWidth)/2);
	
	apiMainVideoHolder_el.style.left = whatIsMainTextX + "px";
	apiMainVideoHolder_el.style.width = whatIsMainTextWidth + "px"; 
	
	var secondVideoHolederWidth = whatIsMainTextWidth - 320;
	
	if(FWDEVPUtils.isIEAndLessThen9){
		secondVideoHolederWidth = Math.min(windowW - 12, 800);
		apiSeconsVideoHolder_el.style.width = secondVideoHolederWidth + "px";
		apiSeconsVideoHolder_el.style.margin = "auto";
		apiButtonsHolder_el.style.width = secondVideoHolederWidth + "px";
		apiButtonsHolder_el.style.margin = "auto";
		apiButtonsHolder_el.style.marginTop = "7px";
	}else{
		apiSeconsVideoHolder_el.style.width = whatIsMainTextWidth + "px";
		apiButtonsHolder_el.style.clear = "right";
		apiButtonsHolder_el.style.width = "100%";
		apiButtonsHolder_el.style.marginTop = "10px";
		
	}
}

