
(function (window){

	var AWPUtils = function(){};

	AWPUtils.test = document.createElement("div");

	/* array */
	AWPUtils.randomiseArray = function(num) {
		var arr = [], randomArr = [], i, j, randomIndex;
		for(i = 0; i < num; i++){
			arr[i] = i;
		}
		for(j = 0; j < num; j++){
			randomIndex = Math.round(Math.random()*(arr.length-1));
			randomArr[j] = arr[randomIndex];
			arr.splice(randomIndex, 1);
		}
		return randomArr;
	}
	AWPUtils.sortArray = function(arr, sortArr) {
		var i, len = arr.length, result = [];
		for(i=0; i<len; i++) {
		   result[i] = arr[sortArr[i]];
		}
		return result;
	}
	AWPUtils.keysrt = function(arr, key, reverse) {
		var sortOrder = 1;
		if(reverse)sortOrder = -1;
		return arr.sort(function(a, b) {
			var x = a[key]; var y = b[key];
			return sortOrder * ((x < y) ? -1 : ((x > y) ? 1 : 0));
		});
	}	
	AWPUtils.keysrt2 = function(arr, prop, key, reverse) {
	    var sortOrder = 1;
	    if(reverse)sortOrder = -1;
	    return arr.sort(function(a, b) {
	        var x = a[prop][key]; var y = b[prop][key];
	        return sortOrder * ((x < y) ? -1 : ((x > y) ? 1 : 0));
	    });
	}  
	


	/* string */
	AWPUtils.isEmpty = function(str) {
		return str.replace(/^\s+|\s+$/g, '').length == 0;
	}
	AWPUtils.checkKey = function(value) {
	    return value.replace(/[^0-9a-zA-Z_-\s(),]/g, "");
	}  
	AWPUtils.stripSlashes = function(str) {
		str=str.replace(/\\/g,'/');
		str=str.replace(/\\'/g,'\'');
		str=str.replace(/\\"/g,'"');
		str=str.replace(/\\0/g,'\0');
		str=str.replace(/\\\\/g,'\\');
		return str;
	}	
	AWPUtils.filterAllowedChars = function(str) {
		var allowedChars = "_-", n = str.length, returnStr = "", i, _char, z;
		for (i=0; i < n; i++) {
			_char = str.charAt(i).toLowerCase(); 
			if (_char == "\\") _char = "/";
			z = getCharCode(_char);			
			if ((z >= getCharCode("a") && z <= getCharCode("z")) || (z >= getCharCode("0") && z <= getCharCode("9")) || allowedChars.indexOf(_char) >= 0) {
				returnStr += _char;
			}
		}
		return returnStr;
	}
	function getCharCode(s) {
		return s.charCodeAt(0);
	}
		
	AWPUtils.selectText = function(element) {
		var doc = document, text = doc.getElementById(element), range, selection;    
		if (doc.body.createTextRange) { //ms
			range = doc.body.createTextRange();
			range.moveToElementText(text);
			range.select();
		} else if (window.getSelection) { //all others
			selection = window.getSelection();        
			range = doc.createRange();
			range.selectNodeContents(text);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}


	
	/* media */
	AWPUtils.getVideoFormat = function(){
		var video = document.createElement("video");
		if(!video.canPlayType) return;
		var ext;
		if(video.canPlayType("video/mp4") == "probably" || video.canPlayType("video/mp4") == "maybe"){
			ext = ".mp4";
		}else if(video.canPlayType("video/ogg") == "probably" || video.canPlayType("video/ogg") == "maybe"){
			ext = ".ogg";
		}else if(video.canPlayType("video/webm") == "probably" || video.canPlayType("video/webm") == "maybe"){
			ext = ".webm";
		}
		video = null;
		return ext;
	};
	AWPUtils.videoSupport = function() {
		return Boolean(document.createElement('video').canPlayType);
	}
	AWPUtils.canPlayVorbis = function() {
		var v = document.createElement('video');
		return !!(v.canPlayType && v.canPlayType('video/ogg; codecs="theora, vorbis"').replace(/no/, ''));
	}
	AWPUtils.canPlayMp4 = function() {
		var v = document.createElement('video');
		return !!(v.canPlayType && v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, ''));
	}
	AWPUtils.canPlayWebM = function() {
		var v = document.createElement('video');
		return !!(v.canPlayType && v.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, ''));
	}
	AWPUtils.audioSupport = function() {
		return Boolean(document.createElement('audio').canPlayType);
	}
	AWPUtils.canPlayMp3 = function() {
		var a = document.createElement('audio');
		return !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
	}
	AWPUtils.canPlayWav = function() {
		var a = document.createElement('audio');
		return !!(a.canPlayType && a.canPlayType('audio/wav;').replace(/no/, ''));
	}
	AWPUtils.canPlayOgg = function() {
		var a = document.createElement('audio');
		return !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
	}
	AWPUtils.volumeCanBeSet = function() {
		var audio = document.createElement("audio");
		if(!audio) return false;
		audio.volume = 0;
		return audio.volume == 0 ? true : false;
	};


	
	/* platform */
	AWPUtils.hasPointerEvent = function(){
		return Boolean(window.navigator.msPointerEnabled);
	};
	AWPUtils.isMobile = function() {
		if(AWPUtils.hasPointerEvent && navigator.msMaxTouchPoints > 1) return true;
		return (/Android|webOS|iPhone|iPad|iPod|sony|BlackBerry/i.test(navigator.userAgent));
	}
	AWPUtils.isMac = function(){
		return Boolean(navigator.appVersion.toLowerCase().indexOf('mac') != -1);
	};
	AWPUtils.isWin = function(){
		return Boolean(navigator.appVersion.toLowerCase().indexOf('win') != -1);
	};
	AWPUtils.isIOS = function(){
		return navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
	};
	AWPUtils.isAndroid = function() {
		var agent = navigator.userAgent;
		return agent.indexOf("Android") > -1;
	}
	AWPUtils.isiPad = function(){
		var agent = navigator.userAgent;
		return agent.indexOf('iPad') > -1;
	}
	AWPUtils.isiPhoneIpod = function() {
		var agent = navigator.userAgent;
		return agent.indexOf('iPhone') > -1 || agent.indexOf('iPod') > -1;
	}
	AWPUtils.isSafari = function() {
		return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	}
	AWPUtils.isChrome = function() {
		var agent = navigator.userAgent,
		isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0, 
		isChrome = !isSafari && 'WebkitTransform' in document.documentElement.style,
		isIOS = agent.indexOf('iPhone') > -1 || agent.indexOf('iPod') > -1 || agent.indexOf('iPad') > -1;
		if(isIOS && agent.match('CriOS'))isChrome = true;
		return isChrome;
	}
	AWPUtils.isOpera = function() {
		return !!(window.opera && window.opera.version);
	}
	AWPUtils.isIE = function() {
  		var ua = window.navigator.userAgent;

	    var msie = ua.indexOf('MSIE ');
	    if (msie > 0) {
		    // IE 10 or older => return version number
		    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	    }

	    var trident = ua.indexOf('Trident/');
	    if (trident > 0) {
		    // IE 11 => return version number
		    var rv = ua.indexOf('rv:');
		    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	    }

	    var edge = ua.indexOf('Edge/');
	    if (edge > 0) {
		    // Edge (IE 12+) => return version number
		    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	    }

	    // other browser
	    return false;
	}



	/* */
	AWPUtils.parseXML = function(xml) {
		if(window.ActiveXObject && window.GetObject) {
			var dom = new ActiveXObject('Microsoft.XMLDOM');
			dom.loadXML(xml);
			return dom;
		}
		if(window.DOMParser){
			return new DOMParser().parseFromString(xml, 'text/xml');
		}else{
			throw new Error('No XML parser available');
		}
	}
	AWPUtils.baseUrl = function() {
		return window.location.href.replace(window.location.hash,"");
	}
	AWPUtils.protocol = function() {
		return window.location.protocol;
	}
	AWPUtils.qualifyURL = function(url) {
		var a = document.createElement('a');
		a.href = url;
		return a.href;
	}
	AWPUtils.hasLocalStorage = function() {
	  try {
		return 'localStorage' in window && window['localStorage'] !== null;
	  } catch(e){
		return false;
	  }
	}
	AWPUtils.validateEmail = function(mail){  
		var reg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(reg.test(mail)){  
			return true;  
		}  
		return false;  
    }; 
    AWPUtils.hasDownloadSupport = function(mail){  
		return ("download" in document.createElement("a"));
    }; 
    AWPUtils.relativePath = function(s){
    	//https://stackoverflow.com/questions/10687099/how-to-test-if-a-url-string-is-absolute-or-relative
		var r = new RegExp('^(?:[a-z]+:)?//', 'i');
		return r.test(s);
	}
	

	/* */
	AWPUtils.getScrollOffsets = function(){
		//all browsers
		if(window.pageXOffset != null) return{x:window.pageXOffset, y:window.pageYOffset};
		//ie7/ie8
		if(document.compatMode == "CSS1Compat"){
			return({x:document.documentElement.scrollLeft, y:document.documentElement.scrollTop});
		}
	};
	AWPUtils.getViewportSize = function(){
		if(AWPUtils.hasPointerEvent && navigator.msMaxTouchPoints > 1){
			return {w:document.documentElement.clientWidth || window.innerWidth, h:document.documentElement.clientHeight || window.innerHeight};
		}
		if(AWPUtils.isMobile) return {w:window.innerWidth, h:window.innerHeight};
		return {w:document.documentElement.clientWidth || window.innerWidth, h:document.documentElement.clientHeight || window.innerHeight};
	};
	AWPUtils.getViewportMouseCoordinates = function(e){
		var offsets = AWPUtils.getScrollOffsets();
		if(e.touches){
			return{
				screenX:e.touches[0] == undefined ? e.touches.pageX - offsets.x :e.touches[0].pageX - offsets.x,
				screenY:e.touches[0] == undefined ? e.touches.pageY - offsets.y :e.touches[0].pageY - offsets.y
			};
		}
		return{
			screenX: e.clientX == undefined ? e.pageX - offsets.x : e.clientX,
			screenY: e.clientY == undefined ? e.pageY - offsets.y : e.clientY
		};
	};
	AWPUtils.supportCalc = function () {
		return checkCalc('-webkit-') || checkCalc('-moz-') || checkCalc();
	};
	checkCalc = function (prefix) {
		prefix = prefix || '';
		var el = document.createElement('div');
		el.style.cssText = prefix + 'width: calc(1px);';
		return !!el.style.length;
	};
	AWPUtils.supportsTransitions = function() {
		var s = document.createElement('p').style;
		return 'transition' in s ||
			   'WebkitTransition' in s ||
			   'MozTransition' in s ||
			   'msTransition' in s ||
			   'OTransition' in s;
	}
	AWPUtils.hasCanvas = function(){
		return Boolean(document.createElement("canvas"));
	};
	AWPUtils.hasFullscreen = function(){
		return AWPUtils.test.requestFullscreen || AWPUtils.test.mozRequestFullScreen || AWPUtils.test.msRequestFullscreen || AWPUtils.test.oRequestFullscreen || AWPUtils.test.webkitRequestFullScreen;
	};
	AWPUtils.preventSelect = function (arr) {
		jQuery(arr).each(function() {           
		   jQuery(this).attr('unselectable', 'on')
		   .css({
			   '-moz-user-select':'none',
			   '-webkit-user-select':'none',
			   'user-select':'none'
		   })
		   .each(function() {
			   this.onselectstart = function() { return false; };
		   });
		});
	}	
	AWPUtils.disableSelection = function(e){
		try{e.style.userSelect = "none";}catch(e){};
		try{e.style.MozUserSelect = "none";}catch(e){};
		try{e.style.webkitUserSelect = "none";}catch(e){};
		try{e.style.khtmlUserSelect = "none";}catch(e){};
		try{e.style.oUserSelect = "none";}catch(e){};
		try{e.style.msUserSelect = "none";}catch(e){};
		try{e.msUserSelect = "none";}catch(e){};
		e.onselectstart = function(){return false;};
	}
	
	/* number */ 
	AWPUtils.counter = function(i) {
		var s;
		if(i < 9)s = "0" + (i + 1);
		else s = i + 1;
		return s;
	}
	AWPUtils.isNumber = function(n){
	   return !isNaN(parseFloat(n)) && isFinite(n);
	}
	/**
	 * Returns a random integer between min (inclusive) and max (inclusive)
	 */
	AWPUtils.getRandomInt = function(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	AWPUtils.formatCurrentTime = function (seconds) {
		seconds = Math.round(seconds);
		minutes = Math.floor(seconds / 60);
		minutes = (minutes >= 10) ? minutes : "" + minutes;
		seconds = Math.floor(seconds % 60);
		seconds = (seconds >= 10) ? seconds : "0" + seconds;
		return minutes + ":" + seconds;
	}	
	AWPUtils.formatDuration = function (seconds) {
		seconds = Math.round(seconds);
		minutes = Math.floor(seconds / 60);
		minutes = (minutes >= 10) ? minutes : "" + minutes;
		seconds = Math.floor(seconds % 60);
		seconds = (seconds >= 10) ? seconds : "0" + seconds;
		return minutes + ":" + seconds;
	}	
	AWPUtils.hmsToSecondsOnly = function (str) {
		var p = str.split(':'),
			s = 0, m = 1;
		while (p.length > 0) {
			s += m * parseInt(p.pop());
			m *= 60;
		}
		return s;
	}

	AWPUtils.checkBoolean = function (value){
		if(typeof value === 'string'){
			switch(value.toLowerCase()){
				case "true": case "yes": case "1": return true;
				case "false": case "no": case "0": case null: return false;
				default: return Boolean(value);
			}
		}else if(typeof value === 'boolean'){
			return Boolean(value);
		}
	}

	window.AWPUtils = AWPUtils;
}(window));

(function (window, $){
	"use strict"
	var AWPTooltip = function (data){
		/* if tooltip position is wrong, make sure tooltip parent has css position set! */
				
		var self = this,
		_body = $('body'),
		_doc = $(document),
		_window = $(window),
		parent = data.parent,
		disabled = false,
		tooltip;

		this.setData = function(){

			if(parent.find('.awp-tooltip').length > 0)tooltip = parent.find('.awp-tooltip');
			else tooltip = $('<div class="awp-tooltip"><p class="awp-tooltip-inner"></p></div>').appendTo(parent).hide();

		}
		this.show = function(){
			
		}
		this.hide = function(){
			tooltip.hide();
		}
		this.seekbar = function(e, elem, value, dur){
			if(disabled)return false;

			tooltip.addClass('awp-tooltip-num').find('p').text(AWPUtils.formatCurrentTime(value)+' / '+AWPUtils.formatDuration(dur));

			var pol = parent.offset().left, 
				pot = parent.offset().top,
				eol = elem.offset().left, 
				eot = elem.offset().top,
				ew = elem.outerWidth(),
				eh = elem.outerHeight(),
				tw = tooltip.outerWidth(), 
				th = tooltip.outerHeight(), 
				ww = _window.width(), 
				wh = _window.height(), 
				wsl = _window.scrollLeft(), 
				wst = _window.scrollTop(),
				px = e.pageX, 
				py = e.pageY,
				x = px-pol, 
				y = py-pot,
				l,t;

			if(elem.hasClass('awp-tooltip-top')){

				l = x - tw/2, t = eot - pot - th;

			}
			else if(elem.hasClass('awp-tooltip-bottom')){

				l = x - tw/2, t = eot - pot + eh + 15;

			}

			if(l + tw + pol - wsl > ww){
				l = px - pol - tw;
			}
			if(l + pol - wsl < 0){
				l = px - pol;
			}
			if(l + tw + pol - wsl > ww){
				l = ww - tw - pol + wsl;
			}
				
			tooltip.css({
				left:parseInt(l,10)+'px',
				top:parseInt(t,10)+'px'
			}).show();
			
		}
		this.circle = function(e, elem, value, dur){
			if(disabled)return false;
			
			tooltip.addClass('awp-tooltip-num').find('p').text(AWPUtils.formatCurrentTime(value)+' / '+AWPUtils.formatDuration(dur));

			var pol = parent.offset().left, 
				pot = parent.offset().top,
				eol = elem.offset().left, 
				eot = elem.offset().top, 
				ew = elem.outerWidth(),
				eh = elem.outerHeight(),
				tw = tooltip.outerWidth(), 
				th = tooltip.outerHeight(), 
				l,t;

			if(elem.hasClass('awp-tooltip-top')){

				l = eol - pol + ew/2 - tw/2, t = eot - pot - th - 10;

			}
				
			tooltip.css({
				left:parseInt(l,10)+'px',
				top:parseInt(t,10)+'px'
			}).show();
			
		}
		this.volume = function(e, elem, value){
			if(disabled)return false;
			
			tooltip.addClass('awp-tooltip-num').find('p').text(value+' %');

			var pol = parent.offset().left, 
				pot = parent.offset().top,
				eol = elem.offset().left, 
				eot = elem.offset().top,
				ew = elem.outerWidth(),
				eh = elem.outerHeight(),
				tw = tooltip.outerWidth(), 
				th = tooltip.outerHeight(), 
				px = e.pageX, 
				py = e.pageY,
				x = px-pol, 
				y = py-pot,
				l,t;

			if(elem.hasClass('awp-tooltip-top')){

				if(elem.hasClass('awp-vertical')){
					l = eol - pol + ew/2 - tw/2, t = y - th - 10;
				}else{
					l = x - tw/2, t = eot - pot - th;
				}

			}
			else if(elem.hasClass('awp-tooltip-bottom')){

				if(elem.hasClass('awp-vertical')){
					l = eol - pol + ew/2 - tw/2, t = y + th + 10;
				}else{
					l = x - tw/2, t = eot - pot + eh + 10;
				}

			}
			else if(elem.hasClass('awp-tooltip-left')){

				if(elem.hasClass('awp-vertical')){
					l = eol - pol - tw - 5, t = y - th/2;
				}else{
					
				}

			}

			tooltip.css({
				left:parseInt(l,10)+'px',
				top:parseInt(t,10)+'px'
			}).show();
			
		}
		this.controls = function(elem, value){
			if(disabled)return false;
			
			tooltip.removeClass('awp-tooltip-num').find('p').text(value);
			
			var pol = parent.offset().left, 
				pot = parent.offset().top,
				eol = elem.offset().left, 
				eot = elem.offset().top, 
				ew = elem.outerWidth(),
				eh = elem.outerHeight(),
				tw = tooltip.outerWidth(), 
				th = tooltip.outerHeight(),
				l,t;

			if(elem.hasClass('awp-tooltip-top')){

				l = eol - pol + ew/2 - tw/2,
				t = eot - pot - th;
				
			}
			else if(elem.hasClass('awp-tooltip-top-right')){

				l = eol - pol,
				t = eot - pot - th;

			}
			else if(elem.hasClass('awp-tooltip-top-left')){

				l = eol - pol + ew - tw,
				t = eot - pot - th;
				
			}
			else if(elem.hasClass('awp-tooltip-right')){

				l = eol - pol + ew + 10,
				t = eot - pot + eh/2 - th/2;

			}
			else if(elem.hasClass('awp-tooltip-bottom')){

				l = eol - pol + ew/2 - tw/2,
				t = eot - pot + eh + 10;
			
			}
			else if(elem.hasClass('awp-tooltip-bottom-left')){

				l = eol - pol + ew - tw,
				t = eot - pot + eh + 10;
			
			}
			else if(elem.hasClass('awp-tooltip-left')){
				
				l = eol - pol - 10 - tw,
				t = eot - pot + eh/2 - th/2;
				
			}
			else{//default top 

				l = eol - pol + ew/2 - tw/2,
				t = eot - pot - th;
				
			}
			
			tooltip.css({
				left:parseInt(l,10)+'px',
				top:parseInt(t,10)+'px'
			}).show();
		}

		this.setValue = function(value){
			tooltip.find('p').text(value);
		}

		this.setState = function(v){
			disabled = v;
		}
		
		this.setData();
	
	};
	
	window.AWPTooltip = AWPTooltip;	

}(window,jQuery));

(function (window, $){
	"use strict"
	var AWPTouchManager = function (data){
				
		var self = this,
		_body = $('body'),
		_doc = $(document),
		_window = $(window),
		isMobile = AWPUtils.isMobile(),
		activeElem,
		drag = false,
		downEvent,
		moveEvent,
		upEvent,
		isChrome = AWPUtils.isChrome(),//https://bugs.chromium.org/p/chromium/issues/detail?id=161464
		currentPos=[];

		this.setData = function(){

			//if('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)
			if("ontouchstart" in window){
				downEvent = "touchstart.ap mousedown.ap";
				moveEvent = "touchmove.ap mousemove.ap";
				upEvent = "touchend.ap mouseup.ap";
			}else{
				if(window.PointerEvent){
					downEvent = "pointerdown.ap";
					moveEvent = "pointermove.ap";
					upEvent = "pointerup.ap";
				}else{
					downEvent = "mousedown.ap";
					moveEvent = "mousemove.ap";
					upEvent = "mouseup.ap";
				}
			}
			
			var i, len = data.length;
			for(i = 0; i < len; i++){
				data[i].on(downEvent,function(e){
					e.preventDefault();

					if(drag) return false;
					activeElem = $(this);
					onDragStart(e);
					return false;		
				});
			}
			
			if(!isMobile){
		
				for(i = 0; i < len; i++){

					data[i].on('mouseenter',function(e){
					
						if(drag) return false;

						activeElem = $(this).on('mouseleave', mouseLeaveHandler);
						if(activeElem.data('apmove'))activeElem.on('mousemove', mouseMoveHandler);
						_doc.on('mouseleave', mouseLeaveHandlerDoc);
						
						$(self).trigger('AWPTouchManager.MOUSE_ENTER', {elem:activeElem, e:e});
							
					});
				}
			}
		}
		
		function mouseMoveHandler(e){
			
			if(drag) return;
			
			$(self).trigger('AWPTouchManager.MOUSE_MOVE', {elem:$(e.currentTarget), e:e});
			
		}
		
		function mouseLeaveHandler(e){
			
			if(drag) return;

			$(e.currentTarget).off('mousemove', mouseMoveHandler).off('mouseleave', mouseLeaveHandler);
			_doc.off('mouseleave', mouseLeaveHandlerDoc);
			
			$(self).trigger('AWPTouchManager.MOUSE_LEAVE', {elem:$(e.currentTarget), e:e});
			
		}
		
		function mouseLeaveHandlerDoc(e){

			$(e.currentTarget).off('mousemove', mouseMoveHandler).off('mouseleave', mouseLeaveHandler);
			_doc.off('mouseleave', mouseLeaveHandlerDoc);
			
			$(self).trigger('AWPTouchManager.MOUSE_LEAVE', {elem:$(e.currentTarget), e:e});
			
		}

		function onDragStart(e) {

			if(isChrome)currentPos=[e.pageX,e.pageY];

			if(!drag){					
				var point;
				if(e.type == 'touchstart'){
					var currTouches = e.originalEvent.touches;
					
					if(currTouches && currTouches.length > 0) {
						point = currTouches[0];
					}else{	
						return false;						
					}
				}else{
					point = e.originalEvent;								
					e.preventDefault();						
				}
			
				drag = true;
				_doc.on(moveEvent, function(e) { onDragMove(e); }).on(upEvent, function(e) { onDragRelease(e); });	
				activeElem.on(upEvent, function(e) { onDragRelease(e); });//detect touchend in mcustomscrollbar fix (_doc above wasnt detected)
				
				$(self).trigger('AWPTouchManager.DRAG_START', {elem:activeElem, point:point, e:e});		
			}
			return false;	
		}
					
		function onDragMove(e) {	

			if(isChrome)if(e.pageX===currentPos[0] && e.pageY ===currentPos[1])return;

			var point;
		
			if(e.type == 'touchmove'){
				var touches;
				if(e.originalEvent.touches && e.originalEvent.touches.length) {
					touches = e.originalEvent.touches;
				}else if(e.originalEvent.changedTouches && e.originalEvent.changedTouches.length) {
					touches = e.originalEvent.changedTouches;
				}else{
					return false;
				}
				// If touches more then one, so stop sliding and allow browser do default action
				if(touches.length > 1) {
					return false;
				}
				point = touches[0];	
				e.preventDefault();				
			} else {
				point = e.originalEvent;
				e.preventDefault();	
			}

			$(self).trigger('AWPTouchManager.DRAG_MOVE', {elem:activeElem, point:point, e:e});	
			
			return false;		
		}
		
		function onDragRelease(e) {
		
			if(drag){	
				drag = false;	
				_doc.off(moveEvent).off(upEvent);
				activeElem.off(upEvent);//detect touchend in mcustomscrollbar fix		
				
				var point;
				if(e.type == 'touchend'){
					var touches;
					if(e.originalEvent.touches && e.originalEvent.touches.length) {
						touches = e.originalEvent.touches;
					}else if(e.originalEvent.changedTouches && e.originalEvent.changedTouches.length) {
						touches = e.originalEvent.changedTouches;
					}else{
						return false;
					}
					// If touches more then one, so stop sliding and allow browser do default action
					if(touches.length > 1) {
						return false;
					}
					point = touches[0];	
					e.preventDefault();				
				} else {
					point = e.originalEvent;
					e.preventDefault();		
				}
				
				if(!isMobile){
					//$(e.currentTarget).off('mousemove', mouseMoveHandler).off('mouseleave', mouseLeaveHandler);
					_doc.off('mouseleave', mouseLeaveHandlerDoc);
				}

				$(self).trigger('AWPTouchManager.DRAG_RELEASE', {name:'DRAG_RELEASE', elem:activeElem, point:point, e:e});		
				
			}
			return false;
		}	
		
		this.isDrag = function(){
			return drag;
		}

		this.setData();
	
	};
	
	window.AWPTouchManager = AWPTouchManager;	

}(window,jQuery));
	
(function (window, $){
	"use strict"	
	var AWPDownloadManager = function (data){
			
		var self = this,
		isMobile = AWPUtils.isMobile(),
		_body = $('body'),
		_doc = $(document),
		parent = data.parent,
		settings = data.settings,
		sourcePath = settings.sourcePath,
		playerHolder = data.playerHolder,
		dlIframe, 
		downloadConfirm,
		downloadOn,
		mailSet,
		email,
		downConfTimeoutID, 
		downConfTimeout=2000,
		autoReuseDownloadMail = true;
		
		this.setData = function(){

			if(parent.find('iframe.awp-dl-iframe').length > 0)dlIframe = parent.find('iframe.awp-dl-iframe');
			else dlIframe = $('<iframe class="awp-dl-iframe"/>').css({position:'absolute',left:-10000+'px',display:'none'}).appendTo(parent);

			if(isMobile)downloadConfirm = parent.find('.awp-download-confirm');	
		}
		this.download = function(path, title){
			if(downloadOn)return false;

			if(window.location.protocol == 'file:'){
				console.log('Downloading files locally is not possible! This requires online server connection.');
				return false;
			}

			var dwn = getDownloadPath(path, title);
			checkDownload(dwn.path, dwn.title);	
		}
		
		function getDownloadPath(path, title){

			if(path.indexOf('\\')){//replace backward slashes
				path = path.replace(/\\/g,"/");
			}
			if(!path.match(/^http([s]?):\/\/.*/)){//construct full download path 
				path = AWPUtils.qualifyURL(path);
			}

			if(!isMobile)title = title.replace(/[^A-Z0-9\-\_\.]+/ig, "_");//allow spec chars
			if(title.length > 50) title = title.substr(0, 50) + "...";//max length
			if(!isMobile)if(!(/\.(mp3)$/i).test(title)) title+='.mp3';//append extension

			return {title:title, path:path};
		}
		
		function checkDownload(path, title){
			if(!isMobile){
				dlIframe.attr('src',sourcePath+"includes/dl.php?path="+path+"&title="+title);
			}else{//send mail on mobile
				downloadOn = true;
				if(autoReuseDownloadMail){
					if(!mailSet){
						email = getMail();
						if(email)mailSet = true;
					}
					if(email){
						sendMail(email, title, path);
					}else{
						downloadOn = false;	
					}
				}else{
					var mail = getMail();
					if(mail){
						sendMail(mail, title, path);
					}else{
						downloadOn = false;	
					}
				}
			}
		}
		
		function sendMail(mail, title, path){
			var data = "mail=" + mail + "&title=" + title + "&path=" + path;
			$.ajax({
				type: "POST",
				url: sourcePath+"includes/mail.php",
				data: data
			}).done(function(msg) {
				downloadOn = false;	
			}).fail(function(jqXHR, textStatus, errorThrown) {
				console.log('Send email error: ' + jqXHR.responseText);
				hide();
				downloadOn = false;
			});	
			downloadConfirm.css({marginTop:parseInt(-downloadConfirm.height()/2,10)+'px',display:'block'}).stop().animate({'opacity': 1},{duration: 500});
			if(downConfTimeoutID) clearTimeout(downConfTimeoutID);
			downConfTimeoutID = setTimeout(hide, downConfTimeout);
		}
		
		function hide(){
			if(downConfTimeoutID) clearTimeout(downConfTimeoutID);
			downloadConfirm.stop().animate({'opacity': 0},  {duration: 500, complete: function(){
				downloadConfirm.css('display','none');	
			}});
		}
		
		function getMail(){
			var mail = prompt("Please enter your email address where download link will be sent:");
			while(!AWPUtils.validateEmail(mail) || AWPUtils.isEmpty(mail)){
				if(mail == null){
					break;
				}
				mail = prompt("Please enter a valid email address:");
			}
			return mail;
		}
		
		this.setData();
	
	};	
	
	window.AWPDownloadManager = AWPDownloadManager;

}(window,jQuery));


(function (window, $){
	"use strict"
	var AWPShareManager = function (data){
			
		var self = this,
		isMobile = AWPUtils.isMobile(),
		settings = data.settings,
		facebookAppId = settings.facebookAppId,
		prefix = ('https:' == window.location.protocol ? 'https:' : 'http:');

		this.setData = function(){
			
			if(!AWPUtils.isEmpty(facebookAppId)){
				injectFbSdk(facebookAppId);
			}else{
				console.log('facebookAppId has not been set in settings!');
			}

		}
		
		this.share = function(type, data, title){
			
			var w = 600, h = 300, cw = (window.screen.width - w) / 2, ch = (window.screen.height - h) / 2,
			description = data.description||'',
			thumb = data.thumb ? AWPUtils.qualifyURL(data.thumb) : '',
			url = data.share, 
			path;

			if(!AWPUtils.relativePath(thumb))thumb = AWPUtils.qualifyURL(thumb);

			if(type == "facebook"){	
				path = prefix+'//www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url);
				if(window.FB){
					getFbSdk(url, thumb, title);
					return;	
				}
			}else if(type == "twitter"){	
				path = prefix+'//twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(title);
			}else if(type == "googleplus"){	
				path = prefix+'//plus.google.com/share?url='+encodeURIComponent(url);
			}else if(type == "tumblr"){	
				path = prefix+'//www.tumblr.com/share/link?url='+encodeURIComponent(url)+'&amp;name='+encodeURIComponent(title)+'&amp;description='+encodeURIComponent(description);
			}
			if(path)window.open(path, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width='+w+',height='+h+',left='+cw+',top='+ch+'');
		}	
		
		function getFbSdk(url, thumb, title){
			if(window.FB){
				 return FB.ui({
					method: 'feed',
					name: document.title,
					link: url,
					picture: thumb,
					caption: title
				 });
			}
		}	

		function injectFbSdk(apid) {
			var fb_root, script;
			if (!window.FB && apid && !document.body.querySelector('#fb-root')) {
			  script = document.createElement("script");
			  script.text = "window.fbAsyncInit=function(){FB.init({appId:'" + apid + "',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='" + prefix + "//connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk')";
			  fb_root = document.createElement("div");
			  fb_root.id = "fb-root";
			  document.body.appendChild(fb_root);
			  return document.body.appendChild(script);
			}
		}
		
		this.setData();
	
	};	
	
	window.AWPShareManager = AWPShareManager;

}(window,jQuery));	

(function (window, $){
	"use strict"
	var AWPSoundLoader = function (data){
		
		var self = this,
		proxy = data.settings.sourcePath + 'includes/ba-simple-proxy.php',
		type,
		currData,
		processData = [],
		finishData = [],
		deeplinkCounter,
		soundCloudInited,
		soundCloudAppId = data.settings.soundCloudAppId,
		feedParser = $('<div/>'),
		resultLimit;

		this.setData = function(data){
			finishData = [];
			processData = $.extend(true, [], [data]);
			checkSound();
		}
		
		function checkSound() {
			if(processData.length){
				currData = processData.shift();
				
				deeplinkCounter = 0;
				resultLimit = currData.limit || 500;
				
				processSound();

			}else{

				$(self).trigger('AWPSoundLoader.END_LOAD', [finishData]);
			}
		}
		
		function processSound(){
			
			if(window.location.protocol == 'file:'){
				alert('Using '+currData.type+' locally is not possible! This requires online server connection!');
				checkSound();
				return;
			}

			var type = currData.type, path = currData.path;

			if(type == 'podcast') {

				var url = proxy + '?url='+ encodeURIComponent(path);

				$.ajax({
					url: url,
					dataType: "json",
					cache: false
				}).done(function( d ) {

					var dom = AWPUtils.parseXML(d.contents), item, obj, default_artwork, len = 0;

					if($(dom).find('image').length && $(dom).find('image').attr('href')){
						default_artwork = $(dom).find('image').attr('href');
					}else if($(d.contents).find('itunes\\:image').length && $(d.contents).find('itunes\\:image').attr('href')){
						default_artwork = $(d.contents).find('itunes\\:image').attr('href');
					}

					$(dom).find("item").each(function(){

						if(len == resultLimit)return false;

						item = $(this);
						
						obj = $.extend(true, {}, currData);
						
						obj.type = 'audio';
						obj.mp3 = item.find('enclosure').attr('url');
						if(typeof obj.download === 'undefined')obj.download = obj.mp3;
						if(!obj.title && item.find('title').length)obj.title = item.find('title').text();
						if(!obj.artist && item.find('author').length)obj.artist = item.find('author').text();
						if(!obj.description && item.find('description').length)obj.description = item.find('description').text();
						if(!obj.duration && item.find('duration').length)obj.duration = item.find('duration').text();
						if(!obj.thumb){
							if(item.find('image').length && item.find('image').attr('href')){
								obj.thumb = item.find('image').attr('href');
							}else if(default_artwork){
								obj.thumb = default_artwork;
							}
						}
						if(typeof obj.share === 'undefined'){	
							if(item.find('link').length)obj.share = item.find('link').text();
						}

						finishData.push(obj);

						len++;
					});


					checkSound();
					
				}).fail(function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR, textStatus, errorThrown);
					checkSound();
				});	
			
			}else if(type == 'soundcloud'){

				if(!soundCloudInited)initSoundCloud(path);	
				else getSoundCloudPage(path);
				
			}
			
		}

		//************* start soundcloud
		
		function initSoundCloud(path){

			if(AWPUtils.isEmpty(soundCloudAppId)){
				alert('soundCloudAppId has not been set!');
				checkSound();
				return false;	
			}

			var tag = document.createElement('script');
			tag.src = "https://connect.soundcloud.com/sdk.js";
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
			
			var interval = setInterval(function(){
				if(window.SC){
					if(interval) clearInterval(interval);
					SC.initialize({
						client_id: soundCloudAppId
					});
					soundCloudInited = true;

					getSoundCloudPage(path);
				}
			 }, 100);
		}
		
		function getSoundCloudPage(id){
			SC.get(id, { limit: 200, linked_partitioning: 1 }, function(data, error){

				if(error){
					console.log('Error getSoundCloudPage: ' + error)
					checkSound();
					return;
				}

				if(data.kind == "track") {

					getItemData(data);

				}else if(data.kind == "playlist"){

					var i, len = data.tracks.length, end;
					if(finishData.length + len >= resultLimit){
						len = resultLimit - finishData.length;
						end = true;
					}
					for(i=0; i<len; i++) {
						getItemData(data.tracks[i],true);
					}

				}else if(data.collection){

					var i, len = data.collection.length, end;
					if(finishData.length + len >= resultLimit){
						len = resultLimit - finishData.length;
						end = true;
					}
					for(i=0; i<len; i++) {
						getItemData(data.collection[i],true);
					}

				}

				if(data.next_href && !end)getSoundCloudPage(data.next_href);
				else checkSound();
				
			});
		}
		
		function getItemData(track, multiple){

			if(track.streamable && track.stream_url){//http://stackoverflow.com/questions/15211538/tracks-for-the-hives-are-not-streaming-via-the-api

				var obj = jQuery.extend(true, {}, currData);
				
				if(obj.deeplink && typeof multiple !== 'undefined'){
					obj.deeplink = obj.deeplink+(deeplinkCounter+1).toString();	
					deeplinkCounter++;
				}

				obj.type = 'audio';
				if(track.duration)obj.duration = track.duration;
				obj.mp3 = track.stream_url + '?client_id=' + soundCloudAppId;
				if(typeof obj.download === 'undefined' && track.downloadable && track.download_url)obj.download = obj.mp3.replace(/\/stream\\?/, "/download");
				if(!obj.title && track.title)obj.title = track.title;
				if(!obj.description && track.description)obj.description = track.description;
				if(!obj.thumb && track.artwork_url){
					obj.thumb = track.artwork_url;
					if(obj.thumbQuality)obj.thumb = obj.thumb.replace('large.jpg', obj.thumbQuality);
				}
				obj.favoritings_count = parseInt(track.favoritings_count?track.favoritings_count:0,10);
				obj.playback_count = parseInt(track.playback_count?track.playback_count:0,10);
				obj.hotness = obj.favoritings_count+obj.playback_count;
				if(typeof obj.share === 'undefined'){	
					if(track.permalink_url)obj.share = track.permalink_url;
				}

				finishData.push(obj);

			}
		}
		
		//************* end soundcloud
	
	};	
	
	window.AWPSoundLoader = AWPSoundLoader;

}(window,jQuery));

