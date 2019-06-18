/* FWDExamplePageGrid */
(function (window){
var FWDExamplePageGrid = function(props_obj){
		
		var self = this;
		var prototype = FWDExamplePageGrid.prototype;
		
		this.image_img = null;
		this.mainContainer = props_obj.mainContainer;
		
		this.thumbs_ar = [];
		
		this.paths_ar = [
		       ["graphics/1.jpg", "graphics/1d.jpg"],
		       ["graphics/2.jpg", "graphics/2d.jpg"],
		       ["graphics/3.jpg", "graphics/3d.jpg"],
		       ["graphics/4.jpg", "graphics/4d.jpg"],
		       ["graphics/5.jpg", "graphics/5d.jpg"],
		       ["graphics/6.jpg", "graphics/6d.jpg"],
		       ["graphics/7.jpg", "graphics/7d.jpg"],
		       ["graphics/8.jpg", "graphics/8d.jpg"],
		       ["graphics/9.jpg", "graphics/9d.jpg"],
		       ["graphics/10.jpg", "graphics/10d.jpg"],
		       ["graphics/11.jpg", "graphics/11d.jpg"],
		       ["graphics/12.jpg", "graphics/12d.jpg"]
		    ];
		
		this.disableId = props_obj.disableId;
		this.mouseX = 0;
		this.mouseY = 0;
		this.dif = 0;
		this.tempId = 0;
		this.stageWidth = 0;
		this.stageHeight = 0;
		this.thumbW = 0;
		this.thumbH = 0;
		this.stageWidth = 0;
		this.stageHeight = 0;
		this.thumbnailMaxWidth = 225;
		this.thumbnailMaxHeight = 191;
		this.spacerH = 20;
		this.spacerV = 19;
		this.howManyThumbsToDisplayH = 0;
		this.howManyThumbsToDisplayV = 0;
		this.totalThumbnails = this.paths_ar.length;
		this.delayRate = .06;
		this.countLoadedThumbs = 0;
		
		this.examplesThumbsBkColor_str = props_obj.examplesThumbsBkColor;
		
		this.hideCompleteId_to;
		this.showCompleteId_to;
		this.loadThumbnailsId_to;
		
	
		//##########################################//
		/* initialize self */
		//##########################################//
		self.init = function(){
			self.setOverflow("visible");
			self.mainContainer.style.height = "0px";
			self.mainContainer.style.overflow = "visible";
			self.setupThumbs();
			setTimeout(self.loadImages, 400);
		};
		
		//###########################################//
		/* resize and position */
		//##########################################//
		this.positionAndResize = function(w){
			self.stageWidth = w;
			self.positonThumbs();
			self.setWidth(self.stageWidth);
			self.setHeight(self.stageHeight);
			self.mainContainer.style.width = self.stageWidth + "px";
			self.mainContainer.style.height = self.stageHeight + "px";
		};
		
		//##########################################//
		/* setup buttons */
		//##########################################//
		this.setupThumbs = function(){
			var thumb;
			for(var i=0; i<self.totalThumbnails; i++){
				FWDExamplePageGridThumb.setPrototype();
				thumb = new FWDExamplePageGridThumb(
						i,
						self.examplesThumbsBkColor_str);
				
				thumb.addListener(FWDExamplePageGridThumb.CLICK, self.thumbnailOnClickHandler);
				self.thumbs_ar[i] = thumb;
				self.addChild(thumb);
			}
		};
		
		this.thumbnailOnClickHandler = function(e){
			self.dispatchEvent(FWDExamplePageGrid.CLICK, {id:e.id});
		};
		
		
		//#############################################//
		/* load images */
		//#############################################//
		this.loadImages = function(){
			if(self.countLoadedThumbs > self.totalThumbnails-1) return;
			
			if(self.image_img){
				self.image_img.onload = null;
				self.image_img.onerror = null;
			}
			
			self.image_img = new Image();
			self.image_img.onerror = self.onImageLoadError;
			self.image_img.onload = self.onImageLoadComplete;
			
			if(self.countLoadedThumbs == self.disableId){
				self.image_img.src = self.paths_ar[self.countLoadedThumbs][1];
			}else{
				self.image_img.src = self.paths_ar[self.countLoadedThumbs][0];
			}
			
		};
		
		this.onImageLoadError = function(e){};
		
		this.onImageLoadComplete = function(e){
			var thumb = self.thumbs_ar[self.countLoadedThumbs];
			thumb.setImage(self.image_img, "graphics/over.png");
			self.countLoadedThumbs++;
			self.loadWithDelayId_to = setTimeout(self.loadImages, 40);	
		};
		
		//###################################################//
		/* position buttons */
		//###################################################//
		this.positonThumbs = function(){
			var thumb;
			var totalWidth;
			var curSet;
			var tempSet;
			var newX;
			var newY;
			var totalWidth;
			var totalHeight;
			var remainWidthSpace;
			var firsId;
			var lastId;
			var addToX;
			var currentLeftColId;
			var availableThumbsPerSection;
			
			this.remainWidthSpace = (self.stageWidth - totalWidth);
			
			var widthToResize = self.stageWidth;
			var heightToResize = self.stageHeight;
			
			self.howManyThumbsToDisplayH = Math.ceil((widthToResize - self.spacerH)/(self.thumbnailMaxWidth + self.spacerH));
			self.thumbW = Math.ceil(((widthToResize - self.spacerH * (self.howManyThumbsToDisplayH - 1)))/self.howManyThumbsToDisplayH);
			if(self.thumbW > self.thumbnailMaxWidth){
				self.howManyThumbsToDisplayH += 1;
				self.thumbW = Math.ceil(((widthToResize - self.spacerH * (self.howManyThumbsToDisplayH - 1)))/self.howManyThumbsToDisplayH);
			}
			
			self.thumbH = Math.floor((self.thumbW/self.thumbnailMaxWidth) * self.thumbnailMaxHeight);
		
			self.howManyThumbsToDisplayV = Math.ceil(self.totalThumbnails/self.howManyThumbsToDisplayH);
			if(self.howManyThumbsToDisplayV < 1) self.howManyThumbsToDisplayV = 1;
			
			totalWidth = (Math.min(self.howManyThumbsToDisplayH, self.totalThumbnails) * (self.thumbW + self.spacerH)) - self.spacerH;
			totalHeight = Math.min(Math.ceil(self.totalThumbnails/self.howManyThumbsToDisplayH), self.howManyThumbsToDisplayV) * (self.thumbH + self.spacerV) - self.spacerV;
			
			if(self.howManyThumbsToDisplayH > self.totalThumbnails){
				remainWidthSpace = 0;
			}else{
				remainWidthSpace = (widthToResize - totalWidth);
			}
			
			if(self.howManyThumbsToDisplayH > self.totalThumbnails) self.howManyThumbsToDisplayH = self.totalThumbnails;
			availableThumbsPerSection = (self.howManyThumbsToDisplayH * self.howManyThumbsToDisplayV);
		
			curSet = Math.floor(self.tempId / availableThumbsPerSection);
			currentLeftColId = self.howManyThumbsToDisplayH * curSet;
			
			firstId = curSet * availableThumbsPerSection;
			
			lastId = firstId + availableThumbsPerSection;
			if(lastId > self.totalThumbnails)  lastId = self.totalThumbnails;
			
			for (var i = 0; i<self.totalThumbnails; i++) {
				
				thumb = self.thumbs_ar[i];
				
				thumb.finalW = self.thumbW;
				if(i % self.howManyThumbsToDisplayH == self.howManyThumbsToDisplayH - 1) thumb.finalW += remainWidthSpace;
				thumb.finalH = self.thumbH;
				
				thumb.finalX = (i % self.howManyThumbsToDisplayH) * (self.thumbW + self.spacerH);
				thumb.finalX += Math.floor((i / availableThumbsPerSection)) * self.howManyThumbsToDisplayH * (self.thumbW + self.spacerH);
				thumb.finalX += (self.stageWidth - totalWidth)/2;
				thumb.finalX = Math.floor(thumb.finalX - currentLeftColId * (self.thumbW + self.spacerH));
				
				thumb.finalY = i % availableThumbsPerSection;
				thumb.finalY = Math.floor((thumb.finalY / self.howManyThumbsToDisplayH)) * (self.thumbH + self.spacerV);
				//thumb.finalY += (heightToResize - totalHeight)/2;
				thumb.finalY = Math.floor(thumb.finalY);
				
				thumb.resizeAndPosition();
				
			}
			self.stageHeight = (self.howManyThumbsToDisplayV * (self.thumbH  + self.spacerV)) - self.spacerV + 1;
		};
		
		this.disableAllPlayPauseButton = function(){
			for (var i = 0; i<self.totalThumbnails; i++) {
				self.thumbs_ar[i].disablePlayPauseButton();
			}
		};
		
		this.disableThumbnails = function(id){
			for (var i = 0; i<self.totalThumbnails; i++) {
				if(i == id) self.thumbs_ar[i].disable();
			}
		};
	
	
		self.init();
	};
	
	/* set prototype */
	FWDExamplePageGrid.setPrototype = function(){
		FWDExamplePageGrid.prototype = new FWDRLDisplayObject("div");
	};
	
	FWDExamplePageGrid.CLICK = "onClick";

	FWDExamplePageGrid.prototype = null;
	window.FWDExamplePageGrid = FWDExamplePageGrid;
}(window));