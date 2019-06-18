/* Thumb */
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
}(window));