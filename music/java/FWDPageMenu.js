/* FWDPageMenu */
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
}(window));