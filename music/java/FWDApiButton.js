/* FWDRAPAPIButton */
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
}(window));