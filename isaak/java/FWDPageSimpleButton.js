/* FWDPageSimpleButton */
(function (window){
var FWDPageSimpleButton = function(
		label,
		colorN,
		colorS,
		bkColorN,
		bkColorS
		){
		
		var self = this;
		var prototype = FWDPageSimpleButton.prototype;
		
		this.nImg_img = null;
		this.sImg_img = null;
		
		this.dumy_do = null;
	
		this.label_str = label;
		this.colorN_str = colorN;
		this.colorS_str = colorS;
		this.bkColorN_str = bkColorN;
		this.bkColorS_str = bkColorS;
	
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
			
			self.dumy_do = new FWDEVPDisplayObject("div");
			if(FWDEVPUtils.isIE){
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
		
		this.onMouseOver = function(e){
			if(self.isDisabled_bl) return;
			FWDAnimation.to(self.screen, .8, {css:{color:self.colorS_str, backgroundColor:self.bkColorS_str}, ease:Expo.easeOut});
		};
			
		this.onMouseOut = function(e){
			if(self.isDisabled_bl) return;
			FWDAnimation.to(self.screen, .8, {css:{color:self.colorN_str, backgroundColor:self.bkColorN_str}, ease:Expo.easeOut});
		};
			
		this.onClick = function(e){
			if(self.isDisabled_bl) return;
			self.dispatchEvent(FWDPageSimpleButton.CLICK);
		};
		
		this.disable = function(){
			this.onMouseOver();
			this.dumy_do.setButtonMode(false);
			FWDAnimation.to(self, .8, {alpha:.4, ease:Expo.easeOut});
			this.isDisabled_bl = true;
		}
		
		this.enable = function(){
			this.isDisabled_bl = false;
			this.onMouseOut();
			this.dumy_do.setButtonMode(true);
			FWDAnimation.to(self, .8, {alpha:1, ease:Expo.easeOut});
			
		}
		
	
		self.init();
	};
	
	/* set prototype */
	FWDPageSimpleButton.setPrototype = function(){
		FWDPageSimpleButton.prototype = null;
		FWDPageSimpleButton.prototype = new FWDEVPDisplayObject("div", "relative");
	};
	
	FWDPageSimpleButton.CLICK = "onClick";
	
	FWDPageSimpleButton.prototype = null;
	window.FWDPageSimpleButton = FWDPageSimpleButton;
}(window));