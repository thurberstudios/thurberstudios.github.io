/* Thumb */
(function (window){
	
	var FWDAnimButton = function(
			imageSource,
			segmentWidth, 
			segmentHeight, 
			totalSegments, 
			animDelay,
			yoyo
			){
		
		var self  = this;
		var prototype = FWDAnimButton.prototype;
		
		this.imageSource_img = new Image();
		this.imageSource_img.src = imageSource;
		this.imageSource_img.onload = function(){
			self.dispatchEvent(FWDAnimButton.LOAD_COMPLETE);
		};
		
		this.image_do = null;
		
		this.segmentWidth = segmentWidth;
		this.segmentHeight = segmentHeight;
		this.totalSegments = totalSegments;
		this.animDelay = animDelay || 300;
		this.currentFrame = 0;
		this.countYoyo = 0;
		
		this.delayTimerId_int;
		this.yoyoId_to;
		
		this.isGowingFWD_bl = true;
		this.yoyo_bl = yoyo;
		this.isShowed_bl = false;
		this.isMobile_bl = FWDRLUtils.isMobile;
		this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent;
		
		//###################################//
		/* init */
		//###################################//
		this.init = function(){
			self.setButtonMode(true);
			self.hasTransform3d_bl = false;
			self.hasTransform2d_bl = false;
			self.getStyle().zIndex = 99;
			self.setWidth(self.segmentWidth);
			self.setHeight(self.segmentHeight);
		
			self.image_do = new FWDRLDisplayObject("img");
			self.image_do.setScreen(self.imageSource_img);
			self.image_do.setWidth(self.segmentWidth * self.totalSegments);
			self.image_do.setHeight(self.segmentHeight);
			self.image_do.hasTransform3d_bl = false;
			self.image_do.hasTransform2d_bl = false;
			self.addChild(this.image_do);
			
			if(self.isMobile_bl){
				if(self.hasPointerEvent_bl){
					self.screen.addEventListener("MSPointerUp", self.onMouseUp);
					self.screen.addEventListener("MSPointerOver", self.onMouseOver);
					self.screen.addEventListener("MSPointerOut", self.onMouseOut);
				}else{
					self.screen.addEventListener("touchend", self.onMouseUp);
				}
			}else if(self.screen.addEventListener){	
				self.screen.addEventListener("mouseover", self.onMouseOver);
				self.screen.addEventListener("mouseout", self.onMouseOut);
				self.screen.addEventListener("mouseup", self.onMouseUp);
			}else if(self.screen.attachEvent){
				self.screen.attachEvent("onmouseover", self.onMouseOver);
				self.screen.attachEvent("onmouseout", self.onMouseOut);
				self.screen.attachEvent("onmouseup", self.onMouseUp);
			}
		};
		
		this.onMouseOver = function(){
			self.goForward();
		};
		
		this.onMouseOut = function(){
			self.goBack();
		};
		
		this.onMouseUp = function(){
			self.dispatchEvent(FWDAnimButton.CLICK);
		};
		
		//###################################//
		/* goForward / stop preloader animation */
		//###################################//
		this.goForward = function(){
			self.isGowingFWD_bl = true;
			self.countYoyo = 0;
			clearInterval(self.delayTimerId_int);
			self.delayTimerId_int = setInterval(self.updatePreloader, self.animDelay);
			self.dispatchEvent(FWDAnimButton.GO_FWD);
		};
		
		this.goBack = function(){
			self.isGowingFWD_bl = false;
			self.countYoyo = 0
			clearInterval(self.delayTimerId_int);
			self.delayTimerId_int = setInterval(self.updatePreloader, self.animDelay);
		};
		
		this.stop = function(){
			clearInterval(self.delayTimerId_int);
			self.currentFrame = 0;
			self.image_do.setX(0);
		};
		
		this.updatePreloader = function(){
			if(self.isGowingFWD_bl){
				self.currentFrame++;
				self.countYoyo++;
				if(self.yoyo_bl && self.countYoyo == 40) self.goBack();
			}else{
				self.currentFrame--;
			}
			
			if(self.currentFrame > self.totalSegments - 2){
				self.currentFrame = self.totalSegments - 2;
				self.dispatchEvent(FWDAnimButton.GO_FWD_COMPLETE);
			}else if(self.currentFrame < 0){
				self.currentFrame = 0;
				clearInterval(self.delayTimerId_int);
				self.dispatchEvent(FWDAnimButton.GO_BACK_COMPLETE);
			}
			
			var posX = self.currentFrame * self.segmentWidth;
			self.image_do.setX(-posX);
		};
		
		this.show = function(){
			self.setX(-self.w - 5);
			FWDAnimation.to(self, .8, {x:0, ease:Expo.easeInOut});
		}
		
		this.init();
	};
	
	/* set prototype */
    FWDAnimButton.setPrototype = function(){
    	FWDAnimButton.prototype = new FWDRLDisplayObject("div");
    };
    
    FWDAnimButton.HIDE_COMPLETE = "hideComplete";
	FWDAnimButton.GO_FWD_COMPLETE = "fwdComplete";
	FWDAnimButton.GO_BACK_COMPLETE = "backComplete";
	FWDAnimButton.GO_FWD = "goForward";
	FWDAnimButton.LOAD_COMPLETE = "loadComplete";
	FWDAnimButton.CLICK = "clickHandler";
    
    FWDAnimButton.prototype = null;
	window.FWDAnimButton = FWDAnimButton;
}(window));/* FWDRAPAPIButton */
(function (window){
var FWDRAPAPIButton = function(label, reverseColors){
		
		var self = this;
		var prototype = FWDRAPAPIButton.prototype;
		
		this.nImg_img = null;
		this.sImg_img = null;
		
		this.dumy_do = null;
	
		this.label_str = label;
		if(reverseColors){
			this.colorN_str = "#000000";
			this.colorS_str = "#FFFFFF";
			this.bkColorN_str = "#FFFFFF";
			this.bkColorS_str = "#000000";
		}else{
			this.colorN_str = "#FFFFFF";
			this.colorS_str = "#000000";
			this.bkColorN_str = "#000000";
			this.bkColorS_str = "#FFFFFF";
		}
		
	
		this.isDisabled_bl = false;
		this.isMobile_bl = FWDRAPUtils.isMobile;
		
		//##########################################//
		/* initialize this */
		//##########################################//
		this.init = function(){
			self.setupMainContainers();
		};
		
		//##########################################//
		/* setup main containers */
		//##########################################//
		this.setupMainContainers = function(){
			
			self.hasTransform3d_bl = false;
			self.hasTransform2d_bl = false;
			self.setBackfaceVisibility();
			self.getStyle().display = "inline-block";
			self.getStyle().clear = "both";
			self.getStyle().fontFamily = "Arial";
			self.getStyle().fontSize= "12px";
			self.getStyle().whiteSpace= "nowrap";
			self.getStyle().margin = "0px";
			self.getStyle().marginBottom = "6px";
			self.getStyle().padding = "6px";
			self.getStyle().color = self.colorN_str;
			self.getStyle().backgroundColor = self.bkColorN_str;
			self.getStyle().fontSmoothing = "antialiased";
			self.getStyle().webkitFontSmoothing = "antialiased";
			self.getStyle().textRendering = "optimizeLegibility";	
			self.setInnerHTML(self.label_str);
			
			self.dumy_do = new FWDRAPDisplayObject("div");
			if(FWDRAPUtils.isIE){
				self.dumy_do.setBkColor("#00FF00");
				self.dumy_do.setAlpha(0.0001);
			}
			self.dumy_do.setButtonMode(true);
			self.dumy_do.getStyle().width = "100%";
			self.dumy_do.getStyle().height = "50px";
			self.addChild(self.dumy_do);
			
			if(!self.isMobile_bl){
				self.dumy_do.screen.onmouseover = self.onMouseOver;
				self.dumy_do.screen.onmouseout = self.onMouseOut;
			}
			self.dumy_do.screen.onclick = self.onClick;
		};
		
		this.onMouseOver = function(e){
			if(self.isDisabled_bl) return;
			FWDRAPTweenMax.to(self.screen, .8, {css:{color:self.colorS_str, backgroundColor:self.bkColorS_str}, ease:Expo.easeOut});
		};
			
		this.onMouseOut = function(e){
			if(self.isDisabled_bl) return;
			FWDRAPTweenMax.to(self.screen, .8, {css:{color:self.colorN_str, backgroundColor:self.bkColorN_str}, ease:Expo.easeOut});
		};
			
		this.onClick = function(e){
			if(self.isDisabled_bl) return;
			self.dispatchEvent(FWDRAPAPIButton.CLICK);
		};
		
		//#####################################//
		/* disable / enable */
		//#####################################//
		this.disable = function(){
			self.isDisabled_bl = true;
			self.dumy_do.setButtonMode(false);
			FWDRAPTweenMax.killTweensOf(self);
			self.getStyle().color = self.colorN_str;
			self.getStyle().backgroundColor = self.bkColorN_str;
			self.setAlpha(.2);
		};
		
		this.enable = function(){
			self.isDisabled_bl = false;
			self.dumy_do.setButtonMode(true);
			self.setAlpha(.1);
		};
	
		self.init();
	};
	
	/* set prototype */
	FWDRAPAPIButton.setPrototype = function(){
		FWDRAPAPIButton.prototype = null;
		FWDRAPAPIButton.prototype = new FWDRAPDisplayObject("div", "relative");
	};
	
	FWDRAPAPIButton.CLICK = "onClick";
	
	FWDRAPAPIButton.prototype = null;
	window.FWDRAPAPIButton = FWDRAPAPIButton;
}(window));/* Thumb */
(function (window){
	
	var FWDBuyButton = function(
			imageSource1,
			imageSource2,
			segmentWidth, 
			segmentHeight, 
			totalSegments, 
			animDelay
			){
		
		var self  = this;
		var prototype = FWDBuyButton.prototype;
		
		this.imageSource1_str = imageSource1;
		this.imageSource2_str = imageSource2;
		
		this.buy_do = null;
		this.hello_do = null;
		
		this.showHelloId_to;
		
		this.segmentWidth = segmentWidth;
		this.segmentHeight = segmentHeight;
		this.totalSegments = totalSegments;
		this.animDelay = animDelay || 300;
		this.isHellowShowed_bl = false;
		this.isMobile_bl = FWDRLUtils.isMobile;
		
		//###################################//
		/* init */
		//###################################//
		this.init = function(){
			self.setWidth(self.segmentWidth);
			self.setHeight(self.segmentHeight);
			
			FWDAnimButton.setPrototype();
			self.buy_do = new FWDAnimButton(
			self.imageSource1_str, 
			self.segmentWidth, 
			self.segmentHeight, 
			self.totalSegments, 
			50,
			false);
			self.buy_do.addListener(FWDAnimButton.GO_FWD, self.buyGoFWDHandler);
			self.buy_do.addListener(FWDAnimButton.GO_BACK_COMPLETE, self.buyAnimBackCompleteHandler);
			self.buy_do.addListener(FWDAnimButton.LOAD_COMPLETE, self.buyLoadCompleteHanlder);
			self.buy_do.addListener(FWDAnimButton.CLICK, self.buyClickHandler);
			self.buy_do.setAlpha(0);
			self.addChild(self.buy_do);
			
			if(FWDRLUtils.isIEAndLessThen9 || self.isMobile_bl){
				self.buy_do.setAlpha(1);
				return;
			}
		
			window.addEventListener("scroll", self.scrollHandler);
			
			FWDAnimButton.setPrototype();
			self.hello_do = new FWDAnimButton(
			self.imageSource2_str, 
			self.segmentWidth, 
			self.segmentHeight, 
			self.totalSegments, 
			50,
			true);
			self.hello_do.addListener(FWDAnimButton.GO_BACK_COMPLETE, self.helloAnimBackCompleteHandler);
			
			
			self.hello_do.setAlpha(0);
			self.addChild(self.hello_do);
			self.addChild(self.buy_do);
			
			self.showHello();
		};
		
		this.buyClickHandler = function(){
			location.href = "http://codecanyon.net/item/infinite-grid-pro/8506142?ref=FWDesign";
		}
		
		this.buyLoadCompleteHanlder = function(){
			self.buy_do.setAlpha(1);
			if(!self.isMobile_bl) self.buy_do.show();
		};
		
		this.scrollHandler = function(){
			var scrOfssets = FWDRLUtils.getScrollOffsets();
			if(scrOfssets.y < 120){
				self.showHello();
			}
		}
		
		this.showHello = function(){
			if(self.isHellowShowed_bl) return;
			var scrOfssets = FWDRLUtils.getScrollOffsets();
			if(scrOfssets.y > 120) return;
			self.isHellowShowed_bl = true;
			clearTimeout(self.showHelloId_to);
			self.showHelloId_to = setTimeout(function(){
				self.buy_do.setAlpha(0);
				self.hello_do.setAlpha(1);
				self.hello_do.goForward();
			}, 4000 + (Math.random() * 6000));
		}
		
		this.showBuy = function(){
			self.isHellowShowed_bl = false;
			clearTimeout(self.showHelloId_to);
			self.buy_do.setAlpha(1);
			if(self.hello_do) self.hello_do.setAlpha(0);
		}
		
		this.buyGoFWDHandler = function(){
			self.showBuy();
			if(self.hello_do) self.hello_do.stop();
		};
		
		this.helloAnimBackCompleteHandler = function(){
			self.showBuy();
			self.showHello();
		};
		
		this.buyAnimBackCompleteHandler = function(){
			if(FWDRLUtils.isIEAndLessThen9 || self.isMobile_bl) return;
			self.showHello();
		};
	
		this.init();
	};
	
	/* set prototype */
    FWDBuyButton.setPrototype = function(){
    	FWDBuyButton.prototype = new FWDRLDisplayObject("div");
    };
    
    FWDBuyButton.HIDE_COMPLETE = "hideComplete";
    
    FWDBuyButton.prototype = null;
	window.FWDBuyButton = FWDBuyButton;
}(window));/* FWDExamplePageGrid */
(function (window){
var FWDExamplePageGrid = function(props_obj){
		
		var self = this;
		var prototype = FWDExamplePageGrid.prototype;
		
		this.image_img = null;
		this.mainContainer = props_obj.mainContainer;
		
		this.thumbs_ar = [];
		
		this.paths_ar = [
		       ["graphics/1.jpg", "graphics/1d.jpg"],
		       ["graphics/2.jpg", "graphics/2d.jpg"],
		       ["graphics/3.jpg", "graphics/3d.jpg"],
		       ["graphics/4.jpg", "graphics/4d.jpg"],
		       ["graphics/5.jpg", "graphics/5d.jpg"],
		       ["graphics/6.jpg", "graphics/6d.jpg"],
		       ["graphics/7.jpg", "graphics/7d.jpg"],
		       ["graphics/8.jpg", "graphics/8d.jpg"],
		       ["graphics/9.jpg", "graphics/9d.jpg"],
		       ["graphics/10.jpg", "graphics/10d.jpg"],
		       ["graphics/11.jpg", "graphics/11d.jpg"],
		       ["graphics/12.jpg", "graphics/12d.jpg"]
		    ];
		
		this.disableId = props_obj.disableId;
		this.mouseX = 0;
		this.mouseY = 0;
		this.dif = 0;
		this.tempId = 0;
		this.stageWidth = 0;
		this.stageHeight = 0;
		this.thumbW = 0;
		this.thumbH = 0;
		this.stageWidth = 0;
		this.stageHeight = 0;
		this.thumbnailMaxWidth = 225;
		this.thumbnailMaxHeight = 191;
		this.spacerH = 20;
		this.spacerV = 19;
		this.howManyThumbsToDisplayH = 0;
		this.howManyThumbsToDisplayV = 0;
		this.totalThumbnails = this.paths_ar.length;
		this.delayRate = .06;
		this.countLoadedThumbs = 0;
		
		this.examplesThumbsBkColor_str = props_obj.examplesThumbsBkColor;
		
		this.hideCompleteId_to;
		this.showCompleteId_to;
		this.loadThumbnailsId_to;
		
	
		//##########################################//
		/* initialize self */
		//##########################################//
		self.init = function(){
			self.setOverflow("visible");
			self.mainContainer.style.height = "0px";
			self.mainContainer.style.overflow = "visible";
			self.setupThumbs();
			setTimeout(self.loadImages, 400);
		};
		
		//###########################################//
		/* resize and position */
		//##########################################//
		this.positionAndResize = function(w){
			self.stageWidth = w;
			self.positonThumbs();
			self.setWidth(self.stageWidth);
			self.setHeight(self.stageHeight);
			self.mainContainer.style.width = self.stageWidth + "px";
			self.mainContainer.style.height = self.stageHeight + "px";
		};
		
		//##########################################//
		/* setup buttons */
		//##########################################//
		this.setupThumbs = function(){
			var thumb;
			for(var i=0; i<self.totalThumbnails; i++){
				FWDExamplePageGridThumb.setPrototype();
				thumb = new FWDExamplePageGridThumb(
						i,
						self.examplesThumbsBkColor_str);
				
				thumb.addListener(FWDExamplePageGridThumb.CLICK, self.thumbnailOnClickHandler);
				self.thumbs_ar[i] = thumb;
				self.addChild(thumb);
			}
		};
		
		this.thumbnailOnClickHandler = function(e){
			self.dispatchEvent(FWDExamplePageGrid.CLICK, {id:e.id});
		};
		
		
		//#############################################//
		/* load images */
		//#############################################//
		this.loadImages = function(){
			if(self.countLoadedThumbs > self.totalThumbnails-1) return;
			
			if(self.image_img){
				self.image_img.onload = null;
				self.image_img.onerror = null;
			}
			
			self.image_img = new Image();
			self.image_img.onerror = self.onImageLoadError;
			self.image_img.onload = self.onImageLoadComplete;
			
			if(self.countLoadedThumbs == self.disableId){
				self.image_img.src = self.paths_ar[self.countLoadedThumbs][1];
			}else{
				self.image_img.src = self.paths_ar[self.countLoadedThumbs][0];
			}
			
		};
		
		this.onImageLoadError = function(e){};
		
		this.onImageLoadComplete = function(e){
			var thumb = self.thumbs_ar[self.countLoadedThumbs];
			thumb.setImage(self.image_img, "graphics/over.png");
			self.countLoadedThumbs++;
			self.loadWithDelayId_to = setTimeout(self.loadImages, 40);	
		};
		
		//###################################################//
		/* position buttons */
		//###################################################//
		this.positonThumbs = function(){
			var thumb;
			var totalWidth;
			var curSet;
			var tempSet;
			var newX;
			var newY;
			var totalWidth;
			var totalHeight;
			var remainWidthSpace;
			var firsId;
			var lastId;
			var addToX;
			var currentLeftColId;
			var availableThumbsPerSection;
			
			this.remainWidthSpace = (self.stageWidth - totalWidth);
			
			var widthToResize = self.stageWidth;
			var heightToResize = self.stageHeight;
			
			self.howManyThumbsToDisplayH = Math.ceil((widthToResize - self.spacerH)/(self.thumbnailMaxWidth + self.spacerH));
			self.thumbW = Math.ceil(((widthToResize - self.spacerH * (self.howManyThumbsToDisplayH - 1)))/self.howManyThumbsToDisplayH);
			if(self.thumbW > self.thumbnailMaxWidth){
				self.howManyThumbsToDisplayH += 1;
				self.thumbW = Math.ceil(((widthToResize - self.spacerH * (self.howManyThumbsToDisplayH - 1)))/self.howManyThumbsToDisplayH);
			}
			
			self.thumbH = Math.floor((self.thumbW/self.thumbnailMaxWidth) * self.thumbnailMaxHeight);
		
			self.howManyThumbsToDisplayV = Math.ceil(self.totalThumbnails/self.howManyThumbsToDisplayH);
			if(self.howManyThumbsToDisplayV < 1) self.howManyThumbsToDisplayV = 1;
			
			totalWidth = (Math.min(self.howManyThumbsToDisplayH, self.totalThumbnails) * (self.thumbW + self.spacerH)) - self.spacerH;
			totalHeight = Math.min(Math.ceil(self.totalThumbnails/self.howManyThumbsToDisplayH), self.howManyThumbsToDisplayV) * (self.thumbH + self.spacerV) - self.spacerV;
			
			if(self.howManyThumbsToDisplayH > self.totalThumbnails){
				remainWidthSpace = 0;
			}else{
				remainWidthSpace = (widthToResize - totalWidth);
			}
			
			if(self.howManyThumbsToDisplayH > self.totalThumbnails) self.howManyThumbsToDisplayH = self.totalThumbnails;
			availableThumbsPerSection = (self.howManyThumbsToDisplayH * self.howManyThumbsToDisplayV);
		
			curSet = Math.floor(self.tempId / availableThumbsPerSection);
			currentLeftColId = self.howManyThumbsToDisplayH * curSet;
			
			firstId = curSet * availableThumbsPerSection;
			
			lastId = firstId + availableThumbsPerSection;
			if(lastId > self.totalThumbnails)  lastId = self.totalThumbnails;
			
			for (var i = 0; i<self.totalThumbnails; i++) {
				
				thumb = self.thumbs_ar[i];
				
				thumb.finalW = self.thumbW;
				if(i % self.howManyThumbsToDisplayH == self.howManyThumbsToDisplayH - 1) thumb.finalW += remainWidthSpace;
				thumb.finalH = self.thumbH;
				
				thumb.finalX = (i % self.howManyThumbsToDisplayH) * (self.thumbW + self.spacerH);
				thumb.finalX += Math.floor((i / availableThumbsPerSection)) * self.howManyThumbsToDisplayH * (self.thumbW + self.spacerH);
				thumb.finalX += (self.stageWidth - totalWidth)/2;
				thumb.finalX = Math.floor(thumb.finalX - currentLeftColId * (self.thumbW + self.spacerH));
				
				thumb.finalY = i % availableThumbsPerSection;
				thumb.finalY = Math.floor((thumb.finalY / self.howManyThumbsToDisplayH)) * (self.thumbH + self.spacerV);
				//thumb.finalY += (heightToResize - totalHeight)/2;
				thumb.finalY = Math.floor(thumb.finalY);
				
				thumb.resizeAndPosition();
				
			}
			self.stageHeight = (self.howManyThumbsToDisplayV * (self.thumbH  + self.spacerV)) - self.spacerV + 1;
		};
		
		this.disableAllPlayPauseButton = function(){
			for (var i = 0; i<self.totalThumbnails; i++) {
				self.thumbs_ar[i].disablePlayPauseButton();
			}
		};
		
		this.disableThumbnails = function(id){
			for (var i = 0; i<self.totalThumbnails; i++) {
				if(i == id) self.thumbs_ar[i].disable();
			}
		};
	
	
		self.init();
	};
	
	/* set prototype */
	FWDExamplePageGrid.setPrototype = function(){
		FWDExamplePageGrid.prototype = new FWDRLDisplayObject("div");
	};
	
	FWDExamplePageGrid.CLICK = "onClick";

	FWDExamplePageGrid.prototype = null;
	window.FWDExamplePageGrid = FWDExamplePageGrid;
}(window));/* FWDExamplePageGridThumb */
(function (window){
	
	var FWDExamplePageGridThumb = function(
			pId, 
			backgroundColor_str
		){
		
		var self = this;
		var prototype = FWDExamplePageGridThumb.prototype;
	
		this.imageHolder_do = null;
		this.normalImage_do = null;
		this.selectedImage_do = null;
		
		this.backgroundColor_str = backgroundColor_str;
		
		this.id = pId;
		this.imageOriginalW;
		this.imageOriginalH;
		this.finalX;
		this.finalY;
		this.finalW;
		this.finalH;
		this.imageFinalX;
		this.imageFinalY;
		this.imageFinalW;
		this.imageFinalH;
		this.progressPercent = 0;
		
		this.dispatchShowWithDelayId_to;
		
		this.isShowed_bl = false;
		this.hasImage_bl = false;
		this.isMobile_bl = FWDRLUtils.isMobile;
		this.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent;

		this.init = function(){
			self.setOverflow("visible");
			self.setBkColor(self.backgroundColor_str);
			self.setupMainContainers();
			self.setButtonMode(true);
			self.selectedImage_do = new FWDRLDisplayObject("img");
			if(self.screen.addEventListener){
				self.screen.addEventListener("click", self.clickHandler);
				self.screen.addEventListener("mouseover", self.overHandler);
				self.screen.addEventListener("mouseout", self.outHandler);
			}else{
				self.screen.attachEvent("onclick", self.clickHandler);
			}
		};
		
		this.overHandler = function(){
			FWDAnimation.killTweensOf(self.selectedImage_do);
			self.selectedImage_do.setVisible(true);
			FWDAnimation.to(self.selectedImage_do, .3, {alpha:1});
		};
		
		this.outHandler = function(){
			FWDAnimation.killTweensOf(self.selectedImage_do);
			FWDAnimation.to(self.selectedImage_do, .3, {alpha:0, onComplete:function(){
				self.selectedImage_do.setVisible(false);
			}});
		};
		
		this.clickHandler = function(e){
			self.dispatchEvent(FWDExamplePageGridThumb.CLICK, {id:self.id});
		};
		
		//#################################//
		/* set image */
		//#################################//
		this.setupMainContainers = function(){
			self.imageHolder_do = new FWDRLDisplayObject("div");
			self.addChild(self.imageHolder_do);
		};
	
		//#################################//
		/* set image */
		//#################################//
		this.setImage = function(image, overPath_str){
			self.normalImage_do = new FWDRLDisplayObject("img");
			self.normalImage_do.setScreen(image);
			self.imageHolder_do.addChild(self.normalImage_do);
			
			self.imageOriginalW = self.normalImage_do.w;
			self.imageOriginalH = self.normalImage_do.h;
			
			if(!self.isMobile_bl){
				var selectedImage = new Image();
				selectedImage.src = overPath_str;
				self.selectedImage_do.setScreen(selectedImage);
				self.selectedImage_do.setAlpha(0);
				self.selectedImage_do.setVisible(false);
				self.imageHolder_do.addChild(self.selectedImage_do);
			}
			
			self.resizeImage();
			
			self.imageHolder_do.setX(parseInt(self.finalW/2));
			self.imageHolder_do.setY(parseInt(self.finalH/2));
			self.imageHolder_do.setWidth(0);
			self.imageHolder_do.setHeight(0);
			
			self.normalImage_do.setX(- parseInt(self.normalImage_do.w/2));
			self.normalImage_do.setY(- parseInt(self.normalImage_do.h/2));
			self.normalImage_do.setAlpha(0);
			
			FWDAnimation.to(self.imageHolder_do, .8, {
				x:0, 
				y:0,
				w:self.finalW,
				h:self.finalH, 
				ease:Expo.easeInOut});
			
			FWDAnimation.to(self.normalImage_do, .8, {
				alpha:1,
				x:self.imageFinalX, 
				y:self.imageFinalY, 
				ease:Expo.easeInOut});
		
			this.hasImage_bl = true;
			
			if(self.id == parent.id){
				self.disable();
			}
		};
		
		//#################################//
		/* resize thumbnail*/
		//#################################//
		this.resizeAndPosition = function(){
			
			FWDAnimation.killTweensOf(self);
			FWDAnimation.killTweensOf(self.imageHolder_do);
			
			self.setX(self.finalX);
			self.setY(self.finalY);
			
			self.setWidth(self.finalW);
			self.setHeight(self.finalH);
			self.imageHolder_do.setX(0);
			self.imageHolder_do.setY(0);
			self.imageHolder_do.setWidth(self.finalW);
			self.imageHolder_do.setHeight(self.finalH);
			
			self.resizeImage();
		};
	
		//#################################//
		/* resize image*/
		//#################################//
		this.resizeImage = function(animate){
			
			if(!self.normalImage_do) return;
			FWDAnimation.killTweensOf(self.normalImage_do);
			var scX = self.finalW/self.imageOriginalW;
			var scY = self.finalH/self.imageOriginalH;
			var ttsc;
			
			if(scX >= scY){
				ttsc = scX;
			}else{
				ttsc = scY;
			}
			
			self.imageFinalW = Math.ceil(ttsc * self.imageOriginalW);
			self.imageFinalH = Math.ceil(ttsc * self.imageOriginalH);
			self.imageFinalX = Math.round((self.finalW - self.imageFinalW)/2);
			self.imageFinalY = Math.round((self.finalH - self.imageFinalH)/2);
			
			self.normalImage_do.setX(self.imageFinalX);
			self.normalImage_do.setY(self.imageFinalY);
			self.normalImage_do.setWidth(self.imageFinalW);
			self.normalImage_do.setHeight(self.imageFinalH);
			
			if(self.selectedImage_do){
				self.selectedImage_do.setX(self.imageFinalX);
				self.selectedImage_do.setY(self.imageFinalY);
				self.selectedImage_do.setWidth(self.imageFinalW);
				self.selectedImage_do.setHeight(self.imageFinalH);
			}
	
			if(self.normalImage_do.alpha != 1) self.normalImage_do.setAlpha(1);
			
		};
		
		//###############################################//
		/* Disable */
		//###############################################//
		this.disable = function(){
			//FWDAnimation.killTweensOf(self);
			//self.setAlpha(.4);
			if(self.screen.removeEventListener){
				self.screen.removeEventListener("click", self.clickHandler);
				self.screen.removeEventListener("mouseover", self.overHandler);
				self.screen.removeEventListener("mouseout", self.outHandler);
			}else{
				self.screen.detachEvent("onclick", self.clickHandler);
			}
			self.setButtonMode(false);
		};
	

		this.init();
	};
	
	/* set prototype */
	FWDExamplePageGridThumb.setPrototype = function(){
		FWDExamplePageGridThumb.prototype = new FWDRLDisplayObject("div");
	};
	
	
	FWDExamplePageGridThumb.CLICK = "click";

	FWDExamplePageGridThumb.prototype = null;
	window.FWDExamplePageGridThumb = FWDExamplePageGridThumb;
}(window));var pageMenu_do;
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

