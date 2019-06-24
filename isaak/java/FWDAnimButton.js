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
		this.isMobile_bl = FWDEVPUtils.isMobile;
		this.hasPointerEvent_bl = FWDEVPUtils.hasPointerEvent;
		
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
		
			self.image_do = new FWDEVPDisplayObject("img");
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
    	FWDAnimButton.prototype = new FWDEVPDisplayObject("div");
    };
    
    FWDAnimButton.HIDE_COMPLETE = "hideComplete";
	FWDAnimButton.GO_FWD_COMPLETE = "fwdComplete";
	FWDAnimButton.GO_BACK_COMPLETE = "backComplete";
	FWDAnimButton.GO_FWD = "goForward";
	FWDAnimButton.LOAD_COMPLETE = "loadComplete";
	FWDAnimButton.CLICK = "clickHandler";
    
    FWDAnimButton.prototype = null;
	window.FWDAnimButton = FWDAnimButton;
}(window));