(function (window, $){
	"use strict"
	var AWPPlaylistManager = function (data){
		
		var self = this;
		
		this.loopingOn = data.loopingOn;
		this.randomPlay = data.randomPlay;
		this.playlistItems;
		this.lastInOrder = false;
		this.counter = -1;
		this.lastPlayedFromPlaylistClick;//last played on click.
		this.lastRandomCounter;//last played random media in random playlist.
		this.randomPaused = false;//when random is playing and we interrupt it by click on the playlist.
		this.randomArr = [];
		this.playlistSelect = false;//prevent geting counter from randomArr on playlist click (get 'normal' counter instead)		
		
		//set counter to specific number or add it to the currect counter value		 
		this.setCounter = function(value, _add) {
			if (typeof _add === 'undefined') _add = true;
			if(_add){
				self.counter += parseInt(value, 10);
			}else{
				self.counter = parseInt(value, 10);
			}
			checkCounter();
		}
		this.getCounter = function() {
			var i;
			if(self.randomPlay){
				if(!self.playlistSelect){
					i = self.randomArr[self.counter];
				}else{
					i = self.counter;
				}
			}else{
				i = self.counter;
			}
			return i;
		}
		this.advanceHandler = function(a) {
			self.playlistSelect = false;//reset
			if(self.randomPaused){
				handleRandomPaused(a);
			}else{
				self.setCounter(a);
			}
		}
		this.processPlaylistRequest = function(id) {
			self.playlistSelect = false;//reset
			if(self.randomPlay){
				self.playlistSelect = true;
				self.lastPlayedFromPlaylistClick = id;//always remember last played on each click.
				if(!self.randomPaused){
					self.lastRandomCounter = self.counter;
					self.randomPaused = true;//needs to stay until random play comes back again! So that the above reference to last random counter doesnt get lost. (if we constantly clicking playlist)
				}
			}
			this.setCounter(id, false);
		}
		this.setPlaylistItems = function(val, resetCounter) {
			if(typeof resetCounter === 'undefined') resetCounter = true;
			if(resetCounter)self.counter = -1;
			self.playlistItems = val;
			if(self.randomPlay) makeRandomList();
		}
		this.reSetCounter = function(num) {
			if(typeof num === 'undefined'){
				 self.counter = -1;
			}else{//set counter to specific number
				var n = parseInt(num,10);
				if(self.playlistItems){
					if(n > self.playlistItems - 1){
						n = self.playlistItems - 1;
					}else if(n < 0){
						n = 0;
					}
					self.counter = n;
				}else{
					self.counter = -1;
				}
			}
		}
		this.setRandom = function(val) {
			self.randomPlay = val;
			if(self.randomPlay) makeRandomList();
			randomChange();
		}
		this.setLooping = function(val) {
			self.loopingOn = val;
		}
		
		//exiting randomPaused and going back to random mode
		function handleRandomPaused(a) {
			//just an exit out of randomPaused (because of a playlist click) and back to random again
			self.randomPaused = false;//reset before because of the getCounter()
			
			if(self.lastRandomCounter + a > self.playlistItems - 1){
				self.counter = self.playlistItems - 1;
				$(self).trigger('AWPPlaylistManager.COUNTER_READY');
				return;
			} else if( self.lastRandomCounter + a < 0){
				self.counter = 0;
				$(self).trigger('AWPPlaylistManager.COUNTER_READY');
				return;
			}
			self.setCounter(self.lastRandomCounter + a, false);
		}
		function randomChange() {//when random is turned on / off
			if(self.randomPlay){
				activeIndexFirst();
				self.counter = 0;//we have to do it like this, because with (setCounter(0, false)) media starts to play from the beginning if its already playing. (when random requested)
				//we need to say this on the every beginning of random to redirect the counter from wherever the currently is to 0, so that it becomes first index in randomArr. (after we have moved active index to beginning of randomArr)
				
			}else{
				//we are not going through setCounter here because its just getting out of random mode, and its not changing counter, it just stays where it is (playing or not)
				if(self.randomPaused){
					self.counter = self.lastPlayedFromPlaylistClick;
					self.randomPaused = false;//when random mode stops randomPaused stops also.
				}else{
					self.counter = self.randomArr[self.counter];//when we turn off random we need to set counter to the value of the current counter in randomArr, so if the counter is 1, and thats value 3 in randomArr for example, we want the active counter to stay 3, not 1, and next to go to 4, not 2.
				}
			}
		}
		function checkCounter() {
			if(isNaN(self.counter)){
				alert('AWPPlaylistManager message: No active media, counter = ' + self.counter);
				return;
			}
			//reset
			self.lastInOrder = false;
			
			if(self.loopingOn){
				if(self.randomPlay){
					
					if(self.counter > self.playlistItems - 1){//moving fowards
						self.counter = self.randomArr[ self.playlistItems - 1];//remember counter for comparison
						makeRandomList();
						_firstIndexCheck();
						self.counter = 0;
						$(self).trigger('AWPPlaylistManager.PLAYLIST_END_ALERT');
						
					}else if(self.counter < 0){//moving backwards
						self.counter = self.randomArr[0];//remember counter for comparison
						makeRandomList();
						lastIndexCheck();
						self.counter = self.playlistItems - 1;
					}
					
				}else{//random off
					if(self.counter > self.playlistItems - 1){
						self.counter = 0;
						$(self).trigger('AWPPlaylistManager.PLAYLIST_END_ALERT');
					}else if( self.counter < 0){
						self.counter = self.playlistItems - 1;
					}
				}
				
				$(self).trigger('AWPPlaylistManager.COUNTER_READY');
				
			}else{//looping off
				
				if(self.counter > self.playlistItems - 1){
					self.counter = self.playlistItems - 1;
					self.lastInOrder = true;//last item
				}else if(self.counter < 0){
					self.counter = 0;
				}
				
				if(!self.lastInOrder){
					$(self).trigger('AWPPlaylistManager.COUNTER_READY');
				}else{
					$(self).trigger('AWPPlaylistManager.PLAYLIST_END');
				}
			}
			
		}

		function makeRandomList() {
			if(self.playlistItems < 3){
				self.randomPlay = false;
				return;
			} 
			self.randomArr = AWPUtils.randomiseArray(self.playlistItems);
		}
		function _firstIndexCheck () {
			//check that first item in newly generated random array isnt equal to last active item.
			if(self.randomArr[0] == self.counter){//if yes, put it at the last place in array.
				var i = self.randomArr.splice(0,1);
				self.randomArr.push(i);
			}
		}
		function lastIndexCheck() {
			if(self.randomArr[self.playlistItems - 1] == self.counter){//if yes, put it at the first place in array.
				var i = self.randomArr.splice(self.playlistItems - 1,1);
				self.randomArr.unshift(i);
			}
		}
		function activeIndexFirst() {//when going into random (playing or not) put currently active index on the first place of random array.
			var i,len = self.randomArr.length, j;
			for(i = 0; i < len; i++){
				if(self.randomArr[i] == self.counter){
					if(i == 0){//if its already on the first place no need for action.
						break;
					}
					j = self.randomArr.splice(i,1);
					self.randomArr.unshift(parseInt(j,10));
					break;
				}
			}
		} 
		
	
	};
	
	window.AWPPlaylistManager = AWPPlaylistManager;	

}(window,jQuery));
	
