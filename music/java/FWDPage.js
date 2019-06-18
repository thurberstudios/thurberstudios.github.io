var pageMenu_do;
var grid_do;
var exampleGrid_do;
var thumb;

var body_el;
var buyButton;
var td_els;
var mainHeader_el = null;
var menuHolder_el = null;
var mainProductHolder_el = null;
var productHolder_el = null;
var productHolderBackground_el = null;
var whatIsMainText_el = null;
var logoImage_img = null;
var whyBuyImage_img = null;
var mainFeatureTableHolder_el = null;
var examplesMainText_el = null;
var col1_el = null;
var col2_el = null;
var byFWDRL_img = null;
var specialNotes_el = null;
var gridHolder_el = null;
var examplesGrid_el = null;
var apiLogger_el = null;
var apiButtonsHolder_el = null;
var textApiLogger_el = null;

var lightBoxViewer = null;
var openedWindow = null;

var separatorWidth = 980;
var mainWidth = 980;
var byFWDRLImageWidth = 65;
var html5ImageWidth = 95;
var logoImageWidth = 957;
var productHolderWidth = 940;
var productHolderHeight = 550;
var whatIsImageWidth = 415;
var whyBuyImageWidth = 940;
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
var apiPageThumbBkColor;
var isWhite_bl;

var resizeHandlerId_to;

function init(pId, secondId){
	if(window.top != window){
		top.location.href = 'index.html';	
	}else{
		mainInit(pId, secondId, "#dfdfdf", "graphics/menu-button-separator.jpg", "#000000","#0099ff", "#FFFFFF", "#0099ff", "#FFFFFF", false);
	}
}

function mainInit(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10){
	
	mainMenuId = p1;
	secondMenuId = p2;
	menuBackground = p3;
	menuSeparator = p4;
	button1NormalColor = p5;
	button1SelectedColor = p6;
	button2NormalColor = p7;
	button2SelectedColor = p8;
	apiPageThumbBkColor = p9;
	isWhite_bl = p10;
	
	if(secondMenuId == 10){
		setupGrid();
		return;
	}
	
	body_el = document.getElementsByTagName("body")[0];
	td_els = document.getElementsByTagName("td"); 
	specialNotes_el = document.getElementById("specialNotes");
	whatIsMainText_el = document.getElementById("whatIsMainText");
	apiMainText_el = document.getElementById("apiMainText");
	mainFeatureTableHolder_el  = document.getElementById("mainFeatureTableHolder");
	col1_el = document.getElementById("col1");
	col2_el = document.getElementById("col2");
	mainHeader_el = document.getElementById("mainHeader");
	menuHolder_el = document.getElementById("menuHolder");
	productHolder_el = document.getElementById("myDiv");
	logoImage_img = document.getElementById("logoImage");
	examplesMainText_el = document.getElementById("examplesMainText");
	whyBuyImage_img = document.getElementById("whyBuyImage");
	apiLogger_el = document.getElementById("apiLogger");
	apiButtonsHolder_el = document.getElementById("apiButtonsHolder");
	textApiLogger_el = document.getElementById("textApiLogger");
	productHolderBackground_el = document.getElementById("productHolderBackground");
	gridHolder_el = document.getElementById("grid");
	examplesGrid_el = document.getElementById("examplesGrid");
	
	if(secondMenuId == 11){
		apiButtonsHolder_el = document.getElementById("apiButtonsHolder");
		apiSecondHolder_el = document.getElementById("apiSecondHolder"); 
		apiLogger_el = document.getElementById("apiLoggerMainHolder");
		textApiLogger_el = document.getElementById("textApiLogger");
		apiMainHolder_el  = document.getElementById("apiMainHolder");
	}
	
	if(FWDRLUtils.isMobile ){
		//document.getElementById("apiWrapper").parentNode.removeChild(document.getElementById("apiWrapper"));
		//if(document.getElementById("examplesWrapper")) document.getElementById("examplesWrapper").parentNode.removeChild(document.getElementById("examplesWrapper"));
		if(document.getElementById("apiWrapper")) document.getElementById("apiWrapper").style.marginBottom = "5px";
	}	
	
	byFWDRL_img = document.getElementById("byFWD");
	byFWDRL_img.style.cursor = "pointer";
	byFWDRL_img.onclick = function(){
		window.location.href = "http://www.webdesign-flash.ro";
	};
	
	//if(!FWDRLUtils.isIE && !FWDRLUtils.isIE11){
		productHolder_el.style.margin = "auto";
	//}
	
	setupMenu();
	positionStuff();
	setTimeout( function(){
		positionStuff();
	}, 100);
	
	if(window.addEventListener){
		window.addEventListener("resize", onResizeHandler);
	}else if(window.attachEvent){
		window.attachEvent("onresize", onResizeHandler);
	}
	
	setupGrid();
	myIGP.addListener(FWDIGP.READY, readyHandler);
}