/* FWDRAPPageComplexButton */
(function (){
var FWDRAPPageComplexButton = function(
			n1ImgPath, 
			s1ImgPath, 
			n2ImgPath, 
			s2ImgPath, 
			buttonWidth,
			buttonHeight,
			disptachMainEvent_bl
		){
		
		var self = this;
		var prototype = FWDRAPPageComplexButton.prototype;
		
		this.n1Img = new Image();
		this.n1Img.src = n1ImgPath;
		this.s1Img = new Image();
		this.s1Img.src = s1ImgPath;
		this.n2Img = new Image();
		this.n2Img.src = n2ImgPath;
		this.s2Img = new Image();
		this.s2Img.src = s2ImgPath;
		
		this.firstButton_do;
		this.n1_do;
		this.s1_do;
		this.secondButton_do;
		this.n2_do;
		this.s2_do;
		
		this.buttonWidth = buttonWidth;
		this.buttonHeight = buttonHeight;
		
		this.isSelectedState_bl = false;
		this.currentState = 1;
		this.disptachMainEvent_bl = disptachMainEvent_bl;
		this.isDisabled_bl = false;
		this.isMobile_bl = FWDRAPUtils.isMobile;
		this.hasPointerEvent_bl = FWDRAPUtils.hasPointerEvent;
		
		//##########################################//
		/* initialize self */
		//##########################################//
		self.init = function(){
			self.hasTransform2d_bl = false;
			self.setButtonMode(true);
			self.setWidth(self.buttonWidth);
			self.setHeight(self.buttonHeight);
			self.setupMainContainers();
			self.secondButton_do.setVisible(false);
		};
		
		//##########################################//
		/* setup main containers */
		//##########################################//
		self.setupMainContainers = function(){
			self.firstButton_do = new FWDRAPDisplayObject("div");
			self.addChild(self.firstButton_do);
			self.n1_do = new FWDRAPDisplayObject("img");	
			self.n1_do.setScreen(self.n1Img);
			self.n1_do.setWidth(self.buttonWidth);
			self.n1_do.setHeight(self.buttonHeight);
		
			self.s1_do = new FWDRAPDisplayObject("img");
			self.s1_do.setScreen(self.s1Img);
			self.s1_do.setWidth(self.buttonWidth);
			self.s1_do.setHeight(self.buttonHeight);
			self.s1_do.setAlpha(0);
			
			self.firstButton_do.addChild(self.n1_do);
			self.firstButton_do.addChild(self.s1_do);
			self.firstButton_do.setWidth(self.buttonWidth);
			self.firstButton_do.setHeight(self.buttonHeight);
			
			self.secondButton_do = new FWDRAPDisplayObject("div");
			self.addChild(self.secondButton_do);
			self.n2_do = new FWDRAPDisplayObject("img");	
			self.n2_do.setScreen(self.n2Img);
			self.n2_do.setWidth(self.buttonWidth);
			self.n2_do.setHeight(self.buttonHeight);
			
			self.s2_do = new FWDRAPDisplayObject("img");
			self.s2_do.setScreen(self.s2Img);
			self.s2_do.setAlpha(0);
			self.s2_do.setWidth(self.buttonWidth);
			self.s2_do.setHeight(self.buttonHeight);
			
			self.secondButton_do.addChild(self.n2_do);
			self.secondButton_do.addChild(self.s2_do);
			self.secondButton_do.setWidth(self.buttonWidth);
			self.secondButton_do.setHeight(self.buttonHeight);
			
			self.addChild(self.secondButton_do);
			self.addChild(self.firstButton_do);
			
			if(self.isMobile_bl){
				if(self.hasPointerEvent_bl){
					self.screen.addEventListener("MSPointerDown", self.onMouseUp);
					self.screen.addEventListener("MSPointerOver", self.onMouseOver);
					self.screen.addEventListener("MSPointerOut", self.onMouseOut);
				}else{
					self.screen.addEventListener("touchend", self.onMouseUp);
					self.screen.addEventListener("touchstart", self.onDown);
				}
			}else if(self.screen.addEventListener){	
				self.screen.addEventListener("mouseover", self.onMouseOver);
				self.screen.addEventListener("mouseout", self.onMouseOut);
				self.screen.addEventListener("mousedown", self.onMouseUp);
			}else if(self.screen.attachEvent){
				self.screen.attachEvent("onmouseover", self.onMouseOver);
				self.screen.attachEvent("onmouseout", self.onMouseOut);
				self.screen.attachEvent("onmousedown", self.onMouseUp);
			}
		};
		
		self.onMouseOver = function(e, animate){
			if(self.isDisabled_bl || self.isSelectedState_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE){
				self.dispatchEvent(FWDRAPPageComplexButton.MOUSE_OVER, {e:e});
				self.setSelectedState(true);
			}
		};
			
		self.onMouseOut = function(e){
			if(self.isDisabled_bl || !self.isSelectedState_bl) return;
			if(!e.pointerType || e.pointerType == e.MSPOINTER_TYPE_MOUSE){
				self.setNormalState();
				self.dispatchEvent(FWDRAPPageComplexButton.MOUSE_OUT);
			}
		};
		
		self.onDown = function(e){
			if(e.preventDefault) e.preventDefault();
		};
	
		self.onMouseUp = function(e){
			if(self.isDisabled_bl || e.button == 2) return;
			if(e.preventDefault) e.preventDefault();
			if(!self.isMobile_bl) self.onMouseOver(e, false);
			//if(self.hasPointerEvent_bl) self.setNormalState();
			if(self.disptachMainEvent_bl) self.dispatchEvent(FWDRAPPageComplexButton.MOUSE_UP, {e:e});
		};
		
		//##############################//
		/* toggle button */
		//#############################//
		self.toggleButton = function(){
			if(self.currentState == 1){
				self.firstButton_do.setVisible(false);
				self.secondButton_do.setVisible(true);
				self.currentState = 0;
				self.dispatchEvent(FWDRAPPageComplexButton.FIRST_BUTTON_CLICK);
			}else{
				self.firstButton_do.setVisible(true);
				self.secondButton_do.setVisible(false);
				self.currentState = 1;
				self.dispatchEvent(FWDRAPPageComplexButton.SECOND_BUTTON_CLICK);
			}
		};
		
		//##############################//
		/* set second buttons state */
		//##############################//
		self.setButtonState = function(state){
			if(state == 1){
				self.firstButton_do.setVisible(true);
				self.secondButton_do.setVisible(false);
				self.currentState = 1; 
			}else{
				self.firstButton_do.setVisible(false);
				self.secondButton_do.setVisible(true);
				self.currentState = 0; 
			}
		};
		
		//###############################//
		/* set normal state */
		//################################//
		this.setNormalState = function(){
			if(self.isMobile_bl && !self.hasPointerEvent_bl) return;
			self.isSelectedState_bl = false;
			FWDRAPTweenMax.killTweensOf(self.s1_do);
			FWDRAPTweenMax.killTweensOf(self.s2_do);
			FWDRAPTweenMax.to(self.s1_do, .5, {alpha:0, ease:Expo.easeOut});	
			FWDRAPTweenMax.to(self.s2_do, .5, {alpha:0, ease:Expo.easeOut});
		};
		
		this.setSelectedState = function(animate){
			self.isSelectedState_bl = true;
			FWDRAPTweenMax.killTweensOf(self.s1_do);
			FWDRAPTweenMax.killTweensOf(self.s2_do);
			FWDRAPTweenMax.to(self.s1_do, .5, {alpha:1, delay:.1, ease:Expo.easeOut});
			FWDRAPTweenMax.to(self.s2_do, .5, {alpha:1, delay:.1, ease:Expo.easeOut});
		};
		
		
		//#####################################//
		/* disable / enable */
		//#####################################//
		this.disable = function(){
			self.isDisabled_bl = true;
			self.setButtonMode(false);
			self.setAlpha(.2);
		};
		
		this.enable = function(){
			self.isDisabled_bl = false;
			self.setButtonMode(true);
			self.setAlpha(.1);
		};
	
		self.init();
	};
	
	/* set prototype */
	FWDRAPPageComplexButton.setPrototype = function(){
		FWDRAPPageComplexButton.prototype = new FWDRAPDisplayObject("div");
	};
	
	FWDRAPPageComplexButton.FIRST_BUTTON_CLICK = "onFirstClick";
	FWDRAPPageComplexButton.SECOND_BUTTON_CLICK = "secondButtonOnClick";
	FWDRAPPageComplexButton.MOUSE_OVER = "onMouseOver";
	FWDRAPPageComplexButton.MOUSE_OUT = "onMouseOut";
	FWDRAPPageComplexButton.MOUSE_UP = "onMouseUp";
	FWDRAPPageComplexButton.CLICK = "onClick";
	
	FWDRAPPageComplexButton.prototype = null;
	window.FWDRAPPageComplexButton = FWDRAPPageComplexButton;
}(window));/* FWDPageMenu */
(function (window){
var FWDPageMenu = function(props_obj){
		
		var self = this;
		var prototype = FWDPageMenu.prototype;
		
		this.parent = props_obj.parent;
		
		this.menuLabels_ar = props_obj.menuLabels;
		this.menuButtons_ar = [];
		this.spacers_ar = [];
		
		this.availableSkins_do = null;
		this.buttonsHolder_do = null;
		
		this.shadowPath_str = props_obj.shadowPath;
		
		this.button1NormalColor_str = props_obj.button1NormalColor; 
		this.button1SelectedColor_str = props_obj.button1SelectedColor;
		this.button2NormalColor_str = props_obj.button2NormalColor;
		this.button2SelectedColor_str = props_obj.button2SelectedColor;
		this.backgroundColorOrPath = props_obj.backgroundColorOrPath;
		this.spacerColor_str = props_obj.spacerColor;
		
		this.stageWidth = 0;
		this.stageHeight = 0;
		this.buttonsHolderWidth = 200;
		this.buttonsBarOriginalHeight = 80;
		this.totalHeight = 0;
		this.buttonsBarTotalHeight = 150;
		this.totalButtons = self.menuLabels_ar.length/2;
		this.totalHeight = 120;
		this.hSpace = 134;
		this.minHSpace = 30;
		this.vSpace = 20;
		this.minMarginXSpace = 20;
		this.startY = 13;
		
	
		//##########################################//
		/* initialize self */
		//##########################################//
		self.init = function(){
			self.parent.style.height = "0px";
			
			self.setupButtons();
			
			setTimeout(function(){
				self.setOverflow("visible");
				self.positonButtons();
				}
			, 251);
			self.parent.appendChild(self.screen);
		};
		
		//###########################################//
		/* resize and position */
		//##########################################//
		this.positionAndResize = function(w){
			self.stageWidth = w;
			self.positonButtons();
		};
		
		//##########################################//
		/* setup buttons */
		//##########################################//
		this.setupButtons = function(){
			
			var button;
			
			var disableButton_bl = false;
			
			self.buttonsHolder_do = new FWDRLDisplayObject ("div");
			if(self.backgroundColorOrPath.indexOf(".") != -1){
				self.buttonsHolder_do.getStyle().background = "url('" + self.backgroundColorOrPath + "')";
			}else{
				self.buttonsHolder_do.setBkColor(self.backgroundColorOrPath);
			}
			
			self.buttonsHolder_do.setWidth(self.stageWidth);
			self.buttonsHolder_do.setHeight(self.buttonsBarOriginalHeight);
			self.addChild(self.buttonsHolder_do);
			
			for(var i=0; i<self.totalButtons; i++){
				FWDPageMenuButton.setPrototype();
				button = new FWDPageMenuButton(
						self.menuLabels_ar[i * 2],
						self.menuLabels_ar[i  * 2 + 1],
						self.button1NormalColor_str, 
						self.button1SelectedColor_str,
						self.button2NormalColor_str, 
						self.button2SelectedColor_str);
				button.id = i;
				button.addListener(FWDPageMenuButton.CLICK, self.buttonClickHandler);
				self.menuButtons_ar[i] = button;
				self.buttonsHolder_do.addChild(button);
			}
			
			self.availableSkins_do = new FWDRLDisplayObject ("div");
			self.availableSkins_do.setBackfaceVisibility();
			self.availableSkins_do.hasTransform2d_bl = false;
			self.availableSkins_do.hasTransform3d_bl = false;
			//self.availableSkins_do.getStyle().zIndex = 20;
			self.availableSkins_do.getStyle().whiteSpace= "nowrap";
			self.availableSkins_do.getStyle().fontFamily = "myFont, Arial";
			self.availableSkins_do.getStyle().fontSize= "16px";
			self.availableSkins_do.getStyle().color = "#000000";
			self.availableSkins_do.getStyle().fontSmoothing = "antialiased";
			self.availableSkins_do.getStyle().webkitFontSmoothing = "antialiased";
			self.availableSkins_do.getStyle().textRendering = "optimizeLegibility";	
			self.availableSkins_do.setInnerHTML("Available skins");
			self.availableSkins_do.setY(-15);
			self.addChild(self.availableSkins_do);
		};
		
		this.buttonClickHandler = function(e){
			self.dispatchEvent(FWDPageMenuButton.CLICK, {mainButtonId:e.mainButtonId});
		};
		
		this.disableButton = function(id){
			var button;
			for(var i=0; i<self.totalButtons; i++){
				button = self.menuButtons_ar[i];
				if(i == id){
					button.disable();
				}else{
					button.enable();
				}
			}
		};
		
		//###################################################//
		/* position buttons */
		//###################################################//
		this.positonButtons = function(){
			var button;
			var prevButton;
			var rowsAr = [];
			var rowsWidthAr = [];
			var rowsThumbsWidthAr = [];
			var tempX;
			var tempY = self.startY;
			var maxY = 0;
			var totalRowWidth = 0;
			var rowsNr = 0;
			
			rowsAr[rowsNr] = [0];
			rowsWidthAr[rowsNr] = self.menuButtons_ar[0].totalWidth;
			rowsThumbsWidthAr[rowsNr] = self.menuButtons_ar[0].totalWidth;
			
			for (var i=1; i<self.totalButtons; i++){
				button = self.menuButtons_ar[i];
				
				
				if (rowsWidthAr[rowsNr] + button.totalWidth + self.minHSpace > self.stageWidth - self.minMarginXSpace){	
					rowsNr++;
					rowsAr[rowsNr] = [];
					rowsAr[rowsNr].push(i);
					rowsWidthAr[rowsNr] = button.totalWidth;
					rowsThumbsWidthAr[rowsNr] = button.totalWidth;
				}else{
					rowsAr[rowsNr].push(i);
					rowsWidthAr[rowsNr] += button.totalWidth + self.minHSpace;
					rowsThumbsWidthAr[rowsNr] += button.totalWidth;
				}
			}
			
			if(rowsNr == 1){
				rowsNr = 0;
				rowsAr[rowsNr] = [0];
				rowsWidthAr[rowsNr] = self.menuButtons_ar[0].totalWidth;
				rowsThumbsWidthAr[rowsNr] = self.menuButtons_ar[0].totalWidth;
				for (var i=1; i<self.totalButtons; i++){
					button = self.menuButtons_ar[i];
					rowsNr++;
					rowsAr[rowsNr] = [];
					rowsAr[rowsNr].push(i);
					rowsWidthAr[rowsNr] = button.totalWidth;
					rowsThumbsWidthAr[rowsNr] = button.totalWidth;
				}
			}
			
			for (var i=0; i<rowsNr + 1; i++){
				var rowMarginXSpace = 0;
				
				if (i > 0){
					tempY += button.totalHeight + self.vSpace;
				}
				
				var rowHSpace;
				
				if (rowsAr[i].length > 1){
					rowHSpace = Math.min((self.stageWidth - self.minMarginXSpace - rowsThumbsWidthAr[i]) / (rowsAr[i].length - 1), self.hSpace);
					
					var rowWidth = rowsThumbsWidthAr[i] + rowHSpace * (rowsAr[i].length - 1);
					
					rowMarginXSpace = parseInt((self.stageWidth - rowWidth)/2);
				}else{
					rowMarginXSpace = parseInt((self.stageWidth - rowsWidthAr[i])/2);
				}
					
				for (var j=0; j<rowsAr[i].length; j++){
					button = self.menuButtons_ar[rowsAr[i][j]];
				
					if (j == 0){
						tempX = rowMarginXSpace;
					}else{
						prevButton = self.menuButtons_ar[rowsAr[i][j] - 1];
						tempX = prevButton.finalX + prevButton.totalWidth + rowHSpace - 6;
					}
					

					button.finalX = tempX;
					button.finalY = tempY - 1;
						
					if (maxY < button.finalY) maxY = button.finalY;
					
					self.buttonsBarTotalHeight = maxY + button.totalHeight + self.startY - 2;
					button.setX(button.finalX);
					button.setY(button.finalY);
				}
			}
			
			//if(rowsAr.length == 1){
				self.availableSkins_do.setX(parseInt(self.stageWidth - 100)/2);
			//}else{
				//self.availableSkins_do.setX(self.menuButtons_ar[1].x + 20);
			//}
			
		
			self.buttonsHolder_do.setWidth(self.stageWidth);
			self.buttonsHolder_do.setHeight(self.buttonsBarTotalHeight);
		
			self.parent.style.height = (self.buttonsBarTotalHeight) + "px";
		};
	
	
		//##############################//
		/* destroy */
		//##############################//
		self.destroy = function(){
			self.setInnerHTML("");
			prototype.destroy();
			self = null;
			prototype = null;
			FWDPageMenu.prototype = null;
		};
	
		self.init();
	};
	
	/* set prototype */
	FWDPageMenu.setPrototype = function(){
		FWDPageMenu.prototype = new FWDRLDisplayObject ("div");
	};
	
	FWDPageMenu.CLICK = "onClick";

	FWDPageMenu.prototype = null;
	window.FWDPageMenu = FWDPageMenu;
}(window));/* FWDPageMenuButton */
(function (){
var FWDPageMenuButton = function(
			label, 
			label2,
			button1NormalColor,
			button1SelectedColor,
			disableButton_bl
		){
		
		var self = this;
		var prototype = FWDPageMenuButton.prototype;
		
		this.label_str = label;
		this.label2_str = label2;
		this.buttonNormalColor_str = button1NormalColor;
		this.buttonSelectedColor_str = button1SelectedColor;
		
		this.id;
		this.totalWidth = 400;
		this.totalHeight = 20;
		this.separatorW = 152;
		this.separatorH = 1;
		
		this.separator_do = null;
		this.text1_do = null;
		this.text2_do = null;
		this.dumy_sdo = null;
		this.dumy2_sdo = null;
		
		this.finalX;
		this.finalY;
		this.separatorMarginTopAndBottom = 10;
		
		this.isMobile_bl = FWDRLUtils.isMobile;
		this.disableButton_bl = disableButton_bl;
		this.currentState = 1;
		this.isFirstButtonDisabled_bl = false;
		this.isSecondButtonDisabled_bl = false;
	
		
		//##########################################//
		/* initialize self */
		//##########################################//
		self.init = function(){
			self.setBackfaceVisibility();
			self.setOverflow("visible");
			self.setupMainContainers();
			self.setWidth(self.totalWidth);
			self.setHeight(self.totalHeight);
			if(self.disableButton_bl) self.disable();
		};
		
		//##########################################//
		/* setup main containers */
		//##########################################//
		self.setupMainContainers = function(){
	
			self.text1_do = new FWDRLDisplayObject ("div");
			self.text1_do.setBackfaceVisibility();
			self.text1_do.hasTransform2d_bl = false;
			self.text1_do.hasTransform3d_bl = false;
			self.text1_do.getStyle().whiteSpace= "nowrap";
			self.text1_do.getStyle().fontFamily = "myFont, Arial";
			self.text1_do.getStyle().fontSize= "20px";
			self.text1_do.getStyle().fontSmoothing = "antialiased";
			self.text1_do.getStyle().webkitFontSmoothing = "antialiased";
			self.text1_do.getStyle().textRendering = "optimizeLegibility";	
			self.text1_do.setInnerHTML(self.label_str);
			
			self.text2_do = new FWDRLDisplayObject ("div");
			self.text2_do.setBackfaceVisibility();
			self.text2_do.hasTransform2d_bl = false;
			self.text2_do.hasTransform3d_bl = false;
			self.text2_do.getStyle().whiteSpace= "nowrap";
			self.text2_do.getStyle().fontFamily = "myFont, Arial";
			self.text2_do.getStyle().fontSize= "20px";
			self.text2_do.getStyle().color = self.buttonSelectedColor_str;
			self.text2_do.getStyle().fontSmoothing = "antialiased";
			self.text2_do.getStyle().webkitFontSmoothing = "antialiased";
			self.text2_do.getStyle().textRendering = "optimizeLegibility";	
			self.text2_do.setInnerHTML(self.label2_str);
			
			
		
			self.dumy_sdo = new FWDRLDisplayObject ("div");
			if(FWDRLUtils.isIE){
				self.dumy_sdo.setBkColor("#FF0000");
				self.dumy_sdo.setAlpha(.01);
			};
				
			self.dumy_sdo.setButtonMode(true);
			self.addChild(self.text1_do);
			self.addChild(self.text2_do);
			self.addChild(self.dumy_sdo);
				
			setTimeout(function(){
				self.centerText();
			}, 250);
			
			if(self.isMobile_bl){
				self.dumy_sdo.screen.addEventListener("click", self.firstButtonClick);
			}else if(self.screen.addEventListener){
				self.dumy_sdo.screen.addEventListener("mouseover", self.firstButtonMouseOver);
				self.dumy_sdo.screen.addEventListener("mouseout", self.firstButtonMouseOut);
				self.dumy_sdo.screen.addEventListener("click", self.firstButtonClick);
			}else if(self.screen.attachEvent){
				self.dumy_sdo.screen.attachEvent("onmouseover", self.firstButtonMouseOver);
				self.dumy_sdo.screen.attachEvent("onmouseout", self.firstButtonMouseOut);
				self.dumy_sdo.screen.attachEvent("onclick", self.firstButtonClick);
			}
		};
		
		self.firstButtonMouseOver = function(animate){
			if(self.isFirstButtonDisabled_bl) return;
			FWDAnimation.killTweensOf(self.text1_do);
			if(animate){
				FWDAnimation.to(self.text1_do, .5, {alpha:0, ease:Expo.easeOut});
				FWDAnimation.to(self.text2_do, .5, {alpha:1, ease:Expo.easeOut});
			}else{
				self.text1_do.setAlpha(0);
				self.text2_do.setAlpha(1);
			}
		};
			
		self.firstButtonMouseOut = function(e){	
			if(self.isFirstButtonDisabled_bl) return;
			FWDAnimation.to(self.text1_do, .5, {alpha:1, ease:Expo.easeOut});
			FWDAnimation.to(self.text2_do, .5, {alpha:0, ease:Expo.easeOut});
		};
		
		self.firstButtonClick = function(e){
			if(e.preventDefault) e.preventDefault();
			self.dispatchEvent(FWDPageMenuButton.CLICK, {mainButtonId:self.id});
		};
	
		
		//##############################//
		/* set selected state */
		//##############################//
		self.disable = function(id){
			self.isFirstButtonDisabled_bl = true;
			self.dumy_sdo.setButtonMode(false);
			FWDAnimation.killTweensOf(self.text2_do);
			FWDAnimation.killTweensOf(self.text2_do);
			self.text1_do.setAlpha(0);
			self.text2_do.setAlpha(1);
		};		
		
		self.enable = function(id){
			self.isFirstButtonDisabled_bl = false;
			self.dumy_sdo.setButtonMode(true);
			FWDAnimation.killTweensOf(self.text2_do);
			FWDAnimation.killTweensOf(self.text2_do);
			self.text1_do.setAlpha(1);
			self.text2_do.setAlpha(0);
		};		

		//##########################################//
		/* center text */
		//##########################################//
		self.centerText = function(){
			self.totalWidth =  self.text1_do.getWidth();
			self.totalHeight = self.text1_do.getHeight();
	
			self.dumy_sdo.setWidth(self.totalWidth);
			self.dumy_sdo.setHeight(self.totalHeight);
			
			self.setWidth(self.totalWidth);
			self.setHeight(self.totalHeight);
		};
		
		self.init();
	};
	
	/* set prototype */
	FWDPageMenuButton.setPrototype = function(){
		FWDPageMenuButton.prototype = new FWDRLDisplayObject ("div");
	};
	
	FWDPageMenuButton.CLICK = "firstButtonClick";
	
	FWDPageMenuButton.prototype = null;
	window.FWDPageMenuButton = FWDPageMenuButton;
}(window));/* FWDPageSimpleButton */
(function (window){
var FWDPageSimpleButton = function(label){
		
		var self = this;
		var prototype = FWDPageSimpleButton.prototype;
		
		this.nImg_img = null;
		this.sImg_img = null;
		
		this.dumy_do = null;
	
		this.label_str = label;
		this.colorN_str = "#FFFFFF";
		this.colorS_str = "#000000";
		this.bkColorN_str = "#000000";
		this.bkColorS_str = "#FFFFFF";
	
		this.isDisabled_bl = false;
		
		//##########################################//
		/* initialize this */
		//##########################################//
		this.init = function(){
			self.setupMainContainers();
		};
		
		//##########################################//
		/* setup main containers */
		//##########################################//
		this.setupMainContainers = function(){
			
			self.hasTransform3d_bl = false;
			self.hasTransform2d_bl = false;
			self.setBackfaceVisibility();
			self.getStyle().display = "inline-block";
			self.getStyle().clear = "both";
			self.getStyle().fontFamily = "Arial";
			self.getStyle().fontSize= "12px";
			self.getStyle().whiteSpace= "nowrap";
			self.getStyle().padding = "6px";
			self.getStyle().color = self.colorN_str;
			self.getStyle().backgroundColor = self.bkColorN_str;
			self.getStyle().fontSmoothing = "antialiased";
			self.getStyle().webkitFontSmoothing = "antialiased";
			self.getStyle().textRendering = "optimizeLegibility";	
			self.setInnerHTML(self.label_str);
			
			self.dumy_do = new FWDRLDisplayObject("div");
			if(FWDRLUtils.isIE){
				self.dumy_do.setBkColor("#00FF00");
				self.dumy_do.setAlpha(0.0001);
			}
			self.dumy_do.setButtonMode(true);
			self.dumy_do.getStyle().width = "100%";
			self.dumy_do.getStyle().height = "50px";
			self.addChild(self.dumy_do);
			
			self.dumy_do.screen.onmouseover = self.onMouseOver;
			self.dumy_do.screen.onmouseout = self.onMouseOut;
			self.dumy_do.screen.onclick = self.onClick;
			
			
		};
		
		this.setFinalWidth = function(){
			setTimeout(function(){
				self.w = self.getWidth();
			}, 50);
		};
		
		this.onMouseOver = function(e){
			FWDAnimation.to(self.screen, .8, {css:{color:self.colorS_str, backgroundColor:self.bkColorS_str}, ease:Expo.easeOut});
		};
			
		this.onMouseOut = function(e){
			FWDAnimation.to(self.screen, .8, {css:{color:self.colorN_str, backgroundColor:self.bkColorN_str}, ease:Expo.easeOut});
		};
			
		this.onClick = function(e){
			self.dispatchEvent(FWDPageSimpleButton.CLICK);
		};
		
	
		self.init();
	};
	
	/* set prototype */
	FWDPageSimpleButton.setPrototype = function(){
		FWDPageSimpleButton.prototype = null;
		FWDPageSimpleButton.prototype = new FWDRLDisplayObject("div", "relative");
	};
	
	FWDPageSimpleButton.CLICK = "onClick";
	
	FWDPageSimpleButton.prototype = null;
	window.FWDPageSimpleButton = FWDPageSimpleButton;
}(window));/* FWDRAPPageThumb */
(function (window){
	
	var FWDRAPPageThumb = function(
			pId, 
			shadowPath,
			imageOverPath,
			textToShow,
			iconText,
			offsetHeight,
			borderSize, 
			borderColor,
			textNormalColor,
			textSelectedColor,
			wiewSampleTextColor,
			shadowOffsetX,
			shadowOffsetY,
			shadowOffsetW,
			shadowOffsetH){
		
		var self = this;
		var prototype = FWDRAPPageThumb.prototype;

		this.main_do = null;
		this.shadow_sdo = null;
		this.border_do = null;
		this.imageHolder_do = null;
		this.image_do = null;
		this.text_sdo = null;
		this.icon_sdo = null;
		this.overlay_sdo = null;
		this.over_sdo = null;
		
		this.shadowPath_str = shadowPath;
		this.imageOverPath_str = imageOverPath;
		this.textToShow_str = textToShow;
		this.iconText_str = iconText;
		this.borderColor_str = borderColor;
		this.textNormalColor_str = textNormalColor;
		this.textSelectedColor_str = textSelectedColor;
		this.wiewSampleTextColor_str = wiewSampleTextColor;

		this.borderSize = borderSize;
		this.id = pId;
		this.imageOriginalW;
		this.imageOriginalH;
		this.borderSize;
		this.finalX;
		this.finalY;
		this.finalW;
		this.finalH;
		this.imageFinalX;
		this.imageFinalY;
		this.imageFinalW;
		this.imageFinalH;
		this.offsetHeight = offsetHeight;
		this.shadowOffsetX = shadowOffsetX;
		this.shadowOffsetY = shadowOffsetY;
		this.shadowOffsetW = shadowOffsetW;
		this.shadowOffsetH = shadowOffsetH;
	
		this.isShowed_bl = false;
		this.hasImage_bl = false;
		this.isMobile_bl = FWDRAPUtils.isMobile;
		this.tweenOnShow_bl = true;
		this.isDisabled_bl = false;

		this.init = function(){
			self.setOverflow("visible");
			self.setupMainContainers();
		};
		
		//#################################//
		/* setup main containers */
		//#################################//
		this.setupMainContainers = function(){
			var image_img;
			
			self.shadow_sdo = new FWDRAPDisplayObject("img");
			image_img = new Image();
			image_img.src = self.shadowPath_str;
			self.shadow_sdo.setScreen(image_img);
			self.shadow_sdo.setX(-7 + self.shadowOffsetX);
			self.shadow_sdo.setY(-11 + self.shadowOffsetY);
			self.addChild(self.shadow_sdo);
			
			self.main_do = new FWDRAPDisplayObject("div");
			self.main_do.setResizableSizeAfterParent();
			self.border_do = new FWDRAPDisplayObject("div");
			self.border_do.setResizableSizeAfterParent();
			self.border_do.setBkColor(self.borderColor_str);
			self.imageHolder_do = new FWDRAPDisplayObject("div");
			
			self.text_sdo = new FWDRAPDisplayObject("div");
			self.text_sdo.setOverflow("visible");
			self.text_sdo.getStyle().width = "100%";
			self.text_sdo.getStyle().textAlign = "center";
			self.text_sdo.getStyle().fontFamily = "Arial";
			self.text_sdo.getStyle().fontSize= "13px";
			self.text_sdo.getStyle().color = self.textNormalColor_str;
			self.text_sdo.getStyle().fontSmoothing = "antialiased";
			self.text_sdo.getStyle().webkitFontSmoothing = "antialiased";
			self.text_sdo.getStyle().textRendering = "optimizeLegibility";	
			self.text_sdo.setX(self.borderSize);
			self.text_sdo.setInnerHTML(self.textToShow_str);
			
			self.icon_sdo = new FWDRAPDisplayObject("div");
			self.icon_sdo.getStyle().width = "100%";
			self.icon_sdo.getStyle().textAlign = "center";
			self.icon_sdo.getStyle().fontFamily = "Arial";
			self.icon_sdo.getStyle().fontSize= "13px";
			self.icon_sdo.getStyle().letterSpacing = "2px";
			self.icon_sdo.getStyle().color = self.wiewSampleTextColor_str;
			self.icon_sdo.getStyle().fontSmoothing = "antialiased";
			self.icon_sdo.getStyle().webkitFontSmoothing = "antialiased";
			self.icon_sdo.getStyle().textRendering = "optimizeLegibility";	
			self.icon_sdo.setInnerHTML(self.iconText_str);
			
			if(!FWDRAPUtils.hasTransform2d) self.icon_sdo.setAlpha(0);
			
			self.overlay_sdo = new FWDRAPDisplayObject("div");
			self.overlay_sdo.setBkColor("#000000");
			self.overlay_sdo.setAlpha(0);
			
			self.over_sdo = new FWDRAPDisplayObject("div");
			if(FWDRAPUtils.isIE) self.over_sdo.getStyle().background = "url('dumy')";
			
			self.main_do.addChild(self.border_do);
			self.main_do.addChild(self.imageHolder_do);
			self.main_do.addChild(self.text_sdo);
			self.addChild(self.main_do);
			self.main_do.addChild(self.icon_sdo);
			self.addChild(self.over_sdo);
		};
		
		//#################################//
		/* set image */
		//#################################//
		this.setImage = function(image){
			self.image_do = new FWDRAPDisplayObject("img");
			self.image_do.setScreen(image);
			self.setButtonMode(true);
			
			self.imageOriginalW = self.image_do.w;
			self.imageOriginalH = self.image_do.h;
			
			self.imageHolder_do.addChild(self.image_do);	
			self.imageHolder_do.addChild(self.overlay_sdo);
			self.hasImage_bl = false;
			
			self.resizeImage();
			
			if(self.tweenOnShow_bl){
				
				self.imageHolder_do.setX(parseInt(self.finalW/2));
				self.imageHolder_do.setY(parseInt((self.finalH - self.offsetHeight)/2));
				self.imageHolder_do.setWidth(0);
				self.imageHolder_do.setHeight(0);
				self.image_do.setX(- parseInt(self.image_do.w/2));
				self.image_do.setY(- parseInt(self.image_do.h/2));
				self.image_do.setAlpha(0);
				
				FWDRAPTweenMax.to(self.imageHolder_do, .8, {
					x:self.borderSize, 
					y:self.borderSize,
					w:self.finalW - (self.borderSize * 2),
					h:self.finalH - (self.borderSize * 2), ease:Expo.easeInOut});
				
				FWDRAPTweenMax.to(self.image_do, .8, {
					alpha:1,
					x:0, 
					y:0, ease:Expo.easeInOut});
			}
			
			if(self.screen.addEventListener){
				if(!self.isMobile_bl){
					self.over_sdo.screen.addEventListener("mouseover", self.onMouseOverHandler);
					self.over_sdo.screen.addEventListener("mouseout", self.onMouseOutHandler);
				}
				self.over_sdo.screen.addEventListener("click", self.onMouseClickHandler);
			}else{
				if(!self.isMobile_bl){
					self.over_sdo.screen.attachEvent("onmouseover", self.onMouseOverHandler);
					self.over_sdo.screen.attachEvent("onmouseout", self.onMouseOutHandler);
				}
				self.over_sdo.screen.attachEvent("onclick", self.onMouseClickHandler);
			}
			self.hasImage_bl = true;
		};
		
		this.onMouseOverHandler = function(animate){
			if(self.isDisabled_bl) return;
			FWDRAPTweenMax.to(self.text_sdo.screen, .5, {css:{color:self.textSelectedColor_str}, ease:Expo.easeOut});
			FWDRAPTweenMax.to(self.overlay_sdo, .5, {alpha:.7, ease:Expo.easeOut});
			if(FWDRAPUtils.hasTransform2d){
				self.icon_sdo.getStyle().left = self.borderSize + "px";
				FWDRAPTweenMax.to(self.icon_sdo.screen, .5, {css:{scale:1}, ease:Expo.easeOut});
			}else{
				self.icon_sdo.getStyle().left = self.borderSize + "px";
				FWDRAPTweenMax.to(self.icon_sdo, .5, {alpha:1, ease:Expo.easeOut});
			}
		};
		
		this.onMouseOutHandler = function(e){
			if(self.isDisabled_bl) return;
			FWDRAPTweenMax.to(self.text_sdo.screen, .5, {css:{color:self.textNormalColor_str}, ease:Expo.easeOut});
			FWDRAPTweenMax.to(self.overlay_sdo, .5, {alpha:0, ease:Expo.easeOut});
			if(FWDRAPUtils.hasTransform2d){
				FWDRAPTweenMax.to(self.icon_sdo.screen, .5, {css:{scale:0}, ease:Expo.easeOut});
			}else{
				FWDRAPTweenMax.to(self.icon_sdo, .5, {alpha:0, ease:Expo.easeOut});
			}
		};
		
		this.onMouseClickHandler = function(e){
			if(self.isDisabled_bl) return;
			self.dispatchEvent(FWDRAPPageThumb.CLICK);
		};
		
		//#################################//
		/* resize thumbnail*/
		//#################################//
		this.resizeThumb = function(animate){
			
			FWDRAPTweenMax.killTweensOf(self);
			FWDRAPTweenMax.killTweensOf(self.imageHolder_do);
			
			if(animate){
				FWDRAPTweenMax.to(self, .8, {
					x:self.finalX, 
					y:self.finalY,
					w:self.finalW,
					h:self.finalH,
					ease:Expo.easeInOut});
			}else{
				self.setX(self.finalX);
				self.setY(self.finalY);
			}
			
			self.setWidth(self.finalW);
			self.setHeight(self.finalH);
			self.imageHolder_do.setX(self.borderSize);
			self.imageHolder_do.setY(self.borderSize);
			self.imageHolder_do.setWidth(self.finalW - (self.borderSize * 2));
			self.imageHolder_do.setHeight(self.finalH - (self.borderSize * 2));
			
			self.text_sdo.setWidth(self.finalW - (self.borderSize * 2));
			self.text_sdo.setY((self.finalH - self.offsetHeight) + parseInt((self.offsetHeight - self.text_sdo.getHeight())/2) - parseInt(self.borderSize/2));
		
			self.shadow_sdo.setWidth(self.finalW + 16 + self.shadowOffsetW);
			self.shadow_sdo.setHeight(self.finalH + 20 + + self.shadowOffsetH);
			
			self.icon_sdo.setWidth(self.finalW - (self.borderSize * 2));
			self.icon_sdo.setY(self.borderSize + parseInt((self.finalH - self.offsetHeight - self.borderSize - 13)/2));
			
			if(FWDRAPUtils.hasTransform2d){
				self.icon_sdo.getStyle().left =  "-500px";
				FWDRAPTweenMax.to(self.icon_sdo.screen, 0, {css:{scale:0}});
			}else{
				self.icon_sdo.getStyle().left =  "-500px";
			}
			
			self.over_sdo.setWidth(self.finalW);
			self.over_sdo.setHeight(self.finalH);
			
			self.resizeImage();
		};
	
		
		//#################################//
		/* resize image*/
		//#################################//
		this.resizeImage = function(animate){
			
			if(!self.image_do) return;
			
			FWDRAPTweenMax.killTweensOf(self.image_do);
			var scX = (self.finalW -  (self.borderSize * 2))/self.imageOriginalW;
			var scY = (self.finalH - (self.borderSize * 2))/self.imageOriginalH;
			var ttsc;
			
			if(scX <= scY){
				ttsc = scX;
			}else{
				ttsc = scY;
			}
		
			self.imageFinalW = Math.ceil(ttsc * self.imageOriginalW);
			self.imageFinalH = Math.ceil(ttsc * self.imageOriginalH);
			
			self.image_do.setX(0);
			self.image_do.setY(0);
			self.image_do.setWidth(self.imageFinalW);
			self.image_do.setHeight(self.imageFinalH);
			self.image_do.setAlpha(1);
			self.overlay_sdo.setWidth(self.imageFinalW);
			self.overlay_sdo.setHeight(self.imageFinalH);
		};
		
		//################################//
		/* enable /disable */
		//################################//
		this.disable = function(){
			self.isDisabled_bl = true;
			FWDRAPTweenMax.to(self.overlay_sdo, .5, {alpha:.7, ease:Expo.easeOut});
			if(FWDRAPUtils.hasTransform2d){
				FWDRAPTweenMax.to(self.icon_sdo.screen, .5, {css:{scale:0}, ease:Expo.easeOut});
			}else{
				FWDRAPTweenMax.to(self.icon_sdo, .5, {alpha:0, ease:Expo.easeOut});
			}
			
			self.over_sdo.setButtonMode(false);
			self.text_sdo.getStyle().color = self.textSelectedColor_str;
		};		
		
		this.enable = function(){
			self.isDisabled_bl = false;
			FWDRAPTweenMax.to(self.overlay_sdo, .5, {alpha:0, ease:Expo.easeOut});
			self.over_sdo.setButtonMode(true);
			self.text_sdo.getStyle().color = self.textNormalColor_str;
		};		
		
		self.init();
	};
	
	/* set prototype */
	FWDRAPPageThumb.setPrototype = function(){
		FWDRAPPageThumb.prototype = new FWDRAPDisplayObject("div");
	};
	
	
	FWDRAPPageThumb.CLICK = "onClick";
	FWDRAPPageThumb.HIDE_OVERLAY = "onShowOverlay";
	FWDRAPPageThumb.SHOW_OVERLAY = "onHideOverlay";
	
	FWDRAPPageThumb.prototype = null;
	window.FWDRAPPageThumb = FWDRAPPageThumb;
}(window));