(function($) {

	$.fn.awp = function(options) {
	
	"use strict"
	
	var defaults = {
        instanceName:"",
        sourcePath:"",
        playlistList:"",
        activePlaylist:"",
        activeItem:0,
        volume:0.5,
        autoPlay:false,
        randomPlay:false,
        loopingOn:true,
        autoAdvanceToNextMedia:true,
        mediaEndAction:"loop",
        soundCloudAppId:"",
        usePlaylistScroll:false,
        playlistScrollOrientation:"vertical",
        playlistScrollTheme:"light",
        useKeyboardNavigationForPlayback:false,
        facebookAppId:"",
        useNumbersInPlaylist: false,
        numberTitleSeparator: ".  ",
        artistTitleSeparator: " - ",
        playlistItemContent:"title"
    };

    var settings = $.extend({}, defaults, options);

	//############################################//
	/* elements */
	//############################################//

	var wrapper = $(this).show();

	var playlistList = $(settings.playlistList).hide(),
	playlistHolder = wrapper.find('.awp-playlist-holder'),
	playlistInner = wrapper.find('.awp-playlist-inner'),
	playlistContent = wrapper.find('.awp-playlist-content'),
	playlistFilterMsg = wrapper.find('.awp-playlist-filter-msg'),
	sortAlpha = wrapper.find('.awp-sort-alpha'),
	preloader = wrapper.find('.awp-preloader'),

	playerHolder = wrapper.find('.awp-player-holder'),
	playerThumb = wrapper.find('.awp-player-thumb'),
	mediaTimeCurrent = wrapper.find('.awp-media-time-current'),
	mediaTimeTotal = wrapper.find('.awp-media-time-total'),
	mediaTitle = wrapper.find('.awp-media-title'),
	playerControls = wrapper.find('.awp-player-controls'),
	playbackToggle = wrapper.find('.awp-playback-toggle'),
	loopToggle = wrapper.find('.awp-loop-toggle'),
	playerVolume = wrapper.find('.awp-player-volume'),
	randomToggle = wrapper.find('.awp-random-toggle'),
	volumeWrapper = wrapper.find('.awp-volume-wrapper'),
	volumeSeekbar = wrapper.find('.awp-volume-seekbar'),
	volumeBg = wrapper.find('.awp-volume-bg'),
	volumeLevel = wrapper.find('.awp-volume-level'),

	waveform = wrapper.find('.awp-waveform'), 
	waveformPreloader = wrapper.find('.awp-waveform-preloader'),
	waveformImg = wrapper.find('.awp-waveform-img'), 
	waveformImgLoad = wrapper.find('.awp-waveform-img-load'), 
	waveformImgProgressWrap = wrapper.find('.awp-waveform-img-progress-wrap'), 
	waveformImgProgress = wrapper.find('.awp-waveform-img-progress');


	//############################################//
	/* settings */
	//############################################//
	
	var isMobile = AWPUtils.isMobile(),
	mp3Support = AWPUtils.canPlayMp3(),
	wavSupport = AWPUtils.canPlayWav(),

	sourcePath = settings.sourcePath,
	instanceName = AWPUtils.filterAllowedChars(settings.instanceName),
	activePlaylist = settings.activePlaylist,
	autoPlay = settings.autoPlay,
	drawWaveWithoutLoad = settings.drawWaveWithoutLoad,
	soundcloudApiKey = settings.soundcloudApiKey,
	loopingOn = settings.loopingOn,
	randomPlay = settings.randomPlay,
	useNumbersInPlaylist = settings.useNumbersInPlaylist,
	numberTitleSeparator = settings.numberTitleSeparator,
	artistTitleSeparator = settings.artistTitleSeparator,
	volume = settings.volume,
	usePlaylistScroll = settings.usePlaylistScroll,
	playlistScrollOrientation = settings.playlistScrollOrientation.toLowerCase(),
	useKeyboardNavigationForPlayback = settings.useKeyboardNavigationForPlayback,
    autoAdvanceToNextMedia = settings.autoAdvanceToNextMedia,
    mediaEndAction = settings.mediaEndAction,
    playlistItemContent = settings.playlistItemContent.split(',');

    var usePlaylist = playlistHolder.length,
    useFilter = wrapper.find('.awp-search-filter').length,
	useSort = sortAlpha.length,
	useTime = mediaTimeCurrent.length || mediaTimeTotal.length,
	useVolume = volumeSeekbar.length;

	//############################################//
	/* vars */
	//############################################//

	var componentInited = false,
	playlistTransitionOn = false,
	self = this,
	_body = $('body'),
	_window = $(window),
	_doc = $(document),
	isIE = AWPUtils.isIE(),
	windowResizeTimeoutID,
	windowResizeTimeout = 150,
	hasDownloadSupport = AWPUtils.hasDownloadSupport(),

	//wavesurfer
	wavesurfer, 
	ME_backend = true,//ONLY backend: 'MediaElement' coded!
	peakWriteRequired,
	waveformImgMode,
	fadeWaveform,

	remoteDownloadAjax,
	loadPeaksAjax,

	//api helpers
	endInsert,
	insertPosition, 
	addTrackProcess,
	addTrackPlayit,
	playlistFirstInit,//first time create playlist with active item 
	apiCreation,
	
	playlistProcessCounter=-1,
	playlistDataArr=[],
	playlistProcessData=[],
	playlistProcessDataUrl=[],
	playlistLength=0,
	autoInitActiveItem,
	playlistLoaded = false,
	lastPlaylist = null,
	activePlaylistItemId=-1,
	mediaStarted=false,
	mediaType,
	mediaPlaying=false,
	currMediaData,
	playlistClick,
	playlistScrollInit,
	alphaSortOrder = false,//ascending
	playlistTitleArr=[],//filter
	id3Counter,
	id3Start,
	soundTypeArr = ['podcast','soundcloud','soundcloud_query'],

	iconOffClass = 'awp-icon-color',
	iconOnClass = 'awp-icon-rollover-color';

	
	//############################################//
	/* setup */
	//############################################//

	if(typeof window.awp_mediaArr === 'undefined')window.awp_mediaArr = [];
	
	awp_mediaArr.push({inst: self, id: instanceName});

	if(isMobile){
		autoPlay = false;
	}

	if(isIE && isIE < 12){//css pointer events fix
  		waveformImg.on('click',function(e){
  			if(waveformImgMode){
				var currentTarget = $(e.currentTarget),
				s = Math.min(Math.max(((e.pageX - currentTarget.offset().left) / currentTarget.width()), 0), 1);
				//console.log(s)
				wavesurfer.seekTo(s);	
			}
		}); 
	} 

	if(loopingOn)loopToggle.find('i').removeClass(iconOffClass).addClass(iconOnClass);
	if(randomPlay)randomToggle.find('i').removeClass(iconOffClass).addClass(iconOnClass);
	
	//############################################//
	/* filter */
	//############################################//
	
	if(useFilter){
		
		var searchFilter = wrapper.find('.awp-search-filter').on('focus', function(e){
			if($(this).val()==filterText)$(this).val(''); 
		}).on('blur',function(){
			if(AWPUtils.isEmpty($(this).val())){
				$(this).val(filterText); 
			}
		}).on('keyup.apfilter',function(){
			if(playlistTitleArr.length == 0)return false;
			var len = playlistDataArr.length, value = $(this).val(), filter = playlistTitleArr.filter(/./.test.bind(new RegExp(value,"i"))), i, j = 0, title;

			for(i = 0; i< len; i++){
				title = getTitle(i);
				if($.inArray(title, filter) > -1){
					playlistContent.children('div.awp-playlist-item').eq(i).show();
				}else{
					playlistContent.children('div.awp-playlist-item').eq(i).hide();
					j++;
				}
			}
			if(len>0 && playlistFilterMsg.length){
				if(j == len)playlistFilterMsg.show();
				else playlistFilterMsg.hide();
			}

			if(usePlaylistScroll && playlistLength>0){
				if(playlistScrollOrientation.charAt(0) == 'h'){
					playlistInner.mCustomScrollbar('update');
				}
			}

			if(typeof awpFilterChange !== 'undefined')awpFilterChange(self, instanceName, playlistContent);//callback

		}),
		filterText = searchFilter.val();

	}

	//############################################//
	/* tooltip */
	//############################################//
	
	var _AWPTooltip = new AWPTooltip({settings:settings,parent:wrapper});

	//############################################//
	/* download */
	//############################################//
	
	var _AWPDownloadManager = new AWPDownloadManager({settings:settings,parent:wrapper});
	
	//############################################//
	/* share */
	//############################################//
	
	var _AWPShareManager = new AWPShareManager({settings:settings});
	 
	//############################################//
	/* playlist manager */
	//############################################//
	
	var _AWPPlaylistManager = new AWPPlaylistManager({'randomPlay': randomPlay, 'loopingOn': loopingOn});
	$(_AWPPlaylistManager).on('AWPPlaylistManager.COUNTER_READY', function(){
		
		if(mediaType)cleanMedia();
		if(usePlaylist)disableActivePlaylistItem();
		
		var i = _AWPPlaylistManager.getCounter();
		currMediaData = playlistDataArr[i].data;
		mediaType = currMediaData.type;

		setTitle(i);
		
		initAudio();

		if(typeof awpItemTriggered !== 'undefined')awpItemTriggered(self, instanceName, i);//callback

	}).on('AWPPlaylistManager.PLAYLIST_END AWPPlaylistManager.PLAYLIST_END_ALERT', function(){
		if(typeof awpPlaylistEnd !== 'undefined')awpPlaylistEnd(self, instanceName);//callback
	});
	
	//############################################//
	/* sound loader */
	//############################################//
	
	var _AWPSoundLoader = new AWPSoundLoader({settings:settings, sourcePath:sourcePath});
	$(_AWPSoundLoader).on('AWPSoundLoader.END_LOAD', function(e, data){
		var i, len = data.length, obj;
		for(i=0;i<len;i++){
			obj = data[i];
			playlistProcessData.push(obj);
		}
		checkProcessCounter();
	});	
	
	//############################################//
	/* drag, move */
	//############################################//

	var touch_elems = [];
	
	if(useVolume){
		volumeSeekbar.data('apmove', true);
		touch_elems.push(volumeSeekbar);
	}
	
	if(touch_elems.length){

		var _AWPTouchManager = new AWPTouchManager(touch_elems);
		$(_AWPTouchManager).on('AWPTouchManager.DRAG_START', function(e, data){
			//console.log('AWPTouchManager.DRAG_START')

		}).on('AWPTouchManager.DRAG_MOVE AWPTouchManager.DRAG_RELEASE', function(e, data){
			if(!componentInited)return false;

			var elem = data.elem, e = data.e, x = data.point.pageX, y = data.point.pageY;
			//console.log('AWPTouchManager.DRAG_MOVE ', e)

			if(elem.hasClass('awp-volume-seekbar')){
				
				var v = volumeHoriz ? x : y;
				volumeTo(v);

				if(typeof _AWPTooltip !== 'undefined' && elem.is('[class*="awp-tooltip"]')){
				
					if(volumeHoriz)var s = x - volumeBg.offset().left;
					else      	   var s = y - volumeBg.offset().top;
					if(s<0) s=0;
					else if(s>volumeSize) s=volumeSize;
					var newPercent = Math.max(0, Math.min(1, s / volumeSize));
					if(!volumeHoriz)newPercent = 1 - newPercent;//reverse for up dir
					var value=parseInt(newPercent * 100, 10);
					_AWPTooltip.volume(data.point, volumeSeekbar, value);
				
				}
				
			}

		}).on('AWPTouchManager.MOUSE_MOVE', function(e, data){
			if(!componentInited)return false;

			var elem = data.elem, e = data.e, x = e.pageX, y = e.pageY;
			//console.log('AWPTouchManager.MOUSE_MOVE', x)

			if(elem.hasClass('awp-volume-seekbar')){
				
				if(typeof _AWPTooltip !== 'undefined' && elem.is('[class*="awp-tooltip"]')){
				
					if(volumeHoriz)var s = x - volumeBg.offset().left;
					else      	   var s = y - volumeBg.offset().top;
					if(s<0) s=0;
					else if(s>volumeSize) s=volumeSize;
					var newPercent = Math.max(0, Math.min(1, s / volumeSize));
					if(!volumeHoriz)newPercent = 1 - newPercent;//reverse for up dir
					var value=parseInt(newPercent * 100, 10);
					_AWPTooltip.volume(e, volumeSeekbar, value);
				
				}
				
			}

		}).on('AWPTouchManager.MOUSE_LEAVE', function(e, data){

			if(!componentInited)return false;

			var elem = data.elem, e = data.e;
			//console.log('AWPTouchManager.MOUSE_LEAVE')

			if(typeof _AWPTooltip !== 'undefined')_AWPTooltip.hide();

		});
	}

	//############################################//
	/* volume */
	//############################################//
	
	if(useVolume){
		
		var volumeHoriz = volumeSeekbar.hasClass('awp-vertical') ? false : true,
		lastVolume = 0.5,//if we click unmute from mute on the beginning
		volumeSize = (settings.volumeSize != undefined) ? settings.volumeSize : volumeHoriz ? volumeBg.width() : volumeBg.height();

		if(volume<0) volume=0;
		else if(volume>1)volume=1;
		if(volume!=0)lastVolume = volume;
		
	}
	
	function toggleMute(click){
		if(!componentInited) return false;
		if(volume>0){
			lastVolume = volume;//remember last volume
			volume = 0;
		}else{
			volume = lastVolume;//restore last volume
		}
		setVolume();

		if(typeof click !== 'undefined'){
			if(typeof _AWPTooltip !== 'undefined' && playerVolume.attr('data-awptooltip') != undefined){
				var t = volume == 0 ? 'UnMute' : 'Mute';
				_AWPTooltip.controls(playerVolume, t);
			}
		}

	}

	function volumeTo(v) {
		if(volumeHoriz){
			volume = Math.max(0, Math.min(1, (v - volumeBg.offset().left) / volumeSize));
		}else{
			volume = Math.max(0, Math.min(1, (v - volumeBg.offset().top) / volumeSize));
			volume = 1 - volume;//reverse for up dir
		} 
		setVolume();
	}

	function setVolume(v){

		if(typeof v !== 'undefined')volume=v;
			
		if(typeof volume !== 'undefined'){
			settings.volume = volume;

			if(typeof wavesurfer !== 'undefined')wavesurfer.setVolume(volume);
		}

		if(useVolume){
			if(volumeHoriz)volumeLevel.css('width', volume*volumeSize+'px');
			else 		   volumeLevel.css('height', volume*volumeSize+'px');
		}

		if(volume == 0){
			if(useVolume)playerVolume.find('i').removeClass('fa-volume-up fa-volume-down').addClass('fa-volume-off');
		}else{
			if(useVolume)playerVolume.find('i').removeClass('fa-volume-off fa-volume-down').addClass('fa-volume-up');
		}

		if(typeof awpVolumeChange != undefined)awpVolumeChange(self, instanceName, volume);//callback
	}
	
	//############################################//
	/* controls */
	//############################################//

	if(useKeyboardNavigationForPlayback){
		_doc.on('keyup.apnav',function(e) {

			if(!componentInited) return false;
			
			var key = e.keyCode, target = $(e.target);
		
			if(key == 37) {//left arrow
			  	self.previousMedia();
			} 
			else if(key == 39) {//right arrow
				self.nextMedia();
			}
			else if(key == 32) {//space
				self.togglePlayback();
			}
			else if(key == 77) {//m
				toggleMute();
			}
		});	
	}
	
	var buttonArr=[
		wrapper.find('.awp-next-toggle'),
		wrapper.find('.awp-prev-toggle'),
		wrapper.find('.awp-playlist-toggle'),
		wrapper.find('.awp-share-item'),
		sortAlpha,
		playerVolume,
		playbackToggle,
		loopToggle,
		randomToggle
	];

	var btn,len = buttonArr.length,i;
	for(i=0;i<len;i++){
		btn = $(buttonArr[i]).css('cursor', 'pointer').on('click', clickControls);
		if(!isMobile)btn.on('mouseenter', overControls).on('mouseleave', outControls);
	}
	
	function clickPlaylistItem(e){
		e.preventDefault();
		if(!componentInited)return false;

		var currentTarget = $(e.currentTarget), id = currentTarget.attr('data-id');
		if(id == _AWPPlaylistManager.getCounter())return false;
		playlistClick=true;

		_AWPPlaylistManager.processPlaylistRequest(id);
		if(typeof awpPlaylistItemClick != undefined)awpPlaylistItemClick(self, instanceName, currentTarget, id, e);//callback

	}

	function overPlaylistItem(e){
		e.preventDefault();
		if(!componentInited) return false;

		var currentTarget = $(e.currentTarget), id = currentTarget.attr('data-id'), data = playlistDataArr[id].data;
		
		if(id == _AWPPlaylistManager.getCounter())return false;//active item

		currentTarget.removeClass('awp-playlist-non-selected').addClass('awp-playlist-selected');
		
		if(typeof awpPlaylistItemRollover != undefined)awpPlaylistItemRollover(self, instanceName, currentTarget, id);//callback
		
	}
	
	function outPlaylistItem(e){
		e.preventDefault();
		if(!componentInited) return false;

		var currentTarget = $(e.currentTarget), id = currentTarget.attr('data-id');

		if(id == _AWPPlaylistManager.getCounter())return false;//active item

		currentTarget.removeClass('awp-playlist-selected').addClass('awp-playlist-non-selected');

		if(typeof awpPlaylistItemRollout != undefined)awpPlaylistItemRollout(self, instanceName, currentTarget, id);//callback	
	}
	
	function clickControls(e){
		//e.preventDefault();
		if(!componentInited) return false;
		
		var currentTarget = $(e.currentTarget);

		if(currentTarget.hasClass('awp-prev-toggle')){	
			self.previousMedia();
		}else if(currentTarget.hasClass('awp-playback-toggle')){		
			self.togglePlayback();
		}else if(currentTarget.hasClass('awp-next-toggle')){		
			self.nextMedia();
		}else if(currentTarget.hasClass('awp-loop-toggle')){	

			loopingOn=!loopingOn;	
			_AWPPlaylistManager.setLooping(loopingOn);
			if(loopingOn)loopToggle.find('i').removeClass(iconOffClass).addClass(iconOnClass); 
			else loopToggle.find('i').removeClass(iconOnClass).addClass(iconOffClass); 

		}else if(currentTarget.hasClass('awp-player-volume')){	
			if(currentTarget.hasClass('awp-toggle-mute'))toggleMute();

		}else if(currentTarget.hasClass('awp-random-toggle')){	

			randomPlay=!randomPlay;
			_AWPPlaylistManager.setRandom(randomPlay);
			if(randomPlay)randomToggle.find('i').removeClass(iconOffClass).addClass(iconOnClass); 
			else randomToggle.find('i').removeClass(iconOnClass).addClass(iconOffClass); 

		}else if(currentTarget.hasClass('awp-sort-alpha')){	

			self.sort('title', alphaSortOrder);
			alphaSortOrder=!alphaSortOrder;
			if(alphaSortOrder)currentTarget.find('i').removeClass('fa-sort-alpha-desc').addClass('fa-sort-alpha-asc'); 
			else currentTarget.find('i').removeClass('fa-sort-alpha-asc').addClass('fa-sort-alpha-desc'); 

		}else{
 		    if(currentTarget.hasClass('awp-share-item') && currentTarget.attr('data-type') != undefined){		
				if(typeof _AWPShareManager !== 'undefined' && currMediaData.share && !AWPUtils.isEmpty(currMediaData.share))_AWPShareManager.share(currentTarget.attr('data-type').toLowerCase(), currMediaData, getTitle(_AWPPlaylistManager.getCounter()));
			}else{

			}
		}
	}

	function overControls(e){
		if(!componentInited) return false;
		e.preventDefault();

		if(typeof _AWPTouchManager !== 'undefined' && _AWPTouchManager.isDrag())return false;
		var currentTarget = $(e.currentTarget), i=currentTarget.find('i');
		if(i.hasClass(iconOffClass))i.removeClass(iconOffClass).addClass(iconOnClass);

		//tooltips
		if(typeof _AWPTooltip !== 'undefined' && currentTarget.attr('data-awptooltip') != undefined){
			var t;
			if(currentTarget.hasClass('awp-player-volume')){
				t = volume == 0 ? 'UnMute' : 'Mute';
			}else{
				t = currentTarget.attr('data-awptooltip');
			}
			_AWPTooltip.controls(currentTarget, t);
		}
	}
	
	function outControls(e){
		if(!componentInited) return false;
		e.preventDefault();
		var currentTarget = $(e.currentTarget), i=currentTarget.find('i');

		if(!(currentTarget.hasClass('awp-random-toggle') && randomPlay) && !(currentTarget.hasClass('awp-loop-toggle') && loopingOn))if(i.hasClass(iconOnClass))i.removeClass(iconOnClass).addClass(iconOffClass); 

		if(typeof _AWPTooltip !== 'undefined')_AWPTooltip.hide();
	}
	
	function enableActivePlaylistItem(){
		
		if(_AWPPlaylistManager.getCounter()!=-1){
			var id = activePlaylistItemId, item = playlistContent.children('div.awp-playlist-item[data-id=' + id + ']'), a = item.find('.awp-playlist-non-selected, .awp-playlist-selected');
			if(item.length){
				var id = item.attr('data-id');
				a.removeClass('awp-playlist-selected').addClass('awp-playlist-non-selected');
				if(typeof awpPlaylistItemEnabled !== 'undefined')awpPlaylistItemEnabled(self, instanceName, item, id);//callback
			}
		}
	}
	
	function disableActivePlaylistItem(){
		if(activePlaylistItemId!=-1)enableActivePlaylistItem();

		var id = _AWPPlaylistManager.getCounter(), item = playlistContent.children('div.awp-playlist-item[data-id=' + id + ']'), a = item.find('.awp-playlist-non-selected, .awp-playlist-selected');
		
		if(item.length){
			activePlaylistItemId = id;
			
			a.removeClass('awp-playlist-non-selected').addClass('awp-playlist-selected');

			if(usePlaylistScroll && playlistLength>0){
				if(!playlistClick){//not on playlist item click
					if(playlistScrollOrientation.charAt(0) =='h'){//scroll to active item
						playlistInner.mCustomScrollbar("scrollTo",parseInt(item.position().left),{scrollInertia:500});
					}else{
						playlistInner.mCustomScrollbar("scrollTo",parseInt(item.position().top),{scrollInertia:500});
					}	
				}
				playlistClick=false;
			}

			if(typeof awpPlaylistItemDisabled !== 'undefined')awpPlaylistItemDisabled(self, instanceName, item, id);//callback
		}
	}

	//############################################//
	/* wavesurfer */
	//############################################//

	wavesurfer = Object.create(WaveSurfer);

    wavesurfer.init({
        container: waveform[0],
        backend: 'MediaElement',/*!important*/
        interact: 1,
        hideScrollbar: true,
        waveColor: settings.wavesurfer.waveColor,
        progressColor: settings.wavesurfer.progressColor,
        barWidth: settings.wavesurfer.barWidth,
        cursorColor: settings.wavesurfer.cursorColor,
        cursorWidth: settings.wavesurfer.cursorWidth,
        height: settings.wavesurfer.height
    });

    wavesurfer.on('loading', function(percent) {
        //console.log(percent);
        var p  = 'Loading... ' + percent.toString() + '%';
        waveformPreloader.css('opacity',1).html(p);
    });

    wavesurfer.on('finish', function(er) {
      	mediaEndHandler();
    });

    wavesurfer.on('error', function(er) {
      	console.log(er);
      	//mediaEndHandler();
    });

    wavesurfer.on('audioprocess', function(e) {
    	var t = wavesurfer.getCurrentTime(), d = wavesurfer.getDuration();
        if(useTime){
        	mediaTimeCurrent.html(AWPUtils.formatCurrentTime(t));
        	mediaTimeTotal.html(AWPUtils.formatDuration(d));
        }

        if(waveformImgMode)waveformImgProgressWrap.width(waveformImg.width()*wavesurfer.backend.getPlayedPercents());

        if(currMediaData.end)if(t>=currMediaData.end)mediaEndHandler();
    });

    wavesurfer.on("play", function () {
		if(!mediaStarted){
			if(typeof awpMediaStart != undefined)awpMediaStart(self, instanceName, _AWPPlaylistManager.getCounter());//callback
			mediaStarted=true;	
		}
		setPauseIcon();
		mediaPlaying=true;
		if(typeof awpMediaPlay != undefined)awpMediaPlay(self, instanceName, _AWPPlaylistManager.getCounter());//callback 
	});

    wavesurfer.on("pause", function () {
        setPlayIcon();
		mediaPlaying=false;
		if(typeof awpMediaPause != undefined)awpMediaPause(self, instanceName, _AWPPlaylistManager.getCounter());//callback 
    });

    wavesurfer.on('seek', function(e) {
     	if(waveformImgMode)waveformImgProgressWrap.width(waveformImg.width()*e);
    });

    wavesurfer.on('ready', function() {
        //console.log('ready');

        wavesurfer.setVolume(volume);

        var start = currMediaData.start || 0, end;
        if(currMediaData.end)end = currMediaData.end;

        //playback rate
        if(currMediaData.playbackRate)wavesurfer.setPlaybackRate(currMediaData.playbackRate);

        if(autoPlay){
	        //start/end
	        if(end)wavesurfer.play(start, end);
	        else wavesurfer.play(start);
	    }

        autoPlay=true;

    }); 

    wavesurfer.on('waveform_ME_noPeaks', function() {
        //console.log('waveform_ME_noPeaks');

        if(ME_backend){
            if(peakWriteRequired){
                var peaks = wavesurfer.backend.getPeaks(900);
                //console.log(peaks);
                if(peaks.length)writePeaks(peaks, currMediaData.peakName || currMediaData.title);
                peakWriteRequired = false;
            }
            //when the waveform is shown
            waveformPreloader.css('opacity',0);
         	waveform.removeClass('awp-hidden').addClass('awp-visible');
         	showPlayerElements();
        }
    });

    wavesurfer.on('redraw', function() {
        //console.log('redraw');
        if(fadeWaveform){
        	waveformPreloader.css('opacity',0);
        	waveform.removeClass('awp-hidden').addClass('awp-visible');
	        showPlayerElements();
	        fadeWaveform = false;
        }
    });

    function setPeaks(){

        wavesurfer.backend.peaks = currMediaData.peakData;

        fadeWaveform = true;

        wavesurfer.drawBuffer();

        if(drawWaveWithoutLoad){
            /*draw peak without play, after this call loadPlayMedia*/
            wavesurfer.drawBuffer();
        }else{
        	/*draw peak and play*/
       	 	wavesurfer.load(currMediaData.mp3, wavesurfer.backend.peaks);
        }
	}

	function loadPeaks(id){

		var postData = [
	        {name: 'action', value: 'awp_read_peaks'},
	        {name: 'id', value: id},
	        {name: 'path', value: currMediaData.peakdir || null}
	    ];

	    loadPeaksAjax = $.ajax({
	        url: sourcePath + 'peaks/peaks.php',
	        type: 'post',
	        data: postData,
	        dataType: 'json',
	    }).done(function(response) {
	        //console.log(response);

	        if(response.length){
	        	//console.log('peak exist')

	            wavesurfer.backend.peaks = response;

	            fadeWaveform = true;

	            if(drawWaveWithoutLoad){
		            /*draw peak without play, after this call loadPlayMedia*/
		            wavesurfer.drawBuffer();
		        }else{
		        	/*draw peak and play*/
	           	 	wavesurfer.load(currMediaData.mp3, wavesurfer.backend.peaks);
		        }

	        }else{
	        	//console.log('peak NOT exist')

	        	if(!wavesurfer.backend.supportsWebAudio()){
	        		//load img wave if exist
	        		if(currMediaData.peakImage){
	        			waveformImgMode = true;
	        			waveformImgLoad.empty().append('<img src="'+currMediaData.peakImage.load+'" alt="load"/>');
	        			waveformImgProgress.empty().append('<img src="'+currMediaData.peakImage.progress+'" alt="progress"/>');

	        			waveformImg.css('display','block');
	        			waveformImgProgress.width(waveformImg.width());
	        			waveformImg.removeClass('awp-hidden').addClass('awp-visible');
	        			showPlayerElements();
	        		}

	        	}else{

	        		peakWriteRequired = true;

					if(currMediaData.remote){

						waveformPreloader.css('opacity',1).html('Loading waveform...');
						wavesurfer.setSkipArrayBuffer(true);

						remoteDownload();

					}
	        		
	        	}
	        	
	        	wavesurfer.load(currMediaData.mp3);
	        	
	        }

	    }).fail(function(jqXHR, textStatus, errorThrown) {
	        console.log(jqXHR, textStatus, errorThrown);
	    }); 

	}

	function writePeaks(peaks, title){

	    var postData = [
	        {name: 'action', value: 'awp_write_peaks'},
	        {name: 'peaks', value: peaks},
	        {name: 'id', value: title},
	        {name: 'path', value: currMediaData.peakdir || null}
	    ];

	    $.ajax({
	        url: sourcePath + 'peaks/peaks.php',
	        type: 'post',
	        data: postData,
	        dataType: 'json',
	    }).done(function(response) {
	        
	    }).fail(function(jqXHR, textStatus, errorThrown) {
	        console.log(jqXHR.responseText);
	    }); 

	}

	function initAudio(){

		if(currMediaData.peakData){//if peak data provided
			setPeaks();
		}else if(currMediaData.peakImage){//if peak image provided
			
			//load image wave
			waveformImgMode = true;
			waveformImgLoad.empty().append('<img src="'+currMediaData.peakImage.load+'" alt="load"/>');
			waveformImgProgress.empty().append('<img src="'+currMediaData.peakImage.progress+'" alt="progress"/>');

			waveformImg.css('display','block');
			waveformImgProgress.width(waveformImg.width());
			waveformImg.removeClass('awp-hidden').addClass('awp-visible');
			showPlayerElements();
    		
			wavesurfer.setSkipArrayBuffer(true);
			wavesurfer.load(currMediaData.mp3);

		}else{
			loadPeaks(currMediaData.peakName || currMediaData.title);	
		}
	}

	function remoteDownload(){//download file, then create peak from it

		var postData = [
	        {name: 'id', value: currMediaData.mp3},
	        {name: 'title', value: currMediaData.title},
	        {name: 'path', value: currMediaData.peakdir || null}
	    ];

	    remoteDownloadAjax = $.ajax({
	        url: sourcePath + 'peaks/remote_dl.php',
	        type: 'post',
	        data: postData,
	        dataType: 'json'
	    }).done(function(response) {
	       // console.log(response);
	        wavesurfer._getArrayBuffer(response);

	    }).fail(function(jqXHR, textStatus, errorThrown) {
	        console.log(jqXHR, textStatus, errorThrown);
	    }); 

	}



	//############################################//
	/* playlist process */
	//############################################//

	function setPlaylist(id){
		
		playlistTransitionOn=true;
		showPreloader();
		
		if(lastPlaylist)destroyPlaylist();

		var playlist = playlistList.find("#"+id);
		if(playlist.length==0){
			alert('Failed to select playlist! Check activePlaylist option in settings. Make sure that element: "' + id + '" exist in awp-playlist-list!');
			hidePreloader();
			playlistTransitionOn=false;
			return false;	
		}

		if(typeof awpPlaylistStartLoad !== 'undefined')awpPlaylistStartLoad(self, instanceName);//callback
		
		var obj, item;
		playlist.find('.awp-playlist-item').each(function(){
			item=$(this);
			obj = getTrackData(item);
			playlistProcessDataUrl.push(obj);
		});
		playlistLength=playlistProcessDataUrl.length;

		checkProcessCounter();
	}

	function getTrackData(track_data){
		var obj = {};

		obj.origclasses = track_data.attr('class');//copy classes
		obj.type = track_data.attr('data-type');

		if(!track_data.is(':empty'))obj.content = track_data.html();//copy any content to generated playlist item

		if(obj.type == 'audio'){

			obj.mp3 = track_data.attr('data-mp3');

		}else{

			if(track_data.attr('data-path') != undefined && !AWPUtils.isEmpty(track_data.attr('data-path'))){
				obj.path = obj.id = track_data.attr('data-path');
			}
		}

		//img peaks
		if(track_data.attr('data-peak-load') != undefined && !AWPUtils.isEmpty(track_data.attr('data-peak-load')) && 
			track_data.attr('data-peak-progress') != undefined && !AWPUtils.isEmpty(track_data.attr('data-peak-progress'))){
			obj.peakImage = {load:track_data.attr('data-peak-load'), progress:track_data.attr('data-peak-progress')}
		}

		//peak array
		if(track_data.attr('data-peak-array') != undefined){
			obj.peakData = track_data.attr('data-peak-array').split(',');
		}

		if(track_data.attr('data-peak-name') != undefined){
			obj.peakName = track_data.attr('data-peak-name');
		}

		if(!AWPUtils.isEmpty(track_data.html()))obj.content = track_data.html();//copy any content to generated playlist item

		if(track_data.attr('data-limit') != undefined && !AWPUtils.isEmpty(track_data.attr('data-limit')) && AWPUtils.isNumber(track_data.attr('data-limit')) && Math.abs(parseInt(track_data.attr('data-limit'),10)) != 0){
			obj.limit = Math.abs(parseInt(track_data.attr('data-limit'),10));
		}
		if(track_data.attr('data-thumb') != undefined && !AWPUtils.isEmpty(track_data.attr('data-thumb'))){
			obj.thumb = track_data.attr('data-thumb');
		}else if(track_data.attr('data-thumb-default') != undefined && !AWPUtils.isEmpty(track_data.attr('data-thumb-default'))){
			obj.thumbDefault = track_data.attr('data-thumb-default');
		}
		if(track_data.attr('data-thumb-quality') != undefined && !AWPUtils.isEmpty(track_data.attr('data-thumb-quality'))){
			obj.thumbQuality = track_data.attr('data-thumb-quality');
		}
		if(track_data.attr('data-title') != undefined && !AWPUtils.isEmpty(track_data.attr('data-title'))){
			obj.title = track_data.attr('data-title');
		}
		if(track_data.attr('data-artist') != undefined && !AWPUtils.isEmpty(track_data.attr('data-artist'))){
			obj.artist = track_data.attr('data-artist');
		}
		if(track_data.attr('data-description') != undefined && !AWPUtils.isEmpty(track_data.attr('data-description'))){
			obj.description = track_data.attr('data-description');
		}
		if(track_data.attr('data-download') != undefined){
			obj.download = track_data.attr('data-download');
		}
    if(track_data.attr('data-duration') != undefined){
			obj.duration = track_data.attr('data-duration');
		}
		if(track_data.attr('data-id3') != undefined){
			obj.id3 = true;
		}
		if(track_data.attr('data-dir-url') != undefined && !AWPUtils.isEmpty(track_data.attr('data-dir-url'))){
			obj.dirurl = track_data.attr('data-dir-url');
		}
		if(track_data.attr('data-peak-dir') != undefined && !AWPUtils.isEmpty(track_data.attr('data-peak-dir'))){
			obj.peakdir = track_data.attr('data-peak-dir');
		}
		if(track_data.attr('data-start') != undefined && !AWPUtils.isEmpty(track_data.attr('data-start')) && AWPUtils.isNumber(track_data.attr('data-start')) && track_data.attr('data-start') != 0){
			obj.start = Math.abs(track_data.attr('data-start'));
		}
		if(track_data.attr('data-end') != undefined && !AWPUtils.isEmpty(track_data.attr('data-end')) && AWPUtils.isNumber(track_data.attr('data-end')) && track_data.attr('data-end') != 0){
			obj.end = Math.abs(track_data.attr('data-end'));
		}

		if(track_data.attr('data-duration') != undefined && !AWPUtils.isEmpty(track_data.attr('data-duration')) && AWPUtils.isNumber(track_data.attr('data-duration')) && Math.abs(track_data.attr('data-duration')) != 0){
			obj.duration = Math.abs(track_data.attr('data-duration'));
		}
		if(track_data.attr('data-playback-rate') != undefined){
			obj.playbackRate = 1;
			if(!AWPUtils.isEmpty(track_data.attr('data-playback-rate')) && AWPUtils.isNumber(track_data.attr('data-playback-rate')) && track_data.attr('data-playback-rate') != 0){
				obj.playbackRate = Math.abs(track_data.attr('data-playback-rate'));
			}
		}
		if(track_data.attr('data-link') != undefined && !AWPUtils.isEmpty(track_data.attr('data-link'))){
			obj.link = track_data.attr('data-link');
			obj.target = '_blank';
			if(track_data.attr('data-target') != undefined && !AWPUtils.isEmpty(track_data.attr('data-target'))){
				obj.target = track_data.attr('data-target');
			}
		}
		if(track_data.attr('data-share') != undefined){
			obj.share = track_data.attr('data-share');
		}	
		if(track_data.attr('data-remote') != undefined){
			obj.remote = true;
		}	

		return obj;
	}

	function checkProcessCounter() {
		 playlistProcessCounter++;
		 if(playlistProcessCounter>playlistLength - 1){
			buildPlaylist();
		 }else{
			var data = playlistProcessDataUrl[playlistProcessCounter], type = playlistProcessDataUrl[playlistProcessCounter].type;

			if(RegExp('^audio$').test(type)) {
				 playlistProcessData.push(data); 
				 checkProcessCounter();
			}else if($.inArray(type, soundTypeArr) > -1){ 
				 _AWPSoundLoader.setData(data);
			}else if(RegExp('^folder$').test(type)) {
				 processFolder(type);
			}else if(RegExp('^gdrive-folder$').test(type)) {
				 processGdriveFolder(type);
			}else{
				console.log('Wrong data-type in playlist! Type = ' + type);
				checkProcessCounter();
			}	
		 }
	}

	//############################################//
	/* folder */
	//############################################//

	function processFolder(type){

		if(window.location.protocol == 'file:'){
			console.log('Reading files from folders locally is not possible! This requires online server connection.');
			checkProcessCounter();
			return false;
		}

		var item = playlistProcessDataUrl[playlistProcessCounter], path = item.path.replace(/\/\//g, "/"), url = sourcePath + 'includes/folder_parser.php';
		
		var data = {dir: path, limit: item.limit || 10000};

		if(item.id3)id3Start = id3Counter = playlistProcessData.length-1;

		$.ajax({
			type: 'GET',
			url: url,
			data: data,
			dataType: "json"
		}).done(function(media) {

			//console.log(media)

			AWPUtils.keysrt(media, 'filename');

			var i, len = media.length, entry, obj, full_path;
			for(i=0; i < len; i++){
				entry = media[i];

				if(/.mp3/.test(entry.basename)){

					obj= $.extend(true, {}, item);
					obj.type = 'audio';

					if(obj.dirurl) full_path = obj.dirurl + entry.basename;
					else full_path = entry.fullpath;

					obj.mp3 = full_path;

					if(typeof obj.download !== 'undefined' && AWPUtils.isEmpty(obj.download))obj.download = full_path;
					if(typeof obj.share !== 'undefined' && AWPUtils.isEmpty(obj.share))obj.share = full_path;

					if(!obj.title)obj.title = entry.filename;

					playlistProcessData.push(obj); 

					id3Counter++;
					
				}
			}

			if(item.id3){
				getId3();
			}else{
				checkProcessCounter();
			} 
	  
		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log('Error processing folder: ' + jqXHR.responseText);
			checkProcessCounter();
		});	
	}

	//############################################//
	/* google drive folder */
	//############################################//

	function processGdriveFolder(type){

		if(window.location.protocol == 'file:'){
			console.log('Reading files from folders locally is not possible! This requires online server connection.');
			checkProcessCounter();
			return false;
		}

		if(AWPUtils.isEmpty(settings.gDriveAppId)){
			console.log('gDriveAppId has not been set in settings!');
			checkProcessCounter();
			return false;
		}

		var item = playlistProcessDataUrl[playlistProcessCounter], url = "https://www.googleapis.com/drive/v3/files?q='" + item.path + "'+in+parents&key=" + settings.gDriveAppId;

		$.ajax({
			url: url,
			dataType: "jsonp"
		}).done(function(media) {

			var i, len = media.files.length, entry, obj, full_path, imgArr = [], mediaArr = [];

			for(i=0; i < len; i++){

				entry = media.files[i];

				//split audio and images (assume there is equal number of audio and image files named the same in gdrive folder!)
				if(/.mp3|mpeg|mpeg3/.test(entry.mimeType)){	
					mediaArr.push(entry);
					AWPUtils.keysrt(mediaArr, 'name');
				}else if(/.jpg|jpeg|png/.test(entry.mimeType)){	
					imgArr.push(entry);
					AWPUtils.keysrt(imgArr, 'name');
				}
			}

			len = mediaArr.length;

			for(i=0; i < len; i++){

				entry = mediaArr[i];

				obj= $.extend(true, {}, item);
				obj.type = 'audio';

				full_path = 'https://drive.google.com/uc?export=view&id=' + entry.id;

				obj.mp3 = full_path;
				console.log(full_path)

				if(typeof obj.download !== 'undefined' && AWPUtils.isEmpty(obj.download))obj.download = 'https://drive.google.com/uc?export=download&id=' + entry.id;

				if(typeof obj.share !== 'undefined' && AWPUtils.isEmpty(obj.share))obj.share = 'https://drive.google.com/open?id=' + entry.id;

				if(imgArr.length){
					if(!obj.thumb && imgArr[i])obj.thumb = 'https://drive.google.com/uc?export=view&id=' + imgArr[i].id;
				}

				if(!obj.title)obj.title = entry.name.substr(0, entry.name.lastIndexOf('.'));

				playlistProcessData.push(obj); 
				
			}

			checkProcessCounter();
	  
		}).fail(function(jqXHR, textStatus, errorThrown) {
			console.log('Error processing gdrive folder: ' + jqXHR.responseText);
			checkProcessCounter();
		});	
	}

	//############################################//
	/* id3 tags */
	//############################################//
		
	function getId3(){
		/*https://github.com/aadsm/jsmediatags*/

		var item = playlistProcessData[id3Counter],
		url = item.mp3;

		jsmediatags.read(url, {
		    onSuccess: function(tag) {
		        var tags = tag.tags, image = tags.picture;
		        //console.log(tags)

		        if(tags.artist) item.artist = tags.artist;
				if(tags.title) item.title = tags.title;
				if(tags.album) item.album = tags.album;
				if(image){
					var base64String = "", i, len = image.data.length;
					for(i = 0; i < len; i++)base64String += String.fromCharCode(image.data[i]);
					item.thumb = "data:" + image.format + ";base64," + window.btoa(base64String);
				}

				id3Counter--;
				if(id3Counter > id3Start){
					getId3();  
				}else{
					checkProcessCounter();
				}

		    },
		    onError: function(error) {
		        console.log("ID3 error: ", error.type, error.info);
		        getId3();  
		    }
		});
	}
	
	//############################################//
	/* build playlist */
	//############################################//

	function buildPlaylist() {
	
		var counter, i, j = !addTrackProcess ? playlistDataArr.length : insertPosition, len = playlistProcessData.length, type, div, a, data, thumbsrc, thumbImg, playlistThumb, counter_add=0, currentInsert, counter_title;

		for (i=0; i < len; i++){
			
			counter = i+j;
			if(addTrackProcess)counter_add++;

			data = playlistProcessData[i];
			//console.log(data)
			type = data.type;
			
			if(usePlaylist){

				if(!data.origclasses)data.origclasses = 'awp-playlist-item';
				div = $('<div class="'+data.origclasses+'"/>').attr({'data-type': type});
				
				delete data.origclasses;

				if(!addTrackProcess){
					div.appendTo(playlistContent);
				}else{
					if(!currentInsert){
						if(endInsert){
							div.appendTo(playlistContent);
						}else{
							playlistContent.children('div').eq(insertPosition).before(div);
						}
					}else{
						currentInsert.after(div);
					}
					currentInsert=div;
				}

				a = $('<a class="awp-playlist-non-selected" href="#"/>').on('click', clickPlaylistItem).appendTo(div);
				if(!isMobile)a.on('mouseenter', overPlaylistItem).on('mouseleave', outPlaylistItem);

				//thumb
				if($.inArray('thumb', playlistItemContent) != -1){
					var thumb = data.thumb || data.thumbDefault;
					if(thumb){
						var img = new Image();
						img.className = "awp-hidden";
						img.onload = function () {
						    this.className = "awp-visible";
						}
						img.src = thumb;
						$('<span class="awp-playlist-thumb"></span>').append(img).appendTo(a);
					}
				}

				//title
				if($.inArray('title', playlistItemContent) != -1){
					$('<span class="awp-playlist-title"></span>').appendTo(a);
				}


				/*
				var default_path;

				if(mp3Support && data.mp3)default_path = data.mp3;
				else if(wavSupport && data.wav)default_path = data.wav;
				else default_path = data.path;

				if(!AWPUtils.relativePath(default_path))default_path = AWPUtils.qualifyURL(default_path);
				
				if(typeof data.share === 'undefined')data.share = default_path;
				if(typeof data.download === 'undefined')data.download = default_path;
				*/


				//create playlist icons (url, download)
				if(data.link){
					var target=data.target||'_blank';
					var p = $('<a class="awp-link" href="'+data.link+'" target="'+target+'"><i class="fa fa-external-link"></i></a>');
					a.after(p);
				}
				if(data.download){
					if(hasDownloadSupport){
						var d = $('<a class="awp-download" href="'+data.download+'" download><i class="fa fa-download"></i></a>');
					}else{
						var d = $('<a class="awp-download" href="#" title="download"><i class="fa fa-download"></i></a>');
					}
					a.after(d);
				}
				if(data.duration){
					var p = $('<span class="media-time">'+data.duration+'</span>');
					a.after(p);
				}
				if(data.content){//copy any content to generated playlist item
					div.after(data.content);
					delete data.content;
				}
				
			}

			//check title for allowed chars
			//if(data.title)data.title = AWPUtils.checkKey(data.title);

			playlistDataArr.splice(counter, 0, {id: counter, type: type, data: data});
				
		}

		if(usePlaylist)checkTracks();

		lastPlaylist = playlistContent;

		updatePlaylist();	

		//console.log('playlistDataArr = ', playlistDataArr);
		//console.log('playlistLength = ', playlistLength);

		if(!addTrackProcess && !apiCreation){
			_AWPPlaylistManager.setPlaylistItems(playlistLength);
		}else{
			var current_counter = _AWPPlaylistManager.getCounter();
			_AWPPlaylistManager.setPlaylistItems(playlistLength, false);
			
			if(insertPosition <= current_counter){
				if(!endInsert)_AWPPlaylistManager.reSetCounter(current_counter+counter_add);
			}
			if(playlistFirstInit){
				playlistFirstInit=false;	
				if(addTrackPlayit && !isMobile)setAutoPlay(true);
				_AWPPlaylistManager.setCounter(insertPosition, false);
			}else if(addTrackPlayit){
				_AWPPlaylistManager.setCounter(insertPosition, false);
			}

			if(_AWPPlaylistManager.getCounter()!=-1)activePlaylistItemId=_AWPPlaylistManager.getCounter();
			
		}

		endInit();
		
		if(playlistLength == 0)if(typeof awpPlaylistEmpty !== 'undefined')awpPlaylistEmpty(self, instanceName, playlistContent);//callback
		playlistLoaded = true;
		if(typeof awpPlaylistEndLoad !== 'undefined')awpPlaylistEndLoad(self, instanceName, playlistContent);//callback
		
	}

	function updatePlaylist(){

		playlistLength = playlistDataArr.length;

		if(usePlaylist){

			var i = 0, title, item, a, title_node;
			playlistTitleArr=[];

			playlistContent.find('div.awp-playlist-item').each(function(){
				
				item = $(this).attr('data-id', i);
				a = item.find('.awp-playlist-non-selected, .awp-playlist-selected').attr('data-id', i);
				title_node = a.find('.awp-playlist-title');

				if(title_node.length){

					title = getTitle(i);

					if(useFilter){
						playlistTitleArr.push(title);
						playlistDataArr[i].data.title_full = title;//artist+title for sort
					}

					if(useNumbersInPlaylist){
						title_node.html(AWPUtils.counter(i) + numberTitleSeparator + title);
					}else{
						title_node.html(title);
					}

				}

				playlistDataArr[i].id = i;

				i++;

			});

			if(usePlaylistScroll && playlistScrollInit && playlistLength>0){
				if(playlistScrollOrientation.charAt(0) == 'h'){
					playlistInner.mCustomScrollbar('update');
				}
			}

		}

	}

	function checkTracks(){

		playlistContent.children('.awp-playlist-item').each(function(){

			if(!hasDownloadSupport){
				$(this).find('a[class=awp-download]').off('click').on('click',function(e){
					e.preventDefault();

					if(typeof _AWPDownloadManager !== 'undefined'){
						var id = $(this).parent().attr('data-id'), data = playlistDataArr[id].data;
						if(typeof data.download !== 'undefined' && !AWPUtils.isEmpty(data.download))_AWPDownloadManager.download(data.download, data.title||'media');
					}	

				});
			}

		});

	}

	function checkPlaylistScroll(theme){
			
		var axis = playlistScrollOrientation.charAt(0) == 'h' ? 'x' : 'y';

		playlistInner.mCustomScrollbar({
			 axis:axis,
			 theme:theme || settings.playlistScrollTheme,
			 scrollInertia:0,
			 mouseWheel:{ 
			 	normalizeDelta: true,
			 	deltaFactor: 50,
			 	preventDefault: true
			 },
			 keyboard:{enable:false},//sortableTracks will override this!
			 advanced:{ autoExpandHorizontalScroll: true }
		});

		playlistScrollInit = true;

	}
	
	function endLoad(){
		apiCreation=false;	
		addTrackProcess=false;
		hidePreloader();
		playlistTransitionOn=false;		
	}

	function endInit(){
		apiCreation = false;	
		addTrackProcess=false;
		hidePreloader();
		playlistTransitionOn=false;

		if(!componentInited){
			componentInited=true;

			if(usePlaylist && !playlistScrollInit && usePlaylistScroll){
				checkPlaylistScroll();
			}

			setVolume(volume);
		
			if(typeof awpSetupDone != undefined)awpSetupDone(self, instanceName);

		}

		if(!autoInitActiveItem){//only after destroy playlist, not after add media
			if(!addTrackProcess && playlistLength>0){
				var ai = settings.activeItem;
				if(ai > playlistLength-1)ai = playlistLength-1;
				if(ai>-1)_AWPPlaylistManager.setCounter(ai, false);
				autoInitActiveItem=true;
			}
		}

	}

	function startInit(){

		if(!AWPUtils.isEmpty(activePlaylist)){
			setPlaylist(activePlaylist);	
		}else{
			endInit();
		}
	}

	//############################################//
	/* misc */
	//############################################//

	function mediaEndHandler(){
		if(typeof awpMediaEnd !== 'undefined')awpMediaEnd(self, instanceName, _AWPPlaylistManager.getCounter());//callback

		if(autoAdvanceToNextMedia){
			self.nextMedia();
		}else{

			var start = currMediaData.start || 0;

			if(mediaEndAction == 'loop'){
				
				wavesurfer.play(start);

			}else if(mediaEndAction == 'rewind'){

				wavesurfer.pause();
				wavesurfer.seekTo(start/wavesurfer.getDuration());

			}else if(mediaEndAction == 'stop'){

				wavesurfer.pause();

			}
		}
	}

	function destroyMedia(){
		if(!componentInited || typeof mediaType === 'undefined') return;
		if(usePlaylist && activePlaylistItemId!=-1)enableActivePlaylistItem();
		cleanMedia();
		_AWPPlaylistManager.reSetCounter();
	}

	function cleanMedia(){

		if(remoteDownloadAjax){
            remoteDownloadAjax.abort();
            remoteDownloadAjax = null;
        }

        if(loadPeaksAjax){
            loadPeaksAjax.abort();
            loadPeaksAjax = null;
        }

		if(typeof wavesurfer !== 'undefined'){
			wavesurfer.empty();
			wavesurfer.setSkipArrayBuffer(false);
		}

		waveformPreloader.css('opacity',0);
		waveform.removeClass('awp-visible').addClass('awp-hidden');

		waveformImgMode = false;
		waveformImgLoad.empty();
	    waveformImgProgress.empty();
	    waveformImg.css('display','none').removeClass('awp-visible').addClass('awp-hidden');
		
	    hidePlayerElements();

		if(useTime){
			mediaTimeCurrent.html('0:00');
			mediaTimeTotal.html('0:00');
		}

	    playerThumb.empty();

		setPlayIcon();	

		mediaType = null;
		mediaPlaying=false;
		mediaStarted=false;
		addTrackPlayit=false;

		if(typeof awpCleanMedia != undefined)awpCleanMedia(self, instanceName);//callback
		
	}
	
	function destroyPlaylist(){

		if(mediaType)cleanMedia();

		if(usePlaylist){
			lastPlaylist.find('.awp-playlist-item').remove();//remove only playlist items!
		}

		lastPlaylist=null;
		activePlaylist=null;
		addTrackProcess=false;
		playlistFirstInit = false;
		playlistLoaded=false;
		activePlaylistItemId=-1;
		autoInitActiveItem=false;
		playlistLength=0;
		playlistProcessCounter=-1;
		playlistDataArr=[];
		playlistProcessData=[];
		playlistProcessDataUrl=[];
		_AWPPlaylistManager.reSetCounter();
		if(useFilter)searchFilter.val(filterText);
		if(useSort){//reset sort because tracks are loaded with no sort
			alphaSortOrder = false;
			sortAlpha.find('i').removeClass('fa-sort-alpha-asc').addClass('fa-sort-alpha-desc');
		}
		
		if(typeof awpDestroyPlaylist != undefined)awpDestroyPlaylist(self, instanceName, playlistContent);//callback
	}

	function setAutoPlay(val){
		autoPlay = val;
	}

	function showPlayerElements(){//when waveform is shown
    	mediaTimeCurrent.removeClass('awp-hidden').addClass('awp-visible');
    	mediaTimeTotal.removeClass('awp-hidden').addClass('awp-visible');
    }

    function hidePlayerElements(){
    	mediaTimeCurrent.removeClass('awp-visible').addClass('awp-hidden');
    	mediaTimeTotal.removeClass('awp-visible').addClass('awp-hidden');
    }

	function setPlayIcon(){
		playbackToggle.find('i').removeClass('fa-pause').addClass('fa-play');
	}

	function setPauseIcon(){
		playbackToggle.find('i').removeClass('fa-play').addClass('fa-pause');
	}
	
	function hidePreloader(){
		preloader.css('display','none');
	}
	function showPreloader(){
		preloader.css('display','block');
	}
	
	function setTitle(i){
		
		if(typeof i === 'string'){
			var title = i;
		}else if(typeof i === 'number'){
			var title = getTitle(i);
			if(useNumbersInPlaylist)title = AWPUtils.counter(i) + numberTitleSeparator + title;
		}
		
		mediaTitle.html(title);

	}
	
	function getTitle(i){
		var data = playlistDataArr[i].data, title = '';

		if(typeof data.artist !== 'undefined' && !AWPUtils.isEmpty(data.artist) && typeof data.title !== 'undefined' && !AWPUtils.isEmpty(data.title)){
			title = data.artist + artistTitleSeparator + data.title;
		}
		else if(typeof data.artist === 'undefined' && typeof data.title !== 'undefined' && !AWPUtils.isEmpty(data.title)){
			title = data.title;
		}
		else if(typeof data.artist !== 'undefined' && !AWPUtils.isEmpty(data.artist) && typeof data.title === 'undefined'){
			title = data.artist;
		}

		return title;
	}

	this.getTitleFormatted = function(data, separator){
		var title = '', sep = separator || artistTitleSeparator;

		if(typeof data.artist !== 'undefined' && !AWPUtils.isEmpty(data.artist) && typeof data.title !== 'undefined' && !AWPUtils.isEmpty(data.title)){
			title = data.artist + sep + data.title;
		}
		else if(typeof data.artist === 'undefined' && typeof data.title !== 'undefined' && !AWPUtils.isEmpty(data.title)){
			title = data.title;
		}
		else if(typeof data.artist !== 'undefined' && !AWPUtils.isEmpty(data.artist) && typeof data.title === 'undefined'){
			title = data.artist;
		}

		return title;
	}

	//############################################//
	/* window resize */
	//############################################//
	
	_window.resize(function() {
		if(!componentInited) return false;
		if(windowResizeTimeoutID) clearTimeout(windowResizeTimeoutID);
		windowResizeTimeoutID = setTimeout(self.resize, windowResizeTimeout);

		if(waveformImgMode)waveformImgProgress.width(waveformImg.width());
	});
	
	self.resize = function(){
	    if(wavesurfer){
            wavesurfer.drawer.containerWidth = wavesurfer.drawer.container.clientWidth;
            wavesurfer.drawBuffer();
            if(!mediaPlaying)wavesurfer.drawer.updateProgress(wavesurfer.backend.getPlayedPercents());//doesnt do that internally?
        }
	}
	
	//############################################//
	/* api */
	//############################################//
	
	/*call play after peaks have been drawn from peak file*/
	this.loadPlayMedia = function() {
		if(!componentInited) return false;
		if(!mediaType) return false;
		if(!currMediaData) return false;
		if(currMediaData.mp3 && wavesurfer.backend.peaks)wavesurfer.load(currMediaData.mp3, wavesurfer.backend.peaks, true);
		mediaPlaying=true;
	}
	this.playMedia = function() {
		if(!componentInited) return false;
		if(!mediaType) return false;
		if(mediaPlaying) return false;
		if(typeof wavesurfer !== 'undefined')wavesurfer.play();
		mediaPlaying=true;
	}
	this.pauseMedia = function() {	
		if(!componentInited) return false;
		if(!mediaType) return false;
		if(!mediaPlaying) return false;
		if(typeof wavesurfer !== 'undefined')wavesurfer.pause();
		mediaPlaying=false;
	}	
	this.checkMedia = function(act) {	
		if(!componentInited) return false;
		if(!mediaType) return false;
		var action = act.toLowerCase();
		if(mediaPlaying){
			if(action=='pause'){
				if(typeof wavesurfer !== 'undefined')wavesurfer.pause();
				mediaPlaying=false;
			}
		}
	}	
	this.togglePlayback = function(){
		if(!componentInited) return false;
		if(!mediaType) return false;
		if(typeof wavesurfer !== 'undefined'){
			if(!mediaStarted && drawWaveWithoutLoad && wavesurfer.backend.peaks){
				autoPlay=true;
				self.loadPlayMedia();
			}else{
				wavesurfer.playPause();
			}
		}
	}
	this.stop = function() {
		if(!componentInited) return false;
		if(!mediaType) return false;
		if(typeof wavesurfer !== 'undefined')wavesurfer.stop();
		mediaPlaying=false;
	}
	this.nextMedia = function() {
		if(!componentInited) return false;
		if(!lastPlaylist) return false;
		_AWPPlaylistManager.advanceHandler(1, true);
	}
	this.previousMedia = function() {
		if(!componentInited) return false;
		if(!lastPlaylist) return false;
		_AWPPlaylistManager.advanceHandler(-1, true);
	}
	this.loadMedia = function(value) {
		if(!componentInited) return false;
		if(playlistTransitionOn) return false;
		if(!lastPlaylist) return false;
		if(typeof value === 'undefined'){
			alert('loadMedia method requires either a track number or a track title to load. LoadMedia failed.');
			return false;	
		}
		
		if(typeof value === 'string'){
			
			var i, found;
			for(i=0;i<playlistLength;i++){
				if(value == playlistDataArr[i].data.title){
					value = i;
					found=true;
					break;	
				}
			}
			if(!found){
				alert('Track with title "' + value + '" doesnt exist. LoadMedia failed.');
				return false;	
			}
			
		}else if(typeof value === 'number'){
			
			if(value<0){
				alert('Invalid track number. Track number  "' + value + '" doesnt exist. LoadMedia failed.');
				return false;
			}
			else if(value > playlistLength-1){
				alert('Invalid track number. Track number  "' + value + '" doesnt exist. LoadMedia failed.');
				return false;
			}
			
		}else{
			alert('loadMedia method requires either a track number or a track title to load. LoadMedia failed.');
			return false;	
		}
		
		_AWPPlaylistManager.processPlaylistRequest(value);
	}
	
	this.loadPlaylist = function(id) {
		if(!componentInited) return false;
		if(playlistTransitionOn) return false;

		if(typeof id === 'undefined' || AWPUtils.isEmpty(id)){
			alert('loadPlaylist method requires id parameter. loadPlaylist failed.');
			return false;
		}
		if(activePlaylist == id)return false;//playlist already loaded!
		activePlaylist = id;
		setPlaylist(activePlaylist);
	}
	this.addTrack = function(format, track, playit, position) {
		if(!componentInited || playlistTransitionOn) return false;
		
		if(typeof format === 'undefined'){
			alert('addTrack method requires format parameter. AddTrack failed.');
			return false;
		}
		if(typeof track === 'undefined'){
			alert('addTrack method requires track parameter. AddTrack failed.');
			return false;
		}
		addTrackPlayit=false;
		if(typeof playit !== 'undefined'){
			addTrackPlayit = playit;
		}
		
		var len = 1, is_array = false;	
		
		if(typeof track === 'string' || Object.prototype.toString.call(track) === '[object Object]'){
			//console.log('addtrack object');
		}else if(Object.prototype.toString.call(track) === '[object Array]'){
			//console.log('addtrack array');
			len = track.length;
			is_array=true;
		}else{
			alert('addTrack method requires track as string, object or array parameter. AddTrack failed.');
			return false;
		}
		
		insertPosition = position;
		endInsert = false;
		addTrackProcess=true;
		
		if(lastPlaylist){
			if(typeof insertPosition !== 'undefined'){
				if(insertPosition<0){
					alert('Invalid position to insert track to. Position number "' + position + '" doesnt exist. AddTrack failed.');
					return false;
				}
				else if(insertPosition > playlistLength){
					alert('Invalid position to insert track to. Position number "' + position + '" doesnt exist. AddTrack failed.');
					return false;
				}
				else if(insertPosition == playlistLength){
					endInsert=true;
				}
			}else{
				endInsert=true;
				insertPosition = playlistLength;	
			}
		}else{//first time create playlist from addTrack method
			if(typeof insertPosition !== 'undefined'){
				if(insertPosition!=0){
					alert('Invalid position to insert track to. Position number "' + position + '" doesnt exist. AddTrack failed.');
					return false;
				}
			}else{
				insertPosition=0;
			}
			endInsert=true;
		}
		
		playlistTransitionOn=true;
		showPreloader();
		playlistLoaded=false;
		apiCreation=true;
		
		playlistProcessCounter=-1;
		playlistProcessData=[];
		playlistProcessDataUrl=[];
		var i, _track, obj, item;
		
		for(i=0; i < len; i++){
			_track = is_array ? track[i] : track;
			obj = {};
			if(format == 'html'){
				obj = getTrackData(createTrackFromHtml(_track));
			}else{//data
				obj = _track;
			}
			playlistProcessDataUrl.push(obj);
		}
		playlistLength=playlistProcessDataUrl.length;
	
		playlistFirstInit = false;
		if(!lastPlaylist)playlistFirstInit = true;
		lastPlaylist = playlistContent;
		
		checkProcessCounter();

	}
	
	function createTrackFromHtml(data){
		var obj = $(data), str, ul, li;
		str = $('<div>').append(obj.clone()).html();//convert object to string
		ul = document.createElement('div');
		ul.innerHTML = str;
		li = ul.firstChild;
		return $(li);
	}

	this.inputAudio = function(data){
		if(!componentInited) return false;
		if(playlistTransitionOn) return false;

		if(typeof data === 'undefined'){
			alert('inputAudio method requires data parameter. inputAudio failed.');
			return false;
		}
		
		//enable active item, if exist, but dont dispose current playlist
		enableActivePlaylistItem();
		_AWPPlaylistManager.reSetCounter();
		
		currMediaData = data;
		mediaType = 'audio';//only type audio!

		if(currMediaData.title != undefined){
			setTitle(self.getTitleFormatted(currMediaData));
		}

		if(isMobile)setAutoPlay(true);

		initAudio();
	}
	
	this.removeTrack = function(id) {
		if(!componentInited || playlistTransitionOn) return false;
		if(!lastPlaylist) return false;
		
		if(typeof id === 'undefined'){
			alert('removeTrack method requires id parameter. removeTrack failed.');
			return false;
		}

		if(typeof id === 'string'){
			
			var i, found = false;
			for(i=0;i<playlistLength;i++){

				if(id == playlistDataArr[i].data.title){
					id = i;
					found=true;
					break;	
				}
			}
			if(!found){
				alert('Track with title "' + id + '" doesnt exist. RemoveTrack failed.');
				return false;	
			}
			
		}else if(typeof id === 'number'){
			
			id = parseInt(id,10);
			
			if(id<0 || id > playlistLength-1){
				alert('Invalid id number. Track number  "' + id + '" doesnt exist. RemoveTrack failed.');
				return false;
			}
			
		}else{
			alert('removeTrack method requires either a id number or a track title to remove. removeTrack failed.');
			return false;
		}

		if(playlistDataArr[id]){
			updateTrackRemoval(id);
		}else{
			alert('RemoveTrack with id "' + id + '" failed.');
		}
	}
	function updateTrackRemoval(id){

		playlistContent.children('.awp-playlist-item').eq(id).remove();
		playlistDataArr.splice(id,1);
		
		updatePlaylist();	
		
		if(playlistLength > 0){
			
			var current_counter = _AWPPlaylistManager.getCounter();
			if(id == current_counter){//remove number equal to current counter
				cleanMedia();	
				_AWPPlaylistManager.setPlaylistItems(playlistLength);//counter resets to -1
			}else{
				_AWPPlaylistManager.setPlaylistItems(playlistLength, false);
				if(id < current_counter){//remove number less than current counter
					_AWPPlaylistManager.reSetCounter(_AWPPlaylistManager.getCounter()-1);//if we removed media before current playing media, descrease counter!	
				}else{//remove number larger than current counter, current counter doesnt change
				}
			}

			if(_AWPPlaylistManager.getCounter()!=-1){
				activePlaylistItemId=_AWPPlaylistManager.getCounter();
				setTitle(activePlaylistItemId);
			}
			else if(typeof awpMediaEmpty != undefined)awpMediaEmpty(self, instanceName);//callback
			
		}else{//we removed last track in playlist
			destroyPlaylist();	
		}
	}

	this.sort = function(type, reverse) {
		if(!componentInited) return false;
		if(!lastPlaylist) return false;
		
		if(typeof type === 'undefined'){
			console.log('Sort method requires type parameter. Sort method failed.');
			return false;
		}
		
		var items = playlistContent.children('div.awp-playlist-item'), len = items.length, v = type.toLowerCase();
		if(len<2)return false;

		if(v == 'title'){

			AWPUtils.keysrt2(playlistDataArr, 'data', 'title_full', reverse || false);

			var i, arr = [];
			for(i=0;i<playlistLength;i++){
				arr.push(playlistDataArr[i].id);
			}

		}
		else if(v == 'random'){

			var arr = AWPUtils.randomiseArray(len);

			playlistDataArr = AWPUtils.sortArray(playlistDataArr, arr);
			
		}else{
			console.log('Sort method requires type parameter. Sort method failed.');
			return false;
		}

		var current_counter = _AWPPlaylistManager.getCounter(), orderedItems;

		//reposition data
		playlistContent.append($.map(arr, function(v) {
		  return items[v];
		}));
	
		//update counter
		if(current_counter!=-1){

			var new_counter = playlistContent.children("div.awp-playlist-item[data-id='" + current_counter + "']").index();//find new position of active item

			_AWPPlaylistManager.reSetCounter(new_counter);

			activePlaylistItemId=new_counter;

		}

		updatePlaylist();

	}

	this.destroyMedia = function() {
		if(!componentInited) return false;
		destroyMedia();
	}
	this.destroyPlaylist = function() {
		if(!componentInited) return false;
		if(!lastPlaylist) return false;
		destroyPlaylist();
	}
	this.destroyPlugin = function() {
		if(!componentInited) return false;
		destroyMedia();
		if(typeof wavesurfer !== 'undefined')wavesurfer.destroy();
	}
	this.setPlaybackRate = function(v){
		if(!componentInited) return false;
		if(typeof _AWPPlaylistManager !== 'undefined' && _AWPPlaylistManager.getCounter()==-1) return false;
		if(typeof wavesurfer !== 'undefined')wavesurfer.setPlaybackRate(v);
	}
	this.toggleRandom = function(v) {
		if(!componentInited) return false;
		if(typeof _AWPPlaylistManager === 'undefined') return false;
		if(typeof v !== 'undefined')randomPlay=v;
		else randomPlay=!randomPlay;
		_AWPPlaylistManager.setRandom(randomPlay);

		if(randomPlay)randomToggle.find('i').removeClass(iconOffClass).addClass(iconOnClass); 
		else randomToggle.find('i').removeClass(iconOnClass).addClass(iconOffClass); 
	}
	this.toggleLoop = function(v) {
		if(!componentInited) return false;
		if(typeof _AWPPlaylistManager === 'undefined') return false;
		if(typeof v !== 'undefined')loopingOn=v;
		else loopingOn=!loopingOn;
		_AWPPlaylistManager.setLooping(loopingOn);

		if(loopingOn)loopToggle.find('i').removeClass(iconOffClass).addClass(iconOnClass); 
		else loopToggle.find('i').removeClass(iconOnClass).addClass(iconOffClass); 
	}
	this.setVolume = function(val) {
		if(!componentInited) return false;
		if(val<0) val=0;
		else if(val>1) val=1;
		volume = val;
		setVolume();
	}
	this.getVolume = function() {
		if(!componentInited) return false;
		return volume;
	}
	this.toggleMute = function(){
		if(!componentInited) return false;
		toggleMute();
	}
	this.seek = function(v){
		if(!componentInited) return false;
		if(!mediaType) return false;
		if(typeof wavesurfer !== 'undefined')wavesurfer.seekTo(v/wavesurfer.getDuration());
	}
	this.getCurrentTime = function(){
		if(!componentInited) return false;
		if(!mediaType) return false;
		var v;
		if(typeof wavesurfer !== 'undefined')v = wavesurfer.getCurrentTime();
		return v;
	}
	this.getDuration = function(){
		if(!componentInited) return false;
		if(!mediaType) return false;
		var v;
		if(typeof wavesurfer !== 'undefined')v = wavesurfer.getDuration();
		return v;
	}
	this.initPlaylistScroll = function(theme){
		if(!componentInited) return false;
		checkPlaylistScroll(theme);
	}
	this.destroyPlaylistScroll = function(){
		if(!componentInited) return false;
		playlistInner.mCustomScrollbar('destroy');
		playlistScrollInit = false;
	}
	this.updatePlaylistScroll = function(){
		if(!componentInited) return false;
		playlistInner.mCustomScrollbar('update');
	}
	this.setAutoPlay = function(val){
		if(!componentInited) return false;
		setAutoPlay(val);
	}
	this.getSetupDone = function(){
		return componentInited;
	}
	this.getPlaylistTransition = function(){
		return playlistTransitionOn;
	}
	this.getPlaylistLoaded = function(){
		return playlistLoaded;
	}
	this.getMediaPlaying = function(){
		if(!componentInited) return false;
		return mediaPlaying;
	}
	this.getActiveItemId = function(){
		if(!componentInited) return false;
		return typeof _AWPPlaylistManager !== 'undefined' ? _AWPPlaylistManager.getCounter() : null;
	}
	this.getPlaylistLength = function(){
		if(!componentInited) return false;
		return AWPUtils.isNumber(playlistLength) ? playlistLength : 0;
	}
	this.getPlaylistItems = function(){
		if(!componentInited) return false;
		var arr = [];
		playlistContent.find('div.awp-playlist-item').each(function(){
			arr.push($(this));
		});
		return arr;
	}
	this.getPlaylistData = function(){
		return playlistDataArr || null;	
	}
	this.getCurrMediaData = function(){
		if(!componentInited) return false;
		return currMediaData;	
	}
	this.getTitle = function(i) {
		return getTitle(i);
	}
	this.getSettings = function(){
		if(!componentInited) return false;
		return settings || null;
	}
	this.getInstanceName = function(){
		if(!componentInited) return false;
		return instanceName;
	}
	this.toggleInteraction = function() {
		if(typeof wavesurfer !== 'undefined')wavesurfer.toggleInteraction();
	}
	this.overControls = function(e){
		overControls(e);
	}
	this.outControls = function(e){
		outControls(e);
	}
	this.showPlayerElements2 = function(){
		showPlayerElements2();
	}

	startInit();
	return this;

	}
	
})(jQuery);

