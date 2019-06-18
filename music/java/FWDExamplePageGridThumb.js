/* FWDExamplePageGridThumb */
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
}(window));