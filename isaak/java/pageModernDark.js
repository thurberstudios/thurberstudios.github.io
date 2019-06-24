var pageMenu_do;
var thumb;

var body_el;
var td_els;
var mainHeader_el = null;
var menuHolder_el = null;
var firstExample_el = null;
var secondExample_el = null;
var productHolder_el = null;
var productHolder2_el = null;
var myDivAPI_el = null;
var whatIsMainText_el = null;
var logoImage_img = null;
var mainFeatureTableHolder_el = null;
var apiMainText_el = null;
var col1_el = null;
var col2_el = null;
var byFWD_img = null;
var specialNotes_el = null;
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
var mainWidth = 980;
var byFWDImageWidth = 65;
var html5ImageWidth = 95;
var logoImageWidth = 393;
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
	try{
		if(window.top != window && window.location.search.indexOf("EVPInstanceName") == -1){
			top.location.href = 'index.html';	
		}
	}catch(e){}
	pageInit(1,0, "#1f1f1f", "graphics/menu-button-separator.jpg", "#7a7a7a","#0099ff", "#FFFFFF", "#0099ff");
}

function pageInit(p1, p2, p3, p4, p5, p6, p7, p8){
	
	mainMenuId = p1;
	secondMenuId = p2;
	menuBackground = p3;
	menuSeparator = p4;
	button1NormalColor = p5;
	button1SelectedColor = p6;
	button2NormalColor = p7;
	button2SelectedColor = p8;

	body_el = document.getElementsByTagName("body")[0];
	td_els = document.getElementsByTagName("td"); 
	specialNotes_el = document.getElementById("specialNotes");
	whatIsMainText_el = document.getElementById("whatIsMainText");
	mainFeatureTableHolder_el  = document.getElementById("mainFeatureTableHolder");
	col1_el = document.getElementById("col1");
	col2_el = document.getElementById("col2");
	mainHeader_el = document.getElementById("mainHeader");
	menuHolder_el = document.getElementById("menuHolder");
	productHolder_el = document.getElementById("myDiv");
	productHolder2_el = document.getElementById("myDiv2");
	productHolder3_el = document.getElementById("myDiv3");
	myDivAPI_el = document.getElementById("myDivAPI");
	firstExample_el = document.getElementById("firstExample");
	secondExample_el = document.getElementById("secondExample");
	thirdExample_el = document.getElementById("thirdExample");
	logoImage_img = document.getElementById("logoImage");
	apiMainText_el = document.getElementById("apiMainText");
	apiButtonsHolder_el = document.getElementById("apiButtonsHolder");
	apiLogger_el = document.getElementById("apiLogger");
	textApiLogger_el = document.getElementById("textApiLogger");
	apiMainVideoHolder_el  = document.getElementById("apiMainVideoHolder");
	apiSeconsVideoHolder_el = document.getElementById("apiSeconsVideoHolder");
	byFWD_img = document.getElementById("byFWD");
	
	productHolder_el.style.margin = "auto";
	productHolder2_el.style.margin = "auto";
	productHolder3_el.style.margin = "auto";
	
	setupByFWD();
	setupMenu();
	setupVideoPlayer();
	setupVideoPlayer2();
	setupVideoPlayer3();
	setupAPIPlayer();
	setupLightboxPlayer();
	setupBuyButton();
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

function setupByFWD(){
	byFWD_img.style.cursor = "pointer";
	byFWD_img.width = 45;
	byFWD_img.onclick = function(){
		window.open("http://www.webdesign-flash.ro", "_blank");
	};
	
	byFWD_img.onmouseover = function(){
		FWDAnimation.killTweensOf(byFWD_img);
		FWDAnimation.to(byFWD_img, 1, {scaleX:1.4, scaleY:1.4, ease:Elastic.easeOut, repeat:-1, repeatDelay:0.2})
	}
	
	byFWD_img.onmouseout = function(){
		FWDAnimation.killTweensOf(byFWD_img);
		FWDAnimation.to(byFWD_img, 1, {scaleX:1, scaleY:1, ease:Elastic.easeOut})
	}
}

function positionLogoImage(){
	var logoImageHeight = 162;
	
	var templogoImageWidth = Math.min(logoImageWidth, windowW);
	var logoImageHeight = (templogoImageWidth/logoImageWidth) * logoImageHeight;
	var logoImageX = parseInt((windowW - templogoImageWidth)/2);
	var logoImageY =  Math.round((176 - logoImageHeight)/2) - 5;
	
	logoImage_img.style.width = templogoImageWidth  + "px";
	logoImage_img.style.height = logoImageHeight  + "px";
	
	logoImage_img.style.left = logoImageX  + "px";
	logoImage_img.style.top =  logoImageY + "px";
	
	var byFWDX = logoImageX + templogoImageWidth - 50; 
	var btFWDY = logoImageY + logoImageHeight - (Math.round( 88 * (templogoImageWidth/logoImageWidth)))

	byFWD_img.style.left = byFWDX + "px";
	byFWD_img.style.top = btFWDY + "px"	
};





//#####################################//
/* Resize handler */
//#####################################//
function onResizeHandler(){
	positionStuff();
	setTimeout(positionStuff, 50);
}

//#####################################//
/* Setup menu */
//####################################//
function setupMenu(){
	FWDPageMenu.setPrototype();
	pageMenu_do = new FWDPageMenu({
		disabledButton:0,
		parent:menuHolder_el,
		menuLabels:["MINIMAL DARK, MINIMAL WHITE", "MODERN DARK, MODERN WHITE", "CLASSIC DARK, CLASSIC WHITE", "METAL DARK, METAL WHITE","<span style='color:#00FF00;'>GREEN</span> SCREEN, <span style='color:#FF0000;'>H</span><span style='color:#00FF00;'>E</span><span style='color:#0099FF;'>X</span> COLORS", "STICKY"],
		buttonSeparatorPath:menuSeparator,
		button1NormalColor:button1NormalColor,
		button1SelectedColor:button1SelectedColor,
		button2NormalColor:button2NormalColor,
		button2SelectedColor:button2SelectedColor,
		backgroundColorOrPath:menuBackground,
		spacerColor:"#cccccc"
	});
	
	pageMenu_do.disableButton(mainMenuId, secondMenuId);
	pageMenu_do.addListener(FWDPageMenuButton.CLICK, clickHandler);
}

function clickHandler(e){
	
	if(e.mainButtonId == 0 && e.buttonId == 0){
		window.location.href = "index.html";
	}else if(e.mainButtonId == 0 && e.buttonId == 1){
		window.location.href = "minimal-white.html";
	}else if(e.mainButtonId == 1 && e.buttonId == 0){
		window.location.href = "modern-dark.html";
	}else if(e.mainButtonId == 1 && e.buttonId == 1){
		window.location.href = "modern-white.html";
	}else if(e.mainButtonId == 2 && e.buttonId == 0){
		window.location.href = "clasic-dark.html";
	}else if(e.mainButtonId == 2 && e.buttonId == 1){
		window.location.href = "clasic-white.html";
	}else if(e.mainButtonId == 3 && e.buttonId == 0){
		window.location.href = "metal-dark.html";
	}else if(e.mainButtonId == 3 && e.buttonId == 1){
		window.location.href = "metal-white.html";
	}else if(e.mainButtonId == 4 && e.buttonId == 0){
		window.location.href = "gr.html";
	}else if(e.mainButtonId == 4 && e.buttonId == 1){
		window.location.href = "hex.html";
	}else if(e.mainButtonId == 5 && e.buttonId == 0){
		window.location.href = "sticky.html";
	}
};

//#############################//
/* API */
//#############################//
function regesterApi(){
	clearInterval(apiCheckerInterval);
	if(!window.playerAPI){
		apiCheckerInterval = setInterval(regesterApi, 100);
	}else{
		positionTextAndSeparators();
		window.playerAPI.addListener(FWDEVPlayer.READY, apiReadyHandler);
		window.playerAPI.addListener(FWDEVPlayer.PLAY, apiPlayHandler);
		window.playerAPI.addListener(FWDEVPlayer.PAUSE, apiPauseHandler);
		window.playerAPI.addListener(FWDEVPlayer.STOP, apiStopHandler);
		window.playerAPI.addListener(FWDEVPlayer.ERROR, apiErrorHandler);
		window.playerAPI.addListener(FWDEVPlayer.UPDATE_POSTER_SOURCE, apiUpdatePosterSource);
		window.playerAPI.addListener(FWDEVPlayer.UPDATE_VIDEO_SOURCE, apiUpdateVideoSource);
		window.playerAPI.addListener(FWDEVPlayer.GO_FULLSCREEN, apiGoFullScreenHandler);
		window.playerAPI.addListener(FWDEVPlayer.GO_NORMALSCREEN, apiGoNormalScreenHandler);
		window.playerAPI.addListener(FWDEVPlayer.PLAY_COMPLETE, apiPlayCompleteHandler);
	}
}

function apiReadyHandler(){
	setupAPIButtons();
	addMessage("API ready!");
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
	addMessage("poster source updated to " + "<font color='#0099FF'>" + playerAPI.getPosterSource() + "</font>");
}

function apiUpdateVideoSource(){
	addMessage("video source updated to " + "<font color='#0099FF'>" + playerAPI.getVideoSource() + "</font>");
}

function apiGoFullScreenHandler(){
	lastLoggerHeight = playerAPI.stageHeight + "px";
	prevent = true;
	addMessage("go fullscreen");
}

function apiGoNormalScreenHandler(){
	addMessage("exit fullscreen");
	prevent = true;
	if(!FWDEVPUtils.isIEAndLessThen9) apiLogger_el.style.height = lastLoggerHeight + "px";
	setTimeout(function(){
		prevent = false;
		positionTextAndSeparators();
	}, 500);
}

function apiPlayCompleteHandler(){
	addMessage("play complete");
};

//########################################//
/* Setup buy button */
//########################################//
function setupBuyButton(){
	if(location.href.indexOf("webdesign-flash.ro") == -1) return;
	FWDBuyButton.setPrototype();
	buyButton = new FWDBuyButton("graphics/buy.png","graphics/hello.png", 70,70,30,60);
	buyButton.setX(0);
	body_el.appendChild(buyButton.screen);
	self.positionBuyButton();
}

function positionBuyButton(){
	if(buyButton){		
		self.buyButton.setY(27)
	}
	
	if(windowW < 980){
		self.buyButton.setY(310)
	}
}

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
	fullscreenButton = new FWDPageSimpleButton("go fullscreen", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	fullscreenButton.getStyle().marginRight = "14px";
	fullscreenButton.getStyle().marginTop = "6px";
	fullscreenButton.addListener(FWDPageSimpleButton.CLICK, fullscreenClickHandler);
	
	FWDPageSimpleButton.setPrototype();
	setPosterButton = new FWDPageSimpleButton("set poster src", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	setPosterButton.getStyle().marginRight = "14px";
	setPosterButton.getStyle().marginTop = "6px";
	setPosterButton.addListener(FWDPageSimpleButton.CLICK, setPosterClickHandler);
	
	FWDPageSimpleButton.setPrototype();
	setYoutubeButton = new FWDPageSimpleButton("set youtube src", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	setYoutubeButton.getStyle().marginRight = "14px";
	setYoutubeButton.getStyle().marginTop = "6px";
	setYoutubeButton.addListener(FWDPageSimpleButton.CLICK, setYoutubeClickHandler);
	
	FWDPageSimpleButton.setPrototype();
	mp4Button = new FWDPageSimpleButton("set mp4 source", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	mp4Button.getStyle().marginRight = "14px";
	mp4Button.getStyle().marginTop = "6px";
	mp4Button.addListener(FWDPageSimpleButton.CLICK, setMp4ClickHandler);
	
	FWDPageSimpleButton.setPrototype();
	mp4Button = new FWDPageSimpleButton("set mp4 source", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
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
	apiButtonsHolder_el.appendChild(fullscreenButton.screen);
	apiButtonsHolder_el.appendChild(setPosterButton.screen);
	apiButtonsHolder_el.appendChild(setYoutubeButton.screen);
	apiButtonsHolder_el.appendChild(mp4Button.screen);
	apiButtonsHolder_el.appendChild(getCurrentTimeButton.screen);
	apiButtonsHolder_el.appendChild(getTotalTimeButton.screen);
};

function playClickHandler(){
	playerAPI.play();
}

function pauseClickHandler(){
	playerAPI.pause();
}

function stopClickHandler(){
	playerAPI.stop();
}

function scrubbClickHandler(){
	playerAPI.scrub(.5);
}

function volumeClickHandler(){
	playerAPI.setVolume(.5);
}

function fullscreenClickHandler(){
	playerAPI.goFullScreen();
}

function setPosterClickHandler(){
	playerAPI.setPosterSource("content/posters/youtube-poster.jpg, content/posters/youtube-poster-mobile.jpg");
}

function setVimeoClickHandler(){
	playerAPI.setVideoSource("https://vimeo.com/channels/staffpicks/148662087");
}

function setYoutubeClickHandler(){
	playerAPI.setVideoSource("https://www.youtube.com/watch?v=-1KMSzY6tQc");
}

function setMp4ClickHandler(){
	playerAPI.setVideoSource("content/videos/desktop.mp4, content/videos/mobile.mp4");
}

function getCurrentTimeClickHandler(){
	addMessage("current time: " +  "<font color='#0099FF'>"+  playerAPI.getCurrentTime() + "</font>");
}

function getTotalTimeClickHandler(){
	addMessage("total time: " +  "<font color='#0099FF'>" + playerAPI.getTotalTime() + "</font>");
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
	windowW = menuHolder_el.offsetWidth;
	pageMenu_do.positionAndResize(windowW);
	positionLogoImage();
	positionTextAndSeparators();
	positionBuyButton();
}

function positionTextAndSeparators(){
	var whatIsMainTextWidth = Math.min(mainWidth - 20, windowW - 16);
	var whatIsMainTextX = parseInt((windowW - whatIsMainTextWidth)/2);
	var separatorX = parseInt((windowW - separatorWidth)/2);
	var colWidth = parseInt((Math.min(mainWidth, windowW) - 40)/2);
	var colHolderWidth = parseInt((Math.min(mainWidth, windowW) - 20));
	var firstExampleX = Math.max(0, parseInt((windowW - firstExample_el.offsetWidth)/2 - 7));
	var secondExampleX = Math.max(0, parseInt((windowW - secondExample_el.offsetWidth)/2 - 7));
	var thirdExampleX = Math.max(0, parseInt((windowW - thirdExample_el.offsetWidth)/2 - 7));
	
	whatIsMainText_el.style.left = whatIsMainTextX  + "px";
	whatIsMainText_el.style.width = (whatIsMainTextWidth )  + "px";
	
	firstExample_el.style.left = firstExampleX + "px";
	secondExample_el.style.left = secondExampleX  + "px";
	thirdExample_el.style.left =  thirdExampleX  + "px";
	
	mainFeatureTableHolder_el.style.width = colHolderWidth + "px";
	apiMainText_el.style.left = whatIsMainTextX  + "px";
	apiMainText_el.style.width = whatIsMainTextWidth + "px";
	specialNotes_el.style.left = whatIsMainTextX + "px";
	specialNotes_el.style.width = whatIsMainTextWidth + "px";
	
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
		if(windowW > 650){
			apiSeconsVideoHolder_el.style.width = secondVideoHolederWidth + "px";
			apiSeconsVideoHolder_el.style.cssFloat = "left";
			apiLogger_el.style.cssFloat = "right";
			apiLogger_el.style.width = "306px";		
			apiLogger_el.style.marginTop = "0px";
			apiLogger_el.style.marginBottom = "7px";
			apiButtonsHolder_el.style.cssFloat = "right";
			apiButtonsHolder_el.style.width = "306px";
			apiButtonsHolder_el.style.marginTop = "0px";
			if(window.playerAPI && !prevent){
				apiLogger_el.style.height = parseInt(playerAPI.stageHeight - 146) + "px";
			};
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
	
	for(var i=0; i<td_els.length; i++){
		if(windowW < 500){
			td_els[i].style.display = "block";
			if(i == 1){
				td_els[i].style.width = "0%";
			}else{
				td_els[i].style.width = "100%";
			}
			td_els[i].style.display = "block";
		}else{
			if(i == 0){
				td_els[i].style.width = "47%";
				td_els[i].style.display = "table-cell";
			}else if(i == 1){
				td_els[i].style.width = "6%";
				td_els[i].style.display = "table-cell";
			}else{
				td_els[i].style.width = "47%";
				td_els[i].style.display = "table-cell";
			}
		}
	}
}

//###################################//
/* Setup player 2. */
//###################################//
function setupVideoPlayer2(){
	new FWDEVPlayer({		
		//main settings
		useYoutube:"yes",
		useVimeo:"no",
		instanceName:"player2",
		parentId:"myDiv2",
		mainFolderPath:"content",
		skinPath:"modern_skin_dark",
		displayType:"responsive",
		autoScale:"yes",
		facebookAppId:"213684265480896",
		startAtVideoSource:2,
		videoSource:[
			{source:"https://www.youtube.com/watch?v=-1KMSzY6tQc"}
		],
		posterPath:"content/posters/youtube-poster.jpg",
		rightClickContextMenu:"default",
		addKeyboardSupport:"yes",
		autoPlay:"no",
		loop:"no",
		maxWidth:980,
		maxHeight:553,
		volume:.8,
		backgroundColor:"#000000",
		posterBackgroundColor:"#0099FF",
		//logo settings
		showLogo:"yes",
		hideLogoWithController:"yes",
		logoPosition:"topRight",logoLink:"http://www.webdesign-flash.ro",
		logoMargins:5,
		//controller settings
		showControllerWhenVideoIsStopped:"no",
		showVolumeScrubber:"yes",
		showVolumeButton:"yes",
		showTime:"yes",
		showYoutubeQualityButton:"yes",
		showFacebookButton:"yes",
		showEmbedButton:"yes",
		showFullScreenButton:"yes",
		repeatBackground:"yes",
		controllerHeight:43,
		controllerHideDelay:3,
		startSpaceBetweenButtons:8,
		spaceBetweenButtons:12,
		mainScrubberOffestTop:15,
		scrubbersOffsetWidth:4,
		timeOffsetLeftWidth:1,
		timeOffsetRightWidth:-2,
		volumeScrubberWidth:90,
		volumeScrubberOffsetRightWidth:2,
		timeColor:"#888888",
		youtubeQualityButtonNormalColor:"#888888",
		youtubeQualityButtonSelectedColor:"#FFFFFF",
		//playback rate / speed
		showPlaybackRateButton:"yes",
		defaultPlaybackRate:"1", //0.25, 0.5, 1, 1.25, 1.5, 2
		//embed window
		embedWindowCloseButtonMargins:7,
		borderColor:"#333333",
		mainLabelsColor:"#FFFFFF",
		secondaryLabelsColor:"#a1a1a1",
		shareAndEmbedTextColor:"#5a5a5a",
		inputBackgroundColor:"#000000",
		inputColor:"#FFFFFF",
		//popup commercial ads
		showPopupAdsCloseButton:"yes",
		popupCommercialAdsSource:[
			{imagePath:"content/images/img.jpg", timeStart:"00:00:01", timeEnd:"00:00:28", link:"http://www.webdesign-flash.ro", target:"_blank"},
			{imagePath:"content/images/img2.jpg", timeStart:"00:00:31", timeEnd:"00:00:52", link:"http://www.webdesign-flash.ro", target:"_blank"}
		],
		//annotations
		annotiationsListId:"",
		showAnnotationsPositionTool:"no",
		//subtitle
		subtitlePath:"",
		showSubtitleByDefault:"yes",
		// context menu
		showContextmenu:'yes',
		showScriptDeveloper:"no",
		contextMenuBackgroundColor:"#1f1f1f",
		contextMenuBorderColor:"#1f1f1f",
		contextMenuSpacerColor:"#333",
		contextMenuItemNormalColor:"#6a6a6a",
		contextMenuItemSelectedColor:"#FFFFFF",
		contextMenuItemDisabledColor:"#333"
	});
}

//###################################//
/* Setup player 3. */
//###################################//
function setupVideoPlayer3(){
	new FWDEVPlayer({		
		//main settings
		useYoutube:"no",
		useVimeo:"yes",
		instanceName:"player3",
		parentId:"myDiv3",
		mainFolderPath:"content",
		skinPath:"modern_skin_dark",
		displayType:"responsive",
		autoScale:"yes",
		facebookAppId:"213684265480896",
		videoSource:[
			{source:"https://vimeo.com/channels/top/22439234"}
		],
		posterPath:"content/posters/vimeo-poster.jpg, content/posters/vimeo-poster-mobile.jpg",
		rightClickContextMenu:"default",
		addKeyboardSupport:"yes",
		autoPlay:"no",
		loop:"no",
		maxWidth:980,
		maxHeight:553,
		volume:.8,
		backgroundColor:"#000000",
		posterBackgroundColor:"#0099FF",
		//logo settings
		showLogo:"yes",
		hideLogoWithController:"yes",
		logoPosition:"topRight",logoLink:"http://www.webdesign-flash.ro",
		logoMargins:5,
		//controller settings
		showControllerWhenVideoIsStopped:"no",
		showVolumeScrubber:"yes",
		showVolumeButton:"yes",
		showTime:"yes",
		showYoutubeQualityButton:"yes",
		showFacebookButton:"yes",
		showEmbedButton:"yes",
		showFullScreenButton:"yes",
		repeatBackground:"yes",
		controllerHeight:43,
		controllerHideDelay:3,
		startSpaceBetweenButtons:8,
		spaceBetweenButtons:12,
		mainScrubberOffestTop:15,
		scrubbersOffsetWidth:4,
		timeOffsetLeftWidth:1,
		timeOffsetRightWidth:-2,
		volumeScrubberWidth:90,
		volumeScrubberOffsetRightWidth:2,
		timeColor:"#888888",
		youtubeQualityButtonNormalColor:"#888888",
		youtubeQualityButtonSelectedColor:"#FFFFFF",
		//embed window
		embedWindowCloseButtonMargins:7,
		borderColor:"#333333",
		mainLabelsColor:"#FFFFFF",
		secondaryLabelsColor:"#a1a1a1",
		shareAndEmbedTextColor:"#5a5a5a",
		inputBackgroundColor:"#000000",
		inputColor:"#FFFFFF",
		// context menu
		showContextmenu:'yes',
		showScriptDeveloper:"no",
		contextMenuBackgroundColor:"#1f1f1f",
		contextMenuBorderColor:"#1f1f1f",
		contextMenuSpacerColor:"#333",
		contextMenuItemNormalColor:"#6a6a6a",
		contextMenuItemSelectedColor:"#FFFFFF",
		contextMenuItemDisabledColor:"#333"
	});
}

//###################################//
/* Setup API player. */
//###################################//
function setupAPIPlayer(){
	new FWDEVPlayer({		
		//main settings
		useYoutube:"no",
		useVimeo:"yes",
		instanceName:"playerAPI",
		parentId:"myDivAPI",
		mainFolderPath:"content",
		skinPath:"modern_skin_dark",
		displayType:"responsive", 
		autoScale:"yes",
		facebookAppId:"213684265480896",
		videoSource:[
			{source:"content/videos/fwd-1080p.mp4", label:"hd1080"}
		],
		posterPath:"content/posters/mp4-poster.jpg, content/posters/mp4-poster-mobile.jpg",
		rightClickContextMenu:"default",
		addKeyboardSupport:"yes",
		autoPlay:"no",
		loop:"no",
		maxWidth:800,
		maxHeight:500,
		volume:.8,
		backgroundColor:"#000000",
		posterBackgroundColor:"#0099FF",
		//logo settings
		showLogo:"yes",
		hideLogoWithController:"yes",
		logoPosition:"topRight",
		logoLink:"http://www.webdesign-flash.ro",
		logoMargins:5,
		//controller settings
		showControllerWhenVideoIsStopped:"yes",
		showVolumeScrubber:"yes",
		showVolumeButton:"yes",
		showTime:"yes",
		showYoutubeQualityButton:"yes",
		showFacebookButton:"yes",
		showEmbedButton:"yes",
		showFullScreenButton:"yes",
		repeatBackground:"yes",
		controllerHeight:43,
		controllerHideDelay:3,
		startSpaceBetweenButtons:8,
		spaceBetweenButtons:12,
		mainScrubberOffestTop:15,
		scrubbersOffsetWidth:4,
		timeOffsetLeftWidth:1,
		timeOffsetRightWidth:-2,
		volumeScrubberWidth:90,
		volumeScrubberOffsetRightWidth:2,
		timeColor:"#888888",
		youtubeQualityButtonNormalColor:"#888888",
		youtubeQualityButtonSelectedColor:"#FFFFFF",
		//embed window
		embedWindowCloseButtonMargins:7,
		borderColor:"#333333",
		mainLabelsColor:"#FFFFFF",
		secondaryLabelsColor:"#a1a1a1",
		shareAndEmbedTextColor:"#5a5a5a",
		inputBackgroundColor:"#000000",
		inputColor:"#FFFFFF",
		// context menu
		showContextmenu:'yes',
		showScriptDeveloper:"no",
		contextMenuBackgroundColor:"#1f1f1f",
		contextMenuBorderColor:"#1f1f1f",
		contextMenuSpacerColor:"#333",
		contextMenuItemNormalColor:"#6a6a6a",
		contextMenuItemSelectedColor:"#FFFFFF",
		contextMenuItemDisabledColor:"#333"
	});
}

//######################################//
/* Setup lightbox */
//######################################//
function setupLightboxPlayer(){
	new FWDEVPlayer({		
		//main settings
		instanceName:"playerLightbox",
		parentId:"myDiv",
		mainFolderPath:"content",
		initializeOnlyWhenVisible:"no",
		skinPath:"minimal_skin_dark",
		displayType:"lightbox",
		fillEntireVideoScreen:"no",
		showDefaultControllerForVimeo:"no",
		autoScale:"yes",
		openDownloadLinkOnMobile:"no",
		useHEXColorsForSkin:"no",
		normalHEXButtonsColor:"#FF0000",
		selectedHEXButtonsColor:"#FFFFFF",
		privateVideoPassword:"428c841430ea18a70f7b06525d4b748a",
		startAtTime:"",
		stopAtTime:"",
		startAtVideoSource:2,
		videoSource:[
			{source:"content/videos/fwd-480p.mp4", label:"small version"},
			{source:"content/videos/fwd-720p.mp4", label:"hd720"},
			{source:"content/videos/fwd-1080p.mp4", label:"hd1080"}
		],
		posterPath:"content/posters/mp4-poster.jpg, content/posters/mp4-poster-mobile.jpg",
		showErrorInfo:"yes",
		fillEntireScreenWithPoster:"yes",
		rightClickContextMenu:"developer",
		disableDoubleClickFullscreen:"no",
		addKeyboardSupport:"yes",
		useChromeless:"no",
		showPreloader:"yes",
		preloaderColors:["#999999", "#FFFFFF"],
		autoPlay:"no",
		loop:"no",
		scrubAtTimeAtFirstPlay:"00:00:00",
		maxWidth:980,
		maxHeight:552,
		volume:.8,
		greenScreenTolerance:200,
		backgroundColor:"#000000",
		posterBackgroundColor:"#0099FF",
		//lightbox settings
		lightBoxBackgroundOpacity:.6,
		lightBoxBackgroundColor:"#000000",
		//logo settings
		showLogo:"yes",
		hideLogoWithController:"yes",
		logoPosition:"topRight",
		logoLink:"http://www.webdesign-flash.ro",
		logoMargins:5,
		//controller settings
		showController:"yes",
		showControllerWhenVideoIsStopped:"yes",
		showVolumeScrubber:"yes",
		showVolumeButton:"yes",
		showTime:"yes",
		showQualityButton:"yes",
		showSubtitleButton:"yes",
		showShareButton:"yes",
		showDownloadButton:"yes",
		showFullScreenButton:"yes",
		repeatBackground:"yes",
		controllerHeight:41,
		controllerHideDelay:3,
		startSpaceBetweenButtons:7,
		spaceBetweenButtons:9,
		mainScrubberOffestTop:14,
		scrubbersOffsetWidth:4,
		timeOffsetLeftWidth:5,
		timeOffsetRightWidth:3,
		volumeScrubberWidth:80,
		volumeScrubberOffsetRightWidth:0,
		timeColor:"#777777",
		youtubeQualityButtonNormalColor:"#777777",
		youtubeQualityButtonSelectedColor:"#FFFFFF",
		//cuepoints
		executeCuepointsOnlyOnce:"no",
		cuepoints:[],
		//annotations
		annotiationsListId:"none",
		showAnnotationsPositionTool:"no",
		//subtitles
		showSubtitleButton:"yes",
		subtitlesOffLabel:"Subtitle off",
		startAtSubtitle:1,
		subtitlesSource:[
			{subtitlePath:"content/english_subtitle.txt", subtileLabel:"English"},
			{subtitlePath:"content/romanian_subtitle.txt", subtileLabel:"Romanian"},
			{subtitlePath:"content/spanish_subtitle.txt", subtileLabel:"Spanish"}
		],
		//audio visualizer
		audioVisualizerLinesColor:"#0099FF",
		audioVisualizerCircleColor:"#FFFFFF",
		//advertisement on pause window
		aopwTitle:"Advertisement",
		aopwSource:"",
		aopwWidth:400,
		aopwHeight:240,
		aopwBorderSize:6,
		aopwTitleColor:"#FFFFFF",
		//playback rate / speed
		showPlaybackRateButton:"yes",
		defaultPlaybackRate:"1", //0.25, 0.5, 1, 1.25, 1.5, 2
		//sticky display settings
		showOpener:"yes",
		showOpenerPlayPauseButton:"yes",
		verticalPosition:"bottom",
		horizontalPosition:"center",
		showPlayerByDefault:"yes",
		animatePlayer:"yes",
		openerAlignment:"right",
		mainBackgroundImagePath:"content/minimal_skin_dark/main-background.png",
		openerEqulizerOffsetTop:-1,
		openerEqulizerOffsetLeft:3,
		offsetX:0,
		offsetY:0,
		//embed window
		embedWindowCloseButtonMargins:0,
		borderColor:"#333333",
		mainLabelsColor:"#FFFFFF",
		secondaryLabelsColor:"#a1a1a1",
		shareAndEmbedTextColor:"#5a5a5a",
		inputBackgroundColor:"#000000",
		inputColor:"#FFFFFF",
		// context menu
		showContextmenu:'yes',
		showScriptDeveloper:"no",
		contextMenuBackgroundColor:"#1f1f1f",
		contextMenuBorderColor:"#1f1f1f",
		contextMenuSpacerColor:"#333",
		contextMenuItemNormalColor:"#6a6a6a",
		contextMenuItemSelectedColor:"#FFFFFF",
		contextMenuItemDisabledColor:"#333"
	});				
}

//#####################################//
/* open popup */
//#####################################//
function openPopup(page, width, height){
	var left = parseInt((screen.width - width)/2);
	var top =  parseInt((screen.height - height)/2);
	
	if(FWDEVPUtils.isMobile){
		self.popupWindow = window.open(page);
	}else{
		self.popupWindow = window.open(page,"",'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
	}
};