//#####################################//
/* Setup logger */
//#####################################//
function readyHandler(){
	setupExampleGrid();
	setupBuyButton();
	positionTextAndSeparators();
	setTimeout(positionTextAndSeparators, 100);
	
	if(secondMenuId ==  11) setupAPI();
}

//########################################//
/* Setup API */
//########################################//
function setupAPI(){
	setupAPIButtons();
	myIGP.addListener(FWDIGP.CATEGORY_UPDATE, categoryUpdateHandler);
	myIGP.addListener(FWDIGP.LIGHTBOX_SHOW_START, lightboxShowStartHandler);
	myIGP.addListener(FWDIGP.LIGHTBOX_HIDE_COMPLETE, lightboxHideCompleteHandler);
	addMessage("Event listeners console...");
	positionApiLoggerText(true);
};

function categoryUpdateHandler(){
	setTimeout(function(){
		addMessage("category update id: <font color='#0099FF'>" + myIGP.getCategoryId() + "</font>");
	}, 100);
};

function lightboxShowStartHandler(){
	addMessage("lightbox show start");
};

function lightboxHideCompleteHandler(){
	addMessage("lightbox hide complete");
};


//#####################################//
/* Setup API buttons */
//####################################//
function setupAPIButtons(){
	FWDPageSimpleButton.setPrototype();
	getCategoryNameButton = new FWDPageSimpleButton("get category name");
	getCategoryNameButton.getStyle().marginRight = "14px";
	if(FWDRLUtils.isMobile){
		getCategoryNameButton.getStyle().marginBottom = "10px";
	}else{
		getCategoryNameButton.getStyle().marginBottom = "5px";
	}
	getCategoryNameButton.addListener(FWDPageSimpleButton.CLICK, getCategoryNameHanlder);
	
	FWDPageSimpleButton.setPrototype();
	getCategoryId = new FWDPageSimpleButton("get category id");
	getCategoryId.getStyle().marginRight = "14px";
	if(FWDRLUtils.isMobile){
		getCategoryId.getStyle().marginBottom = "10px";
	}else{
		getCategoryId.getStyle().marginBottom = "5px";
	}
	getCategoryId.addListener(FWDPageSimpleButton.CLICK, getCategoryIdHandler);
	
	FWDPageSimpleButton.setPrototype();
	updateCategoryOneButton = new FWDPageSimpleButton("change to category one");
	updateCategoryOneButton.getStyle().marginRight = "14px";
	if(FWDRLUtils.isMobile){
		updateCategoryOneButton.getStyle().marginBottom = "10px";
	}else{
		updateCategoryOneButton.getStyle().marginBottom = "5px";
	}
	updateCategoryOneButton.addListener(FWDPageSimpleButton.CLICK, updateCategoryOneHandler);
	
	FWDPageSimpleButton.setPrototype();
	updateCategoryTowButton = new FWDPageSimpleButton("change to category two");
	updateCategoryTowButton.getStyle().marginRight = "14px";
	if(FWDRLUtils.isMobile){
		updateCategoryTowButton.getStyle().marginBottom = "10px";
	}else{
		updateCategoryTowButton.getStyle().marginBottom = "5px";
	}
	updateCategoryTowButton.addListener(FWDPageSimpleButton.CLICK, updateCategoryTwoHandler);
	
	FWDPageSimpleButton.setPrototype();
	updateCategoryThreeeButton = new FWDPageSimpleButton("change to category three");
	updateCategoryThreeeButton.getStyle().marginRight = "14px";
	if(FWDRLUtils.isMobile){
		updateCategoryThreeeButton.getStyle().marginBottom = "10px";
	}else{
		updateCategoryThreeeButton.getStyle().marginBottom = "5px";
	}
	updateCategoryThreeeButton.addListener(FWDPageSimpleButton.CLICK, updateCategoryThreeeHandler);
	
	apiButtonsHolder_el.appendChild(getCategoryNameButton.screen);
	apiButtonsHolder_el.appendChild(getCategoryId.screen);
	apiButtonsHolder_el.appendChild(updateCategoryOneButton.screen);
	apiButtonsHolder_el.appendChild(updateCategoryTowButton.screen);
	apiButtonsHolder_el.appendChild(updateCategoryThreeeButton.screen);

};

