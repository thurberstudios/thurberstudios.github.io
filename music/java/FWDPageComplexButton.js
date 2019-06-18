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
}(window));