/* FWDPageMenuButton */
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
}(window));