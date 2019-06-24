/* FWDPageMenuButton */
(function (){
var FWDPageMenuButton = function(
			label1, 
			label2,
			separatorLinePath,
			button1NormalColor,
			button1SelectedColor,
			button2NormalColor,
			button2SelectedColor,
			disableButton_bl
		){
		
		var self = this;
		var prototype = FWDPageMenuButton.prototype;
		
		this.label1_str = label1;
		this.label2_str = label2;
		this.separatorLinePath_str = separatorLinePath;
		this.button1NormalColor_str = button1NormalColor;
		this.button1SelectedColor_str = button1SelectedColor;
		this.button2NormalColor_str = button2NormalColor;
		this.button2SelectedColor_str = button2SelectedColor;
		if(self.label1_str == "STICKY") this.button1NormalColor_str = "#ffff00";
		this.id;
		this.totalWidth = 400;
		this.totalHeight = 20;
		this.separatorW = 152;
		this.separatorH = 1;
		
		this.separator_do = null;
		this.text1_sdo = null;
		this.text2_sdo = null;
		this.dumy1_sdo = null;
		this.dumy2_sdo = null;
		
		this.finalX;
		this.finalY;
		this.separatorMarginTopAndBottom = 10;
		
		this.isMobile_bl = FWDEVPUtils.isMobile;
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
			
			if(self.label2_str){
				self.separator_do = new FWDEVPDisplayObject("img");
				self.separator_do.screen.src = self.separatorLinePath_str;
				self.separator_do.setWidth(self.separatorW);
				self.separator_do.setHeight(self.separatorH);
			}
		
			self.text1_sdo = new FWDEVPDisplayObject("div");
			self.text1_sdo.setBackfaceVisibility();
			self.text1_sdo.hasTransform2d_bl = false;
			self.text1_sdo.hasTransform3d_bl = false;
			self.text1_sdo.getStyle().whiteSpace= "nowrap";
			self.text1_sdo.getStyle().fontFamily = "myFont, Arial";
			self.text1_sdo.getStyle().fontSize= "20px";
			self.text1_sdo.getStyle().color = self.button1NormalColor_str;
			self.text1_sdo.getStyle().fontSmoothing = "antialiased";
			self.text1_sdo.getStyle().webkitFontSmoothing = "antialiased";
			self.text1_sdo.getStyle().textRendering = "optimizeLegibility";	
			self.text1_sdo.setInnerHTML(self.label1_str);
			
			if(self.label2_str){
				self.text2_sdo = new FWDEVPDisplayObject("div");
				self.text2_sdo.setBackfaceVisibility();
				self.text2_sdo.hasTransform2d_bl = false;
				self.text2_sdo.hasTransform3d_bl = false;
				self.text2_sdo.getStyle().whiteSpace= "nowrap";
				self.text2_sdo.getStyle().fontFamily = "myFont, Arial";
				self.text2_sdo.getStyle().fontSize= "20px";
				self.text2_sdo.getStyle().color = self.button2NormalColor_str;
				self.text2_sdo.getStyle().fontSmoothing = "antialiased";
				self.text2_sdo.getStyle().webkitFontSmoothing = "antialiased";
				self.text2_sdo.getStyle().textRendering = "optimizeLegibility";	
				self.text2_sdo.setInnerHTML(self.label2_str);
			}
		
			self.dumy1_sdo = new FWDEVPDisplayObject("div");
			if(FWDEVPUtils.isIE){
				self.dumy1_sdo.setBkColor("#FF0000");
				self.dumy1_sdo.setAlpha(.01);
			};
				
			self.dumy2_sdo = new FWDEVPDisplayObject("div");
			if(FWDEVPUtils.isIE){
				self.dumy2_sdo.setBkColor("#FF0000");
				self.dumy2_sdo.setAlpha(.01);
			};
			self.dumy1_sdo.setButtonMode(true);
			self.dumy2_sdo.setButtonMode(true);
				
			self.addChild(self.text1_sdo);
			
			if(self.text2_sdo){
				self.addChild(self.text2_sdo);
				self.addChild(self.dumy2_sdo);
			}
			
			self.addChild(self.dumy1_sdo);
			if(self.separator_do) self.addChild(self.separator_do);
			
			
			setTimeout(function(){
				self.centerText();
			}, 300);
			
			if(self.isMobile_bl){
				self.dumy1_sdo.screen.addEventListener("click", self.firstButtonClick);
				self.dumy2_sdo.screen.addEventListener("click", self.secondButtonClick);
			}else if(self.screen.addEventListener){
				self.dumy1_sdo.screen.addEventListener("mouseover", self.firstButtonMouseOver);
				self.dumy1_sdo.screen.addEventListener("mouseout", self.firstButtonMouseOut);
				self.dumy1_sdo.screen.addEventListener("click", self.firstButtonClick);
				self.dumy2_sdo.screen.addEventListener("mouseover", self.secondButtonMouseOver);
				self.dumy2_sdo.screen.addEventListener("mouseout", self.secondButtonMouseOut);
				self.dumy2_sdo.screen.addEventListener("click", self.secondButtonClick);
			}else if(self.screen.attachEvent){
				self.dumy1_sdo.screen.attachEvent("onmouseover", self.firstButtonMouseOver);
				self.dumy1_sdo.screen.attachEvent("onmouseout", self.firstButtonMouseOut);
				self.dumy1_sdo.screen.attachEvent("onclick", self.firstButtonClick);
				self.dumy2_sdo.screen.attachEvent("onmouseover", self.secondButtonMouseOver);
				self.dumy2_sdo.screen.attachEvent("onmouseout", self.secondButtonMouseOut);
				self.dumy2_sdo.screen.attachEvent("onclick", self.secondButtonClick);
			}
		};
		
		self.firstButtonMouseOver = function(animate){
			if(self.isFirstButtonDisabled_bl) return;
			FWDAnimation.killTweensOf(self.text1_sdo);
			if(animate){
				FWDAnimation.to(self.text1_sdo.screen, .5, {css:{color:self.button1SelectedColor_str}, ease:Expo.easeOut});
			}else{
				self.text1_sdo.getStyle().color = self.button1SelectedColor_str;
			}
		};
			
		self.firstButtonMouseOut = function(e){	
			if(self.isFirstButtonDisabled_bl) return;
			FWDAnimation.to(self.text1_sdo.screen, .5, {css:{color:self.button1NormalColor_str}, ease:Expo.easeOut});
		};
		
		self.firstButtonClick = function(e){
			if(self.isFirstButtonDisabled_bl) return;
			if(e.preventDefault) e.preventDefault();
			self.dispatchEvent(FWDPageMenuButton.CLICK, {mainButtonId:self.id, buttonId:0});
		};
		
		self.secondButtonMouseOver = function(animate){
			if(self.isSecondButtonDisabled_bl || !self.text2_sdo) return;
			
			FWDAnimation.killTweensOf(self.text2_sdo);
			if(animate){
				FWDAnimation.to(self.text2_sdo.screen, .5, {css:{color:self.button2SelectedColor_str}, ease:Expo.easeOut});
			}else{
				self.text2_sdo.getStyle().color = self.button2SelectedColor_str;
			}
		};
			
		self.secondButtonMouseOut = function(e){
			if(self.isSecondButtonDisabled_bl || !self.text2_sdo) return;
			FWDAnimation.to(self.text2_sdo.screen, .5, {css:{color:self.button2NormalColor_str}, ease:Expo.easeOut});
		};
		
		self.secondButtonClick = function(e){		
			if(self.isSecondButtonDisabled_bl) return;
			if(e.preventDefault) e.preventDefault();
			self.dispatchEvent(FWDPageMenuButton.CLICK, {mainButtonId:self.id, buttonId:1});
		};
		
		//##############################//
		/* set selected state */
		//##############################//
		self.disable = function(id){
			if(id == 0){
				self.isFirstButtonDisabled_bl = true;
				self.isSecondButtonDisabled_bl = false;
				self.dumy1_sdo.setButtonMode(false);
				self.dumy2_sdo.setButtonMode(true);
				self.text1_sdo.getStyle().color = self.button1SelectedColor_str;
				if(self.text2_sdo) self.text2_sdo.getStyle().color = self.button2NormalColor_str;
			}else{
				self.isSecondButtonDisabled_bl = true;
				self.isFirstButtonDisabled_bl = false;
				self.dumy1_sdo.setButtonMode(true);
				self.dumy2_sdo.setButtonMode(false);
				self.text1_sdo.getStyle().color = self.button1NormalColor_str;
				if(self.text2_sdo) self.text2_sdo.getStyle().color = self.button2SelectedColor_str;
			}
			
		};		
		
		self.enable = function(id){
			self.isFirstButtonDisabled_bl = false;
			self.isSecondButtonDisabled_bl = false;
			self.dumy1_sdo.setButtonMode(true);
			self.dumy2_sdo.setButtonMode(true);
			self.text1_sdo.getStyle().color = self.button1NormalColor_str;
			if(self.text2_sdo) self.text2_sdo.getStyle().color = self.button2NormalColor_str;
		};		

		//##########################################//
		/* center text */
		//##########################################//
		self.centerText = function(){
			var maxWidth = 0;
			var textHeight = self.text1_sdo.getHeight();
			var text1Width = self.text1_sdo.getWidth();
			var text2Width = 0;
			if(self.text2_sdo) text2Width = self.text2_sdo.getWidth();
			
			
			if(maxWidth < text1Width){
				maxWidth = text1Width;
			}
			
			if(maxWidth < text2Width){
				maxWidth = text2Width;
			}
			
			self.totalWidth = maxWidth;
			
			if(self.separator_do){
				self.totalHeight = textHeight * 2 + self.separator_do.h + self.separatorMarginTopAndBottom * 2;
			}else{
				self.totalHeight = textHeight;
			}
			
		
			self.text1_sdo.setX(parseInt(self.totalWidth - text1Width)/2);
			self.dumy1_sdo.setX(self.text1_sdo.x);
			self.dumy1_sdo.setWidth(text1Width);
			self.dumy1_sdo.setHeight(textHeight);
			
			if(self.separator_do){
				self.separator_do.setX(parseInt(self.totalWidth - self.separator_do.w)/2);
				self.separator_do.setY(textHeight + self.separatorMarginTopAndBottom);
			}
			
			if(self.text2_sdo){
				self.text2_sdo.setX(parseInt(self.totalWidth - text2Width)/2);
				if(self.separator_do){
					self.text2_sdo.setY(self.separator_do.y + self.separatorMarginTopAndBottom);
				}else{
					self.text2_sdo.setY(self.separatorMarginTopAndBottom);
				}
				self.dumy2_sdo.setY(self.text2_sdo.y);
				self.dumy2_sdo.setWidth(text2Width);
				self.dumy2_sdo.setHeight(textHeight);
			}
			
			self.setWidth(self.totalWidth);
			self.setHeight(self.totalHeight);
		};
		
		self.init();
	};
	
	/* set prototype */
	FWDPageMenuButton.setPrototype = function(){
		FWDPageMenuButton.prototype = new FWDEVPDisplayObject("div");
	};
	
	FWDPageMenuButton.CLICK = "firstButtonClick";
	
	FWDPageMenuButton.prototype = null;
	window.FWDPageMenuButton = FWDPageMenuButton;
}(window));