function getCategoryNameHanlder(){
	addMessage("category name: <font color='#0099FF'>" + myIGP.getCategoryName() + "</font>");
}

function getCategoryIdHandler(){
	addMessage("category name: <font color='#0099FF'>" + myIGP.getCategoryId() + "</font>");
}

function updateCategoryOneHandler(){
	myIGP.updateCategory(0);
}

function updateCategoryTwoHandler(){
	myIGP.updateCategory(1);
}

function updateCategoryThreeeHandler(){
	myIGP.updateCategory(2);
};

function addMessage(message){
	var currentInnerHTML = textApiLogger_el.innerHTML + message + "<br>";
	self.textApiLogger_el.innerHTML = currentInnerHTML;  
	positionApiLoggerText();
};

function positionApiLoggerText(setToZero){
	var top = -(textApiLogger_el.offsetHeight -  apiLogger_el.offsetHeight);
	if(top > 0) top = 0;
	if(setToZero) top = 0;
	self.textApiLogger_el.style.top = top + "px";
}

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
		if(windowW < 600){
			self.buyButton.setY(255);
		}else{
			self.buyButton.setY(31);
		}
	}
}

//#####################################//
/* Setup menu */
//####################################//
function setupMenu(){
	FWDPageMenu.setPrototype();
	pageMenu_do = new FWDPageMenu({
		disabledButton:0,
		parent:menuHolder_el,
		menuLabels:["<span class=\"menuDark\">Minimal</span> skin", "<span class=\"menuBlue\">Minimal</span> skin",
		            "<span class=\"menuDark\">Modern</span> skin", "<span class=\"menuBlue\">Modern</span> skin"],
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
	if(e.mainButtonId == 0){
		window.location.href = "index.html";
	}else if(e.mainButtonId == 1){
		window.location.href = "mdrn.html";
	}
};

//######################################//
/* Setup example grid */
//#####################################//
function setupExampleGrid(){
	FWDExamplePageGrid.setPrototype();
	exampleGrid_do = new FWDExamplePageGrid({
		    disableId:secondMenuId,
			mainContainer:examplesGrid_el,
			examplesThumbsBkColor:"#dfdfdf"
			});
	examplesGrid_el.appendChild(exampleGrid_do.screen);
	exampleGrid_do.addListener(FWDExamplePageGrid.CLICK, gridExampleClickHandler);
	exampleGrid_do.disableThumbnails(secondMenuId);
}

function gridExampleClickHandler(e){
	if(mainMenuId == 0){
		if(e.id == 0){
			location.href = "index.html";
		}else if(e.id == 1){
			location.href = "index2.html";
		}else if(e.id == 2){
			location.href = "index3.html";
		}else if(e.id == 3){
			location.href = "index4.html";
		}else if(e.id == 4){
			location.href = "index5.html";
		}else if(e.id == 5){
			location.href = "index6.html";
		}else if(e.id == 6){
			location.href = "index7.html";
		}else if(e.id == 7){
			location.href = "index8.html";
		}else if(e.id == 8){
			location.href = "index9.html";
		}else if(e.id == 9){
			location.href = "index10.html";
		}else if(e.id == 10){
			window.open("index11.html");
		}else if(e.id == 11){
			location.href = "index12.html";
		}
	}else if(mainMenuId == 1){
		if(e.id == 0){
			location.href = "mdrn.html";
		}else if(e.id == 1){
			location.href = "mdrn2.html";
		}else if(e.id == 2){
			location.href = "mdrn3.html";
		}else if(e.id == 3){
			location.href = "mdrn4.html";
		}else if(e.id == 4){
			location.href = "mdrn5.html";
		}else if(e.id == 5){
			location.href = "mdrn6.html";
		}else if(e.id == 6){
			location.href = "mdrn7.html";
		}else if(e.id == 7){
			location.href = "mdrn8.html";
		}else if(e.id == 8){
			location.href = "mdrn9.html";
		}else if(e.id == 9){
			location.href = "mdrn10.html";
		}else if(e.id == 10){
			window.open("mdrn11.html");
		}else if(e.id == 11){
			location.href = "mdrn12.html";
		}
	}
}

//#####################################//
/* resize handler */
//#####################################//
function onResizeHandler(){
	positionStuff();
	setTimeout(positionStuff, 50);
}

//#####################################//
/* position stuff */
//#####################################//
function positionStuff(){
	windowW = menuHolder_el.offsetWidth;
	pageMenu_do.positionAndResize(windowW);
	positionLogoImage();
	positionTextAndSeparators();
	positionBuyButton();
	
	//if(window.myGrid && (FWDRLUtils.isIE || FWDRLUtils.isIE11)){
		//productHolder_el.style.left = parseInt((windowW - window.myGrid.stageWidth)/2 - 6) + "px";
	//}
}

//#####################################//
/* position logo image */
//#####################################//
function positionLogoImage(){
	var html5X = 16;
	var byFWDRLX = (windowW - byFWDRLImageWidth);
	var logoImageX = parseInt((windowW - logoImageWidth)/2) - 3;
	
	if(byFWDRLX > mainWidth - byFWDRLImageWidth){
		byFWDRLX =  parseInt(logoImageX  + logoImageWidth - byFWDRLImageWidth);
	}
	
	if(windowW < mainWidth){
		html5X = 2;
	}else{
		html5X = logoImageX + 14;
	}
	
	if(windowW < 300){
		byFWDRL_img.style.top = "-50px";
	}else{
		byFWDRL_img.style.top = "120px";
	}
	
	logoImage_img.style.left = logoImageX  + "px";
	byFWDRL_img.style.left = byFWDRLX + "px";
};

function positionTextAndSeparators(){

	var whatIsMainTextWidth = Math.min(mainWidth - 20, windowW - 20);
	var whatIsMainTextX = parseInt((windowW - whatIsMainTextWidth)/2);
	var colWidth = parseInt((Math.min(mainWidth, windowW) - 40)/2);
	var colHolderWidth = parseInt((Math.min(mainWidth, windowW) - 20));
	
	if(grid_do){
		self.gridHolder_el.style.left = whatIsMainTextX + "px";
		grid_do.positionAndResize(whatIsMainTextWidth - 4);
	}	
	
	if(exampleGrid_do){
		self.examplesGrid_el.style.left = whatIsMainTextX + "px";
		exampleGrid_do.positionAndResize(whatIsMainTextWidth);
	}	
	
	whatIsMainText_el.style.left = whatIsMainTextX  + "px";
	whatIsMainText_el.style.width = (whatIsMainTextWidth )  + "px";
	mainFeatureTableHolder_el.style.width = colHolderWidth + "px";
	
	if(secondMenuId == 11){
		apiMainText_el.style.left = whatIsMainTextX  + "px";
		apiMainText_el.style.width = whatIsMainTextWidth + "px";
		
		apiMainHolder_el.style.left = whatIsMainTextX + "px";
		apiMainHolder_el.style.width = whatIsMainTextWidth + "px"; 
		
		var apiWidth = Math.max(0, parseInt(whatIsMainTextWidth/2 - 12));
		var apiHeight = Math.max(0, apiButtonsHolder_el.offsetHeight - 11);
		
		if(windowW > 500){
			apiButtonsHolder_el.style.width = apiWidth + "px";	
			apiButtonsHolder_el.style.marginTop = "0px";
			apiButtonsHolder_el.style.cssFloat = "right";
			
			apiLogger_el.style.width = apiWidth + "px";
			apiLogger_el.style.marginTop = "0px";
			apiLogger_el.style.height = apiHeight + "px";
			apiLogger_el.style.cssFloat = "left";
		}else{
			apiButtonsHolder_el.style.width = "100%";
			apiButtonsHolder_el.style.marginTop = "10px";
		
			apiLogger_el.style.width = "100%";
			apiLogger_el.style.top = "0px";
			apiLogger_el.style.height = apiHeight + "px";
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
	
	specialNotes_el.style.left = whatIsMainTextX + "px";
	specialNotes_el.style.width = whatIsMainTextWidth + "px";
}

