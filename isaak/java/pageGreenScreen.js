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
var productHolder3_el = null;
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
var fixedDiv_el;

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
var buyButton = null;

var prevent;

var resizeHandlerId_to;

function init(){
	try{
		if(window.top != window && window.location.search.indexOf("EVPInstanceName") == -1){
			top.location.href = 'index.html';	
		}
	}catch(e){}
	pageInit(4,0, "#1f1f1f", "graphics/menu-button-separator.jpg", "#7a7a7a","#0099ff", "#FFFFFF", "#0099ff");
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
	
	
	productHolder2_el = document.getElementById("myDiv2");
	fixedDiv_el = document.getElementById("fixedDiv");
	
	firstExample_el = document.getElementById("firstExample");
	secondExample_el = document.getElementById("secondExample");
	
	logoImage_img = document.getElementById("logoImage");
	apiMainText_el = document.getElementById("apiMainText");
	apiButtonsHolder_el = document.getElementById("apiButtonsHolder");
	apiLogger_el = document.getElementById("apiLogger");
	textApiLogger_el = document.getElementById("textApiLogger");
	apiMainVideoHolder_el  = document.getElementById("apiMainVideoHolder");
	apiSeconsVideoHolder_el = document.getElementById("apiSeconsVideoHolder");
	byFWD_img = document.getElementById("byFWD");
	

	productHolder2_el.style.margin = "auto";
	productHolder2_el.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
	
	fixedDiv_el.style.position = "fixed";
	fixedDiv_el.style.zIndex = 100;
	fixedDiv_el.style.width = "300px";
	fixedDiv_el.style.height = "300px";
	
	setupByFWD();
	setupMenu();
	
	setupVideoPlayer2();
	setupVideoFixed();
	setupBuyButton();
	regesterGreenScreenAPI();
	regesterGreen2ScreenAPI();
	regesterGreenFixedScreenAPI();
	setupLightboxPlayer();
	
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




var api2CheckerInterval;
function regesterGreenScreenAPI(){
	return
	clearInterval(api2CheckerInterval);
	if(!window.player2){
		api2CheckerInterval = setInterval(regesterGreenScreenAPI, 100);
	}else{
		window.player1.addListener(FWDEVPlayer.PLAY, normalPlayHandler);
		window.playerGreen1.addListener(FWDEVPlayer.PLAY, greenPlayHandler);
		window.playerGreen1.addListener(FWDEVPlayer.PLAY_COMPLETE, greenCompleteHandler);
		window.player1.addListener(FWDEVPlayer.SCRUB, greenScrubHandler);
		
		positionStuff();
	}
}

function normalPlayHandler(){
	playerGreen1.play();
	if(player2) player2.stop();
	if(playerFixed) playerFixed.stop();
};

function greenPlayHandler(){
	
	if(player2) player2.stop();
	if(playerFixed) playerFixed.stop();
};

function greenCompleteHandler(){
	
	if(player2) player2.stop();
	if(playerFixed) playerFixed.stop();
}

function normalPauseHandler(){
	playerGreen1.pause();
}

function greenPauseHandler(){
	player1.pause();
}

function greenScrubHandler(e){
	playerGreen1.scrub(e.percent);
}

var api3CheckerInterval;
function regesterGreen2ScreenAPI(){
	clearInterval(api3CheckerInterval);
	if(!window.player2){
		api3CheckerInterval = setInterval(regesterGreen2ScreenAPI, 100);
	}else{
		window.player2.addListener(FWDEVPlayer.PLAY, green2PlayHandler);
	}
}

function green2PlayHandler(){
	
	if(playerFixed) playerFixed.stop();
};

var api4CheckerInterval;
function regesterGreenFixedScreenAPI(){
	clearInterval(api4CheckerInterval);
	if(!window.playerFixed){
		api4CheckerInterval = setInterval(regesterGreenFixedScreenAPI, 100);
	}else{
		window.playerFixed.addListener(FWDEVPlayer.PLAY, playerFiexedPlayHandler);
	}
}

function playerFiexedPlayHandler(){
	
	if(player2) player2.stop();
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
/* Position stuff */
//#####################################//
function positionStuff(){
	windowW = menuHolder_el.offsetWidth;
	windowH =  FWDEVPUtils.getViewportSize().h;
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
	
	var secondExampleX = Math.max(0, parseInt((windowW - secondExample_el.offsetWidth)/2 - 7));
	
	whatIsMainText_el.style.left = whatIsMainTextX  + "px";
	whatIsMainText_el.style.width = (whatIsMainTextWidth )  + "px";
	
	
	secondExample_el.style.left = secondExampleX  + "px";
	
	mainFeatureTableHolder_el.style.width = colHolderWidth + "px";
	specialNotes_el.style.left = whatIsMainTextX + "px";
	specialNotes_el.style.width = whatIsMainTextWidth + "px";
	
	fixedDiv_el.style.left = (windowW - 300) + "px";
	fixedDiv_el.style.top = (windowH - 300) + "px";
	
	if(window["player1"]){
		if(windowW >= mainWidth){
			
			
	
			document.getElementById("myDivMainHolder2").style.marginTop = "-273px";
		}else{
			document.getElementById("myDivMainHolder2").style.marginTop = "0px";
		
		}
		
	}
	
	var secondVideoHolederWidth = whatIsMainTextWidth - 320;
	
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

function setupVideoGreenScreen1(){
	new FWDEVPlayer({		
		//main settings
		useYoutube:"no",
		useVimeo:"no",
		instanceName:"playerGreen1",
		parentId:"myDiv11",
		mainFolderPath:"content",
		skinPath:"minimal_skin_dark",
		displayType:"responsive",
		autoScale:"yes",
		fillEntireVideoScreen:"no",
		useHEXColorsForSkin:"no",
		normalHEXButtonsColor:"#FF0000",
		selectedHEXButtonsColor:"#FFFFFF",
		startAtVideoSource:2,
		videoSource:[
			{source:"content/videos/dragon1.mp4", label:"", videoType:"greenScreenVideo"}
		],
		posterPath:"content/posters/dragon-poster.png",
		rightClickContextMenu:"default",
		useChromeless:"no",
		addKeyboardSupport:"yes",
		disableDoubleClickFullscreen:"yes",
		autoPlay:"no",
		loop:"no",
		maxWidth:486,
		maxHeight:273,
		volume:0,
		greenScreenTolerance:200,
		backgroundColor:"rgba(0, 0, 0, 0.1)",
		posterBackgroundColor:"transparent",
		//logo settings
		showLogo:"no",
		hideLogoWithController:"yes",
		logoPosition:"topRight",
		logoLink:"http://www.webdesign-flash.ro",
		logoPath:"",
		logoMargins:5,
		//controller settings
		showController:"no",
		showControllerWhenVideoIsStopped:"yes",
		showVolumeScrubber:"yes",
		showVolumeButton:"yes",
		showTime:"yes",
		showQualityButton:"no",
		showShareButton:"no",
		showEmbedButton:"no",
		showDownloadButton:"no",
		showFullScreenButton:"no",
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
		timeColor:"#888888",
		youtubeQualityButtonNormalColor:"#888888",
		youtubeQualityButtonSelectedColor:"#FFFFFF",
		//playback rate / speed
		showPlaybackRateButton:"no",
		defaultPlaybackRate:"1", //0.25, 0.5, 1, 1.25, 1.5, 2
		//embed window
		embedWindowCloseButtonMargins:0,
		borderColor:"#333333",
		mainLabelsColor:"#FFFFFF",
		secondaryLabelsColor:"#a1a1a1",
		shareAndEmbedTextColor:"#5a5a5a",
		inputBackgroundColor:"#000000",
		inputColor:"#FFFFFF",
		//subtitles
		showSubtitleButton:"no",
		subtitlesOffLabel:"Subtitle off",
		startAtSubtitle:1,
		subtitlesSource:[],
		//annotations
		annotiationsListId:"none",
		showAnnotationsPositionTool:"no",
		//ads
		openNewPageAtTheEndOfTheAds:"no",
		adsSource:[],
		adsButtonsPosition:"right",
		skipToVideoText:"You can skip to video in: ",
		skipToVideoButtonText:"Skip Ad",
		timeToHoldAds:4,
		adsTextNormalColor:"#999999",
		adsTextSelectedColor:"#FFFFFF",
		adsBorderNormalColor:"#666666",
		adsBorderSelectedColor:"#FFFFFF",
		// context menu
		showContextmenu:'no',
		showScriptDeveloper:"no",
		contextMenuBackgroundColor:"#1f1f1f",
		contextMenuBorderColor:"#1f1f1f",
		contextMenuSpacerColor:"#333",
		contextMenuItemNormalColor:"#888888",
		contextMenuItemSelectedColor:"#FFFFFF",
		contextMenuItemDisabledColor:"#444"
	});
}

//###################################//
/* Setup player 2. */
//###################################//
function setupVideoPlayer2(){
	new FWDEVPlayer({		
		//main settings
		useYoutube:"no",
		useVimeo:"no",
		instanceName:"player2",
		parentId:"myDiv2",
		mainFolderPath:"content",
		skinPath:"minimal_skin_dark",
		displayType:"responsive",
		autoScale:"yes",
		facebookAppId:"213684265486896",
		videoSource:[
			{source:"content/videos/dragon.mp4", label:"", videoType:"greenScreenVideo"}
		],
		posterPath:"content/posters/dragon-poster.png",
		rightClickContextMenu:"default",
		addKeyboardSupport:"yes",
		disableDoubleClickFullscreen:"yes",
		autoPlay:"no",
		loop:"no",
		scrubAtTimeAtFirstPlay:"00:00:00",
		maxWidth:980,
		maxHeight:552,
		volume:.8,
		greenScreenTolerance:200,
		backgroundColor:"rgba(0, 0, 0, 0.1)",
		posterBackgroundColor:"transparent",
		//logo settings
		showLogo:"no",
		hideLogoWithController:"yes",
		logoPosition:"topRight",
		logoLink:"http://www.webdesign-flash.ro",
		logoMargins:5,
		//controller settings
		showControllerWhenVideoIsStopped:"no",
		showVolumeScrubber:"yes",
		showVolumeButton:"yes",
		showTime:"yes",
		showYoutubeQualityButton:"no",
		showShareButton:"no",
		showEmbedButton:"no",
		showFullScreenButton:"no",
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
		timeColor:"#888888",
		youtubeQualityButtonNormalColor:"#888888",
		youtubeQualityButtonSelectedColor:"#FFFFFF",
		//playback rate / speed
		showPlaybackRateButton:"no",
		defaultPlaybackRate:"1", //0.25, 0.5, 1, 1.25, 1.5, 2
		//embed window
		embedWindowCloseButtonMargins:0,
		borderColor:"#333333",
		mainLabelsColor:"#FFFFFF",
		secondaryLabelsColor:"#a1a1a1",
		shareAndEmbedTextColor:"#5a5a5a",
		inputBackgroundColor:"#000000",
		inputColor:"#FFFFFF",
		//annotations
		annotiationsListId:"",
		showAnnotationsPositionTool:"no",
		//popup commercial ads
		showPopupAdsCloseButton:"yes",
		popupCommercialAdsSource:[],
		//subtitle
		subtitlePath:"",
		showSubtitleByDefault:"yes",
		// context menu
		showContextmenu:'no',
		showScriptDeveloper:"no",
		contextMenuBackgroundColor:"#1f1f1f",
		contextMenuBorderColor:"#1f1f1f",
		contextMenuSpacerColor:"#333",
		contextMenuItemNormalColor:"#888888",
		contextMenuItemSelectedColor:"#FFFFFF",
		contextMenuItemDisabledColor:"#444"
	});
}

function setupVideoFixed(){
	new FWDEVPlayer({		
		//main settings
		useYoutube:"yes",
		useVimeo:"no",
		instanceName:"playerFixed",
		parentId:"fixedDiv",
		mainFolderPath:"content",
		skinPath:"minimal_skin_dark",
		displayType:"responsive",
		autoScale:"yes",
		fillEntireVideoScreen:"no",
		useHEXColorsForSkin:"no",
		normalHEXButtonsColor:"#FF0000",
		selectedHEXButtonsColor:"#FFFFFF",
		startAtVideoSource:2,
		videoSource:[
			{source:"content/videos/zombie.mp4", label:"", videoType:"greenScreenVideo"}
		],
		posterPath:"content/posters/poster-zombie.png",
		rightClickContextMenu:"default",
		useChromeless:"no",
		addKeyboardSupport:"yes",
		disableDoubleClickFullscreen:"yes",
		showPreloader:"no",
		autoPlay:"no",
		loop:"no",
		maxWidth:300,
		maxHeight:300,
		volume:.8,
		greenScreenTolerance:200,
		backgroundColor:"transparent",
		posterBackgroundColor:"transparent",
		//logo settings
		showLogo:"no",
		hideLogoWithController:"yes",
		logoPosition:"topRight",
		logoLink:"http://www.webdesign-flash.ro",
		logoPath:"",
		logoMargins:5,
		//controller settings
		showController:"no",
		showControllerWhenVideoIsStopped:"yes",
		showVolumeScrubber:"yes",
		showVolumeButton:"yes",
		showTime:"yes",
		showQualityButton:"no",
		showShareButton:"no",
		showEmbedButton:"no",
		showDownloadButton:"no",
		showFullScreenButton:"no",
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
		timeColor:"#888888",
		youtubeQualityButtonNormalColor:"#888888",
		youtubeQualityButtonSelectedColor:"#FFFFFF",
		//playback rate / speed
		showPlaybackRateButton:"no",
		defaultPlaybackRate:"1", //0.25, 0.5, 1, 1.25, 1.5, 2
		//embed window
		embedWindowCloseButtonMargins:0,
		borderColor:"#333333",
		mainLabelsColor:"#FFFFFF",
		secondaryLabelsColor:"#a1a1a1",
		shareAndEmbedTextColor:"#5a5a5a",
		inputBackgroundColor:"#000000",
		inputColor:"#FFFFFF",
		//subtitles
		showSubtitleButton:"no",
		subtitlesOffLabel:"Subtitle off",
		startAtSubtitle:1,
		subtitlesSource:[],
		//annotations
		annotiationsListId:"none",
		showAnnotationsPositionTool:"no",
		//ads
		openNewPageAtTheEndOfTheAds:"no",
		adsSource:[],
		adsButtonsPosition:"right",
		skipToVideoText:"You can skip to video in: ",
		skipToVideoButtonText:"Skip Ad",
		timeToHoldAds:4,
		adsTextNormalColor:"#999999",
		adsTextSelectedColor:"#FFFFFF",
		adsBorderNormalColor:"#666666",
		adsBorderSelectedColor:"#FFFFFF",
		// context menu
		showContextmenu:'no',
		showScriptDeveloper:"no",
		contextMenuBackgroundColor:"#1f1f1f",
		contextMenuBorderColor:"#1f1f1f",
		contextMenuSpacerColor:"#333",
		contextMenuItemNormalColor:"#888888",
		contextMenuItemSelectedColor:"#FFFFFF",
		contextMenuItemDisabledColor:"#444"
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
		contextMenuItemNormalColor:"#888888",
		contextMenuItemSelectedColor:"#FFFFFF",
		contextMenuItemDisabledColor:"#444"
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