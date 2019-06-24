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
var col1_el = null;
var col2_el = null;
var byFWD_img = null;
var specialNotes_el = null;
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
var colors1_el;

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
	pageInit(4,1, "#1f1f1f", "graphics/menu-button-separator.jpg", "#7a7a7a","#0099ff", "#FFFFFF", "#0099ff");
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
	colors1_el = document.getElementById("colors1");
	colors2_el = document.getElementById("colors2");
	
	myDivAPI_el = document.getElementById("myDivAPI");
	firstExample_el = document.getElementById("firstExample");
	secondExample_el = document.getElementById("secondExample");
	thirdExample_el = document.getElementById("thirdExample");
	logoImage_img = document.getElementById("logoImage");
	apiMainText_el = document.getElementById("apiMainText");
	apiButtonsHolder_el = document.getElementById("apiButtonsHolder");
	apiLogger_el = document.getElementById("apiLogger");
	textApiLogger_el = document.getElementById("textApiLogger");
	byFWD_img = document.getElementById("byFWD");
	
	productHolder_el.style.margin = "auto";
	productHolder2_el.style.margin = "auto";
	
	setupByFWD();
	setupMenu();
	setupVideoPlayer();
	setupVideoPlayer2();
	setupColor1Boxes();
	setupColor2Boxes();
	setupBuyButton();
	
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


//########################################//
/* Setup buy button */
//########################################//
function setupBuyButton(){
	//if(location.href.indexOf("webdesign-flash.ro") == -1) return;
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
	vimeoYoutubeButton = new FWDPageSimpleButton("set vimeo src", "#FFFFFF", "#000000",  "#000000", "#FFFFFF");
	vimeoYoutubeButton.getStyle().marginRight = "14px";
	vimeoYoutubeButton.getStyle().marginTop = "6px";
	vimeoYoutubeButton.addListener(FWDPageSimpleButton.CLICK, setVimeoClickHandler);
	
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
	apiButtonsHolder_el.appendChild(vimeoYoutubeButton.screen);
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
	playerAPI.setVideoSource("-1KMSzY6tQc");
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
/* Setup colors boxes */
//#####################################//
var colors_ar = ["#a4c400", "#60a917","#008a00","#00cb96","#00aba9","#1ba1e2","#1ba1e2","#6a00ff","#aa00ff","#f472d0","#a20025","#d80073","#a20025","#e51400","#e97770","#fa6800","#f0a30a","#f0a30a","#e3c800","#825a2c","#647687","#76608a","#87794e","#cccccc"];
var colors1Buttons_ar = [];
var colors2Buttons_ar = [];
var totalButtonsColors = colors_ar.length;
var btnWidth = 27;
var btnHeight = 30;
var curZIndex = 1;

function setupColor1Boxes(){
	var btn;
	
	for(var i=0; i<totalButtonsColors; i++){
		btn = new FWDEVPDisplayObject("div", "relative");
		colors1Buttons_ar.push(btn);
		btn.setButtonMode(true);
		btn.setWidth(btnWidth);
		btn.screen.setAttribute("id", "dark_" + i);
		btn.setHeight(btnHeight);
		btn.getStyle().marginLeft = "2px";
		if(i == 0) btn.getStyle().marginLeft = "5px";
		btn.getStyle().marginBottom = "5px";
		btn.getStyle().float = "left";
		btn.setBkColor(colors_ar[i]);
		colors1_el.appendChild(btn.screen);
		
		if(FWDEVPUtils.isMobile){
			if(btn.hasPointerEvent_bl){
				btn.screen.addEventListener("pointerup", btn1onMouseUp);
				btn.screen.addEventListener("pointerover", btn1onMouseOver);
				btn.screen.addEventListener("pointerout", btn1onMouseOut);
			}else{
				btn.screen.addEventListener("touchend", btn1onMouseUp);
			}
		}else if(btn.screen.addEventListener){	
			console.log
			btn.screen.addEventListener("mouseover", btn1onMouseOver);
			btn.screen.addEventListener("mouseout", btn1onMouseOut);
			btn.screen.addEventListener("mouseup", btn1onMouseUp);
		}else if(btn.screen.attachEvent){
			btn.screen.attachEvent("onmouseover", btn1onMouseOver);
			btn.screen.attachEvent("onmouseout", btn1onMouseOut);
			btn.screen.attachEvent("onmouseup", btn1onMouseUp);
		}
	}
}

function reduceButtons1Opacity(target){
	for(var i=0; i<totalButtonsColors; i++){
		FWDAnimation.killTweensOf(colors1Buttons_ar[i].screen);
		if(target == colors1Buttons_ar[i].screen){
			FWDAnimation.to(colors1Buttons_ar[i].screen, .5, {css:{opacity:1, scale:1.2}, ease:Expo.easeOut});	
		}else{
			FWDAnimation.to(colors1Buttons_ar[i].screen, .5, {css:{opacity:1, scale:.6}, ease:Expo.easeOut});	
		}
		
	}	
}

function resetButtons1Opacity(target){
	for(var i=0; i<totalButtonsColors; i++){
		FWDAnimation.to(colors1Buttons_ar[i].screen, .5, {css:{opacity:1, scale:1}, ease:Expo.easeOut, delay:.5});	
	}	
}

function btn1onMouseOver(e){
	curZIndex ++;
	e.target.style.zIndex = curZIndex;
	reduceButtons1Opacity(e.target);
};
	
function btn1onMouseOut(e){
	resetButtons1Opacity();	
};

function btn1onMouseUp(e){
	var id = String(e.target.getAttribute("id")).replace(/\D/g, '');
	player1.updateHEXColors(colors_ar[id], "#FFFFFF");
};

function setupColor2Boxes(){
	var btn;
	
	for(var i=0; i<totalButtonsColors; i++){
		btn = new FWDEVPDisplayObject("div", "relative");
		colors2Buttons_ar.push(btn);
		btn.setButtonMode(true);
		btn.setWidth(btnWidth);
		btn.screen.setAttribute("id", "white_" + i);
		btn.setHeight(btnHeight);
		btn.getStyle().marginLeft = "2px";
		if(i == 0) btn.getStyle().marginLeft = "5px";
		btn.getStyle().marginBottom = "5px";
		btn.getStyle().float = "left";
		btn.setBkColor(colors_ar[i]);
		colors2_el.appendChild(btn.screen);
		
		if(FWDEVPUtils.isMobile){
			if(btn.hasPointerEvent_bl){
				btn.screen.addEventListener("pointerup", btn2onMouseUp);
				btn.screen.addEventListener("pointerover", btn2onMouseOver);
				btn.screen.addEventListener("pointerout", btn2onMouseOut);
			}else{
				btn.screen.addEventListener("touchend", btn2onMouseUp);
			}
		}else if(btn.screen.addEventListener){	
			btn.screen.addEventListener("mouseover", btn2onMouseOver);
			btn.screen.addEventListener("mouseout", btn2onMouseOut);
			btn.screen.addEventListener("mouseup", btn2onMouseUp);
		}else if(btn.screen.attachEvent){
			btn.screen.attachEvent("onmouseover", btn2onMouseOver);
			btn.screen.attachEvent("onmouseout", btn2onMouseOut);
			btn.screen.attachEvent("onmouseup", btn2onMouseUp);
		}
	}
}

function reduceButtons2Opacity(target){
	for(var i=0; i<totalButtonsColors; i++){
		FWDAnimation.killTweensOf(colors2Buttons_ar[i].screen);
		if(target == colors2Buttons_ar[i].screen){
			FWDAnimation.to(colors2Buttons_ar[i].screen, .5, {css:{opacity:1, scale:1.2}, ease:Expo.easeOut});	
		}else{
			FWDAnimation.to(colors2Buttons_ar[i].screen, .5, {css:{opacity:1, scale:.6}, ease:Expo.easeOut});	
		}
	}	
}

function resetButtons2Opacity(target){
	for(var i=0; i<totalButtonsColors; i++){
		FWDAnimation.to(colors2Buttons_ar[i].screen, .5, {css:{opacity:1, scale:1}, ease:Expo.easeOut, delay:.5});	
	}	
}

function btn2onMouseOver(e){
	curZIndex ++;
	e.target.style.zIndex = curZIndex;
	reduceButtons2Opacity(e.target);
};
	
function btn2onMouseOut(e){
	resetButtons2Opacity();	
};

function btn2onMouseUp(e){
	var id = String(e.target.getAttribute("id")).replace(/\D/g, '');
	player2.updateHEXColors(colors_ar[id], "#000000");
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
	
	whatIsMainText_el.style.left = whatIsMainTextX  + "px";
	whatIsMainText_el.style.width = (whatIsMainTextWidth )  + "px";
	
	firstExample_el.style.left = firstExampleX + "px";
	secondExample_el.style.left = secondExampleX  + "px";
	
	mainFeatureTableHolder_el.style.width = colHolderWidth + "px";
	specialNotes_el.style.left = whatIsMainTextX + "px";
	specialNotes_el.style.width = whatIsMainTextWidth + "px";
	
	var secondVideoHolederWidth = whatIsMainTextWidth - 320;
	colors1_el.style.width = Math.min(800, windowW)  + "px";
	colors2_el.style.width = Math.min(800, windowW)  + "px";
	
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
		skinPath:"hex_white",
		displayType:"responsive",
		autoScale:"yes",
		useHEXColorsForSkin:"yes",
		normalHEXButtonsColor:"#FF0000",
		selectedHEXButtonsColor:"#000000",
		startAtVideoSource:2,
		videoSource:[
			{source:"content/videos/fwd-480p.mp4", label:"small version"},
			{source:"content/videos/fwd-720p.mp4", label:"hd720"},
			{source:"content/videos/fwd-1080p.mp4", label:"hd1080"}
		],
		posterPath:"content/posters/mp4-poster.jpg, content/posters/mp4-poster-mobile.jpg",
		rightClickContextMenu:"default",
		useChromeless:"no",
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
		showController:"yes",
		showControllerWhenVideoIsStopped:"yes",
		showVolumeScrubber:"yes",
		showVolumeButton:"yes",
		showTime:"yes",
		showYoutubeQualityButton:"no",
		showShareButton:"yes",
		showEmbedButton:"yes",
		showFullScreenButton:"yes",
		repeatBackground:"yes",
		controllerHeight:41,
		controllerHideDelay:2,
		startSpaceBetweenButtons:7,
		spaceBetweenButtons:9,
		mainScrubberOffestTop:14,
		scrubbersOffsetWidth:4,
		timeOffsetLeftWidth:5,
		timeOffsetRightWidth:3,
		volumeScrubberWidth:80,
		volumeScrubberOffsetRightWidth:0,
		timeColor:"#FF0000",
		youtubeQualityButtonNormalColor:"#FF0000",
		youtubeQualityButtonSelectedColor:"#000000",
		//embed window
		embedWindowCloseButtonMargins:0,
		borderColor:"#CDCDCD",
		mainLabelsColor:"#000000",
		secondaryLabelsColor:"#444444",
		shareAndEmbedTextColor:"#777777",
		inputBackgroundColor:"#b2b2b2",
		inputColor:"#333333",
		//subtitle
		subtitlePath:"",
		showSubtitleByDefault:"yes",
		//ads
		openNewPageAtTheEndOfTheAds:"no",
		adsVideoSourcePath:"",
		adsButtonsPosition:"right",
		adsPageToOpenURL:"http://www.webdesign-flash.ro",
		adsPageToOpenTarget:"_blank",
		adsThumbnailPath:"content/posters/thumbnail.jpg",
		skipToVideoText:"You can skip to video in: ",
		skipToVideoButtonText:"Skip Ad",
		timeToHoldAds:4,
		adsTextNormalColor:"#888888",
		adsTextSelectedColor:"#000000",
		adsBorderNormalColor:"#AAAAAA",
		adsBorderSelectedColor:"#000000",
		// context menu
		showContextmenu:'no',
		showScriptDeveloper:"yes",
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