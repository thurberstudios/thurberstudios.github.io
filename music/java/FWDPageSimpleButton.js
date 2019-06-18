/* FWDPageSimpleButton */
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
}(window));