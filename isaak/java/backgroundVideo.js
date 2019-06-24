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
var playButton;
var pauseButton;
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
	apiLogger_el = document.getElementById("apiLogger");
	textApiLogger_el = document.getElementById("textApiLogger");
	apiMainVideoHolder_el  = document.getElementById("apiMainVideoHolder");
	apiSeconsVideoHolder_el = document.getElementById("apiSeconsVideoHolder");
	apiMainVideoHolder_el.style.padding = "0px";
	apiMainVideoHolder_el.style.marginBottom = "20px";
	
	setupVideoPlayer();
	regesterApi();
	
	positionStuff();
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


//#############################//
/* API */
//#############################//
function regesterApi(){
	clearInterval(apiCheckerInterval);
	if(!window.player1){
		apiCheckerInterval = setInterval(regesterApi, 100);
	}else{
		window.player1.addListener(FWDEVPlayer.READY, apiReadyHandler);
		window.player1.addListener(FWDEVPlayer.PLAY, apiPlayHandler);
		window.player1.addListener(FWDEVPlayer.PAUSE, apiPauseHandler);
		window.player1.addListener(FWDEVPlayer.STOP, apiStopHandler);
		window.player1.addListener(FWDEVPlayer.ERROR, apiErrorHandler);
		window.player1.addListener(FWDEVPlayer.UPDATE_POSTER_SOURCE, apiUpdatePosterSource);
		window.player1.addListener(FWDEVPlayer.UPDATE_VIDEO_SOURCE, apiUpdateVideoSource);
		window.player1.addListener(FWDEVPlayer.GO_FULLSCREEN, apiGoFullScreenHandler);
		window.player1.addListener(FWDEVPlayer.GO_NORMALSCREEN, apiGoNormalScreenHandler);
		window.player1.addListener(FWDEVPlayer.PLAY_COMPLETE, apiPlayCompleteHandler);
	}
}

function apiReadyHandler(){
	setupAPIButtons();
	addMessage("API ready!");
	addMessage("Please note that this white console is here just to visualize some of the events in the API and the buttons are here to show that the video can be controlled with the API!");
};

function apiPlayHandler(){
	addMessage("play");
};

function apiPauseHandler(){
	addMessage("pause");
};

function apiStopHandler(){
	addMessage("stop");
};

function apiErrorHandler(e){
	addMessage(e.error);
};

function apiUpdatePosterSource(){
	addMessage("poster source updated to " + "<font color='#0099FF'>" + player1.getPosterSource() + "</font>");
}

function apiUpdateVideoSource(){
	addMessage("video source updated to " + "<font color='#0099FF'>" + player1.getVideoSource() + "</font>");
}

function apiGoFullScreenHandler(){
	lastLoggerHeight = player1.stageHeight + "px";
	prevent = true;
	addMessage("go fullscreen");
}

function apiGoNormalScreenHandler(){
	addMessage("exit fullscreen");
	prevent = true;
	if(!FWDEVPUtils.isIEAndLessThen9) apiLogger_el.style.height = lastLoggerHeight + "px";
	setTimeout(function(){
		prevent = false;
	}, 500);
}

function apiPlayCompleteHandler(){
	addMessage("play complete");
};

//#####################################//
/* Setup API buttons */
//####################################//
function setupAPIButtons(){
	addMessage("Event listeners console...");
	FWDPageSimpleButton.setPrototype();
	playButton = new FWDPageSimpleButton("play", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	playButton.getStyle().marginRight = "14px";
	playButton.getStyle().marginTop = "6px";
	playButton.addListener(FWDPageSimpleButton.CLICK, playClickHandler);
	
	FWDPageSimpleButton.setPrototype();
	pauseButton = new FWDPageSimpleButton("pause", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	pauseButton.getStyle().marginRight = "14px";
	pauseButton.getStyle().marginTop = "6px";
	pauseButton.addListener(FWDPageSimpleButton.CLICK, pauseClickHandler);
	
	FWDPageSimpleButton.setPrototype();
	stopButton = new FWDPageSimpleButton("stop", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	stopButton.getStyle().marginRight = "14px";
	stopButton.getStyle().marginTop = "5px";
	stopButton.addListener(FWDPageSimpleButton.CLICK, stopClickHandler);
	
	FWDPageSimpleButton.setPrototype();
	scrubbButton = new FWDPageSimpleButton("scrub to 50%", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	scrubbButton.getStyle().marginRight = "14px";
	scrubbButton.getStyle().marginTop = "6px";
	scrubbButton.addListener(FWDPageSimpleButton.CLICK, scrubbClickHandler);
	
	FWDPageSimpleButton.setPrototype();
	volumeButton = new FWDPageSimpleButton("set volume to 50%", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	volumeButton.getStyle().marginRight = "14px";
	volumeButton.getStyle().marginTop = "6px";
	volumeButton.addListener(FWDPageSimpleButton.CLICK, volumeClickHandler);
	
	FWDPageSimpleButton.setPrototype();
	mp4Button = new FWDPageSimpleButton("change mp4 source", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	mp4Button.getStyle().marginRight = "14px";
	mp4Button.getStyle().marginTop = "6px";
	mp4Button.addListener(FWDPageSimpleButton.CLICK, setMp4ClickHandler);
	
	FWDPageSimpleButton.setPrototype();
	getCurrentTimeButton = new FWDPageSimpleButton("get time", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	getCurrentTimeButton.getStyle().marginRight = "14px";
	getCurrentTimeButton.getStyle().marginTop = "6px";
	getCurrentTimeButton.addListener(FWDPageSimpleButton.CLICK, getCurrentTimeClickHandler);
	
	FWDPageSimpleButton.setPrototype();
	getTotalTimeButton = new FWDPageSimpleButton("get duration", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	getTotalTimeButton.getStyle().marginRight = "14px";
	getTotalTimeButton.getStyle().marginTop = "6px";
	getTotalTimeButton.addListener(FWDPageSimpleButton.CLICK, getTotalTimeClickHandler);
	
	apiButtonsHolder_el.appendChild(playButton.screen);
	apiButtonsHolder_el.appendChild(pauseButton.screen);
	apiButtonsHolder_el.appendChild(stopButton.screen);
	apiButtonsHolder_el.appendChild(scrubbButton.screen);
	apiButtonsHolder_el.appendChild(volumeButton.screen);
	apiButtonsHolder_el.appendChild(mp4Button.screen);
	apiButtonsHolder_el.appendChild(getCurrentTimeButton.screen);
	apiButtonsHolder_el.appendChild(getTotalTimeButton.screen);
};

function playClickHandler(){
	player1.play();
}

function pauseClickHandler(){
	player1.pause();
}

function stopClickHandler(){
	player1.stop();
}

function scrubbClickHandler(){
	player1.scrub(.5);
}

function volumeClickHandler(){
	player1.setVolume(.5);
}

function fullscreenClickHandler(){
	player1.goFullScreen();
}

function setPosterClickHandler(){
	player1.setPosterSource("content/posters/youtube-poster.jpg, content/posters/youtube-poster-mobile.jpg");
}

function setYoutubeClickHandler(){
	player1.setVideoSource("-1KMSzY6tQc");
}

function vimeoClickHandler(){
	player1.setVideoSource("https://vimeo.com/146753785");
}

function setMp4ClickHandler(){
	player1.setVideoSource("content/videos/ad.mp4, content/videos/ad-mobile.mp4");
}

function getCurrentTimeClickHandler(){
	addMessage("current time: " +  "<font color='#0099FF'>"+  player1.getCurrentTime() + "</font>");
}

function getTotalTimeClickHandler(){
	addMessage("total time: " +  "<font color='#0099FF'>" + player1.getTotalTime() + "</font>");
}


function addMessage(message){
	var currentInnerHTML = textApiLogger_el.innerHTML + message + "<br>";
	self.textApiLogger_el.innerHTML = currentInnerHTML;  
	var top = -(textApiLogger_el.offsetHeight -  apiLogger_el.offsetHeight);
	if(top > 0) top = 0;
	setTimeout(function(){
		self.textApiLogger_el.style.top = top + "px";
	});
};

//#####################################//
/* Position stuff */
//#####################################//
function positionStuff(){
	windowW = window.innerWidth;
	
	var whatIsMainTextWidth = Math.min(mainWidth - 60, windowW - 60);
	var whatIsMainTextX = parseInt((windowW - whatIsMainTextWidth)/2) - 8;
	
	apiMainVideoHolder_el.style.left = whatIsMainTextX + "px";
	apiMainVideoHolder_el.style.width = whatIsMainTextWidth + "px"; 
	
	var secondVideoHolederWidth = whatIsMainTextWidth - 320;
	
	if(FWDEVPUtils.isIEAndLessThen9){
		secondVideoHolederWidth = Math.min(windowW - 12, 800);
		apiSeconsVideoHolder_el.style.width = secondVideoHolederWidth + "px";
		apiSeconsVideoHolder_el.style.margin = "auto";
		apiLogger_el.style.width = secondVideoHolederWidth + "px";
		apiLogger_el.style.height = "200px";
		apiLogger_el.style.margin = "auto";
		apiLogger_el.style.marginTop = "15px";
		apiButtonsHolder_el.style.width = secondVideoHolederWidth + "px";
		apiButtonsHolder_el.style.margin = "auto";
		apiButtonsHolder_el.style.marginTop = "7px";
	}else{
		
		apiSeconsVideoHolder_el.style.width = whatIsMainTextWidth + "px";
		
		apiLogger_el.style.clear = "right";
		apiLogger_el.style.width = "100%";
		apiLogger_el.style.height = "200px";
		apiLogger_el.style.marginTop = "20px";
		apiLogger_el.style.marginBottom = "0px";
		apiButtonsHolder_el.style.clear = "right";
		apiButtonsHolder_el.style.width = "100%";
		apiButtonsHolder_el.style.marginTop = "10px";
		
	}
}

