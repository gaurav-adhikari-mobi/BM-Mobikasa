(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var p="left",o="right",e="up",x="down",c="in",z="out",m="none",s="auto",l="swipe",t="pinch",A="tap",j="doubletap",b="longtap",y="hold",D="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,B="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(G){var F=f(this),E=F.data(B);if(E&&typeof G==="string"){if(E[G]){return E[G].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+G+" does not exist on jQuery.swipe")}}else{if(!E&&(typeof G==="object"||!G)){return w.apply(this,arguments)}}return F};f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:z};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:D,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(E){if(E&&(E.allowPageScroll===undefined&&(E.swipe!==undefined||E.swipeStatus!==undefined))){E.allowPageScroll=m}if(E.click!==undefined&&E.tap===undefined){E.tap=E.click}if(!E){E={}}E=f.extend({},f.fn.swipe.defaults,E);return this.each(function(){var G=f(this);var F=G.data(B);if(!F){F=new C(this,E);G.data(B,F)}})}function C(a4,av){var az=(a||d||!av.fallbackToMouseEvents),J=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ay=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",U=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",S=az?null:"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,ab=0,a1=0,aZ=0,G=1,aq=0,aJ=0,M=null;var aR=f(a4);var Z="start";var W=0;var aQ=null;var T=0,a2=0,a5=0,ad=0,N=0;var aW=null,af=null;try{aR.bind(J,aN);aR.bind(aD,a9)}catch(ak){f.error("events not supported "+J+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(J,aN);aR.bind(aD,a9);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(B,null);aR=null};this.option=function(bc,bb){if(av[bc]!==undefined){if(bb===undefined){return av[bc]}else{av[bc]=bb}}else{f.error("Option "+bc+" does not exist on jQuery.swipe.options")}return null};function aN(bd){if(aB()){return}if(f(bd.target).closest(av.excludedElements,aR).length>0){return}var be=bd.originalEvent?bd.originalEvent:bd;var bc,bb=a?be.touches[0]:be;Z=g;if(a){W=be.touches.length}else{bd.preventDefault()}ag=0;aP=null;aJ=null;ab=0;a1=0;aZ=0;G=1;aq=0;aQ=aj();M=aa();R();if(!a||(W===av.fingers||av.fingers===i)||aX()){ai(0,bb);T=at();if(W==2){ai(1,be.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}if(av.swipeStatus||av.pinchStatus){bc=O(be,Z)}}else{bc=false}if(bc===false){Z=q;O(be,Z);return bc}else{if(av.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[be.target]);if(av.hold){bc=av.hold.call(aR,be,be.target)}},this),av.longTapThreshold)}ao(true)}return null}function a3(be){var bh=be.originalEvent?be.originalEvent:be;if(Z===h||Z===q||am()){return}var bd,bc=a?bh.touches[0]:bh;var bf=aH(bc);a2=at();if(a){W=bh.touches.length}if(av.hold){clearTimeout(af)}Z=k;if(W==2){if(a1==0){ai(1,bh.touches[1]);a1=aZ=au(aQ[0].start,aQ[1].start)}else{aH(bh.touches[1]);aZ=au(aQ[0].end,aQ[1].end);aJ=ar(aQ[0].end,aQ[1].end)}G=a7(a1,aZ);aq=Math.abs(a1-aZ)}if((W===av.fingers||av.fingers===i)||!a||aX()){aP=aL(bf.start,bf.end);al(be,aP);ag=aS(bf.start,bf.end);ab=aM();aI(aP,ag);if(av.swipeStatus||av.pinchStatus){bd=O(bh,Z)}if(!av.triggerOnTouchEnd||av.triggerOnTouchLeave){var bb=true;if(av.triggerOnTouchLeave){var bg=aY(this);bb=E(bf.end,bg)}if(!av.triggerOnTouchEnd&&bb){Z=aC(k)}else{if(av.triggerOnTouchLeave&&!bb){Z=aC(h)}}if(Z==q||Z==h){O(bh,Z)}}}else{Z=q;O(bh,Z)}if(bd===false){Z=q;O(bh,Z)}}function L(bb){var bc=bb.originalEvent;if(a){if(bc.touches.length>0){F();return true}}if(am()){W=ad}a2=at();ab=aM();if(ba()||!an()){Z=q;O(bc,Z)}else{if(av.triggerOnTouchEnd||(av.triggerOnTouchEnd==false&&Z===k)){bb.preventDefault();Z=h;O(bc,Z)}else{if(!av.triggerOnTouchEnd&&a6()){Z=h;aF(bc,Z,A)}else{if(Z===k){Z=q;O(bc,Z)}}}}ao(false);return null}function a9(){W=0;a2=0;T=0;a1=0;aZ=0;G=1;R();ao(false)}function K(bb){var bc=bb.originalEvent;if(av.triggerOnTouchLeave){Z=aC(h);O(bc,Z)}}function aK(){aR.unbind(J,aN);aR.unbind(aD,a9);aR.unbind(ay,a3);aR.unbind(U,L);if(S){aR.unbind(S,K)}ao(false)}function aC(bf){var be=bf;var bd=aA();var bc=an();var bb=ba();if(!bd||bb){be=q}else{if(bc&&bf==k&&(!av.triggerOnTouchEnd||av.triggerOnTouchLeave)){be=h}else{if(!bc&&bf==h&&av.triggerOnTouchLeave){be=q}}}return be}function O(bd,bb){var bc=undefined;if((I()||V())||(P()||aX())){if(I()||V()){bc=aF(bd,bb,l)}if((P()||aX())&&bc!==false){bc=aF(bd,bb,t)}}else{if(aG()&&bc!==false){bc=aF(bd,bb,j)}else{if(ap()&&bc!==false){bc=aF(bd,bb,b)}else{if(ah()&&bc!==false){bc=aF(bd,bb,A)}}}}if(bb===q){a9(bd)}if(bb===h){if(a){if(bd.touches.length==0){a9(bd)}}else{a9(bd)}}return bc}function aF(be,bb,bd){var bc=undefined;if(bd==l){aR.trigger("swipeStatus",[bb,aP||null,ag||0,ab||0,W,aQ]);if(av.swipeStatus){bc=av.swipeStatus.call(aR,be,bb,aP||null,ag||0,ab||0,W,aQ);if(bc===false){return false}}if(bb==h&&aV()){aR.trigger("swipe",[aP,ag,ab,W,aQ]);if(av.swipe){bc=av.swipe.call(aR,be,aP,ag,ab,W,aQ);if(bc===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ab,W,aQ]);if(av.swipeLeft){bc=av.swipeLeft.call(aR,be,aP,ag,ab,W,aQ)}break;case o:aR.trigger("swipeRight",[aP,ag,ab,W,aQ]);if(av.swipeRight){bc=av.swipeRight.call(aR,be,aP,ag,ab,W,aQ)}break;case e:aR.trigger("swipeUp",[aP,ag,ab,W,aQ]);if(av.swipeUp){bc=av.swipeUp.call(aR,be,aP,ag,ab,W,aQ)}break;case x:aR.trigger("swipeDown",[aP,ag,ab,W,aQ]);if(av.swipeDown){bc=av.swipeDown.call(aR,be,aP,ag,ab,W,aQ)}break}}}if(bd==t){aR.trigger("pinchStatus",[bb,aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchStatus){bc=av.pinchStatus.call(aR,be,bb,aJ||null,aq||0,ab||0,W,G,aQ);if(bc===false){return false}}if(bb==h&&a8()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchIn){bc=av.pinchIn.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break;case z:aR.trigger("pinchOut",[aJ||null,aq||0,ab||0,W,G,aQ]);if(av.pinchOut){bc=av.pinchOut.call(aR,be,aJ||null,aq||0,ab||0,W,G,aQ)}break}}}if(bd==A){if(bb===q||bb===h){clearTimeout(aW);clearTimeout(af);if(Y()&&!H()){N=at();aW=setTimeout(f.proxy(function(){N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}},this),av.doubleTapThreshold)}else{N=null;aR.trigger("tap",[be.target]);if(av.tap){bc=av.tap.call(aR,be,be.target)}}}}else{if(bd==j){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("doubletap",[be.target]);if(av.doubleTap){bc=av.doubleTap.call(aR,be,be.target)}}}else{if(bd==b){if(bb===q||bb===h){clearTimeout(aW);N=null;aR.trigger("longtap",[be.target]);if(av.longTap){bc=av.longTap.call(aR,be,be.target)}}}}}return bc}function an(){var bb=true;if(av.threshold!==null){bb=ag>=av.threshold}return bb}function ba(){var bb=false;if(av.cancelThreshold!==null&&aP!==null){bb=(aT(aP)-ag)>=av.cancelThreshold}return bb}function ae(){if(av.pinchThreshold!==null){return aq>=av.pinchThreshold}return true}function aA(){var bb;if(av.maxTimeThreshold){if(ab>=av.maxTimeThreshold){bb=false}else{bb=true}}else{bb=true}return bb}function al(bb,bc){if(av.preventDefaultEvents===false){return}if(av.allowPageScroll===m){bb.preventDefault()}else{var bd=av.allowPageScroll===s;switch(bc){case p:if((av.swipeLeft&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case o:if((av.swipeRight&&bd)||(!bd&&av.allowPageScroll!=D)){bb.preventDefault()}break;case e:if((av.swipeUp&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break;case x:if((av.swipeDown&&bd)||(!bd&&av.allowPageScroll!=u)){bb.preventDefault()}break}}}function a8(){var bc=aO();var bb=X();var bd=ae();return bc&&bb&&bd}function aX(){return !!(av.pinchStatus||av.pinchIn||av.pinchOut)}function P(){return !!(a8()&&aX())}function aV(){var be=aA();var bg=an();var bd=aO();var bb=X();var bc=ba();var bf=!bc&&bb&&bd&&bg&&be;return bf}function V(){return !!(av.swipe||av.swipeStatus||av.swipeLeft||av.swipeRight||av.swipeUp||av.swipeDown)}function I(){return !!(aV()&&V())}function aO(){return((W===av.fingers||av.fingers===i)||!a)}function X(){return aQ[0].end.x!==0}function a6(){return !!(av.tap)}function Y(){return !!(av.doubleTap)}function aU(){return !!(av.longTap)}function Q(){if(N==null){return false}var bb=at();return(Y()&&((bb-N)<=av.doubleTapThreshold))}function H(){return Q()}function ax(){return((W===1||!a)&&(isNaN(ag)||ag<av.threshold))}function a0(){return((ab>av.longTapThreshold)&&(ag<r))}function ah(){return !!(ax()&&a6())}function aG(){return !!(Q()&&Y())}function ap(){return !!(a0()&&aU())}function F(){a5=at();ad=event.touches.length+1}function R(){a5=0;ad=0}function am(){var bb=false;if(a5){var bc=at()-a5;if(bc<=av.fingerReleaseThreshold){bb=true}}return bb}function aB(){return !!(aR.data(B+"_intouch")===true)}function ao(bb){if(bb===true){aR.bind(ay,a3);aR.bind(U,L);if(S){aR.bind(S,K)}}else{aR.unbind(ay,a3,false);aR.unbind(U,L,false);if(S){aR.unbind(S,K,false)}}aR.data(B+"_intouch",bb===true)}function ai(bc,bb){var bd=bb.identifier!==undefined?bb.identifier:0;aQ[bc].identifier=bd;aQ[bc].start.x=aQ[bc].end.x=bb.pageX||bb.clientX;aQ[bc].start.y=aQ[bc].end.y=bb.pageY||bb.clientY;return aQ[bc]}function aH(bb){var bd=bb.identifier!==undefined?bb.identifier:0;var bc=ac(bd);bc.end.x=bb.pageX||bb.clientX;bc.end.y=bb.pageY||bb.clientY;return bc}function ac(bc){for(var bb=0;bb<aQ.length;bb++){if(aQ[bb].identifier==bc){return aQ[bb]}}}function aj(){var bb=[];for(var bc=0;bc<=5;bc++){bb.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bb}function aI(bb,bc){bc=Math.max(bc,aT(bb));M[bb].distance=bc}function aT(bb){if(M[bb]){return M[bb].distance}return undefined}function aa(){var bb={};bb[p]=aw(p);bb[o]=aw(o);bb[e]=aw(e);bb[x]=aw(x);return bb}function aw(bb){return{direction:bb,distance:0}}function aM(){return a2-T}function au(be,bd){var bc=Math.abs(be.x-bd.x);var bb=Math.abs(be.y-bd.y);return Math.round(Math.sqrt(bc*bc+bb*bb))}function a7(bb,bc){var bd=(bc/bb)*1;return bd.toFixed(2)}function ar(){if(G<1){return z}else{return c}}function aS(bc,bb){return Math.round(Math.sqrt(Math.pow(bb.x-bc.x,2)+Math.pow(bb.y-bc.y,2)))}function aE(be,bc){var bb=be.x-bc.x;var bg=bc.y-be.y;var bd=Math.atan2(bg,bb);var bf=Math.round(bd*180/Math.PI);if(bf<0){bf=360-Math.abs(bf)}return bf}function aL(bc,bb){var bd=aE(bc,bb);if((bd<=45)&&(bd>=0)){return p}else{if((bd<=360)&&(bd>=315)){return p}else{if((bd>=135)&&(bd<=225)){return o}else{if((bd>45)&&(bd<135)){return x}else{return e}}}}}function at(){var bb=new Date();return bb.getTime()}function aY(bb){bb=f(bb);var bd=bb.offset();var bc={left:bd.left,right:bd.left+bb.outerWidth(),top:bd.top,bottom:bd.top+bb.outerHeight()};return bc}function E(bb,bc){return(bb.x>bc.left&&bb.x<bc.right&&bb.y>bc.top&&bb.y<bc.bottom)}}}));
// ---------------------------------------------------
//
// 		Lazzyload.js
//
//		@author :: Matt Simmons
//		@coauthor :: Andrew Mauney
//		@dependencies :: jQuery
//		@description :: Lazyload one or multiple
//						images by swapping out
//						their data-src for src
//		@version :: 0.1
//
//		Made with ❤️ in Columbus, Ohio by Rocket Code
//
// ---------------------------------------------------

;(function($, window, document){

  
	"use strict";

	//////////
	// Vars //
	//////////
	var pluginName = 'lazzyload',
		dataKey = 'plugin_' + pluginName,
		defaults = {
			each: '',
			done: '',
			className: 'lazyload',
			publishEvents: true
		};


	////////////
	// Define //
	////////////
	var Plugin = function(element, options) {

		// Set private vars
		this.element = (element.selector) ? element[0] : element;
		this.$element = element;

		// Spin it up
		this.init(options);

	};


	///////////////
	// Prototype //
	///////////////
	Plugin.prototype = {

		init: function(options) {
			this.settings = $.extend({}, defaults, options);
			this.$images = [];
			this.$element.toArray().forEach(function(element){
				this.$images = this.$images.concat((($(element).hasClass(this.settings.className)) ? $(element) : $(element).find('.'+this.settings.className)).toArray());
			}, this);

			this.numImages = this.$images.length;
			this.numLoaded = 0;
			this.queue = this.$images;

			this.load();
		},
		load: function(){
			var _this = this;
			this.$images.forEach(function(element){
				$(element)
					.on('load', { _this: _this }, imageHandler)
					.attr('src', $(element).attr('data-src'));
			});
		},
		imageLoaded: function(image, e){
			var params;

			// Set instance params
			this.numLoaded++;
			this.queue = this.queue.filter(function(obj){
				return obj !== image;
			});

			// Fire off .each()
			params = {
				type: 'lazzyload:loaded',
				image: image,
				queue: this.queue,
				numLoaded: this.numLoaded
			};
			if (typeof this.settings.each === 'function') this.settings.each($(image), params);
			if (this.settings.publishEvents) $(document).trigger(params);

			// Fire off .done()
			if (!this.queue.length) {
				params = {
					type: 'lazzyload:done',
					scope: this.$element.toArray(),
					numLoaded: this.numLoaded
				};
				if (typeof this.settings.done === 'function') this.settings.done(params);
				if (this.settings.publishEvents) $(document).trigger(params);
			}
		},
		ping: function(){
			console.log('pong'); // 🏓
		}

	};


	///////////////////////
	// Private Functions //
	///////////////////////
	function imageHandler(e) {
		var _this = e.data._this;
		_this.imageLoaded(this, e);
		$(this).off('load', imageHandler);
	}


	/////////////////
	// Expose $.fn //
	/////////////////
	$.fn[pluginName] = function (options) {
        var plugin = this.data(dataKey);

        if (plugin instanceof Plugin) {
            plugin.init(options);
        } else {
            plugin = new Plugin(this, options);
            this.data(dataKey, plugin);
        }

        return plugin;
    };


}(jQuery, window, document));

// ---------------------------------------------------
//
// 		## Example Usage
//
//		Use on a parent element to lazzyload all child images
//		--
//		$('.images-container').lazzyload();
//
//		Use on a single image element
//		--
//		$('#image').lazzyload();
//
//		Use on multiple elements, even mixing parent scope and singular scope!
//		--
//		$('.images-container, #image').lazzyload();
//
//		Cache it in a variable
//		--
//		var lazzyload = $('#image').lazzyload();
//
//		Call .ping() for added fun
//		--
//		var lazzyload = $('#image').lazzyload();
//		lazzyload.ping();
//
//		Use callbacks firing on each image loaded, as well as all images loaded
//		--
//		$('.images-container').lazzyload({
//			each: function($image, params){
//				// $image just loaded!!
//			},
//			done: function(params){
//				// all images just loaded!!
//			}
//		});
//
//		Use events firing on each image loaded, as well as all images loaded
//		--
//		$(document).on('lazzyload:loaded', function(e){
//			// e.image just loaded!!
//		});
//		$(document).on('lazzyload:done', function(e){
//			// e.scope just finished loading!!
//		});
//
//		Use with custom settings
//		--
//		$('.images-container').lazzyload({
//			each: function($image, params){},
//			done: function(params){},
//			className: 'lazyload',
//			publishEvents: true
//		});
//
// ---------------------------------------------------

  /////////////////////////////
 //  Rocket Code Admin Bar  //
/////////////////////////////

// # Requires: jQuery

// Namespace Check
var RC = RC || {};

RC.adminBar = (function(RC, $){

	function init() {

		var $rcab = $('#rc-admin-bar'),
			$rcabBtn = $rcab.find('> button'),
			$rcabPrimary = $rcab.find('> ul'),
			$rcabPi = $rcabPrimary.find('> li'),
			$rcabToggle = $rcabPi.find('> button'),
			$spLabel = $rcab.find('> p');
			//$secondary = $pi.find('> ul'),
			//$si = $secondary.find('li');

		if($rcab.length) {

			$rcabBtn.on('click', function() {
				if( $rcab.hasClass('open') ) {
					$rcabPi.removeClass('active');
					$rcab.removeClass('open');
				} else {
					$rcab.addClass('open');
				}
			});

			$rcabToggle.on('click', function() {
				if( $(this).parent().hasClass('active') ) {
					$(this).parent().removeClass('active');
				} else {
					$rcabPi.removeClass('active');
					$(this).parent().addClass('active');
				}
			});

			setTimeout(function() {
				// hackily grab storefront password before we discard iframe
				var $sadminBar = $('iframe#admin_bar_iframe').contents(),
					sp = $sadminBar.find('.store-password > span').html();
				
				if( sp.length ) {
					$spLabel.find('em').html(sp);
				} else {
					$spLabel.remove();
				}

				$sadminBar.remove();
			}, 500);

		} else {
			console.log("Note: you must include 'rc-admin-bar.liquid' in your theme.");
		}

	}

	return {
		init: init
	};

})(RC, jQuery);
////////////////////////////////
// RocketCode Cart API Helper //
////////////////////////////////

// # Requires: jQuery

// Namespace Check
var RC = RC || {};

RC.cart = (function(RC, $){

	// ## Params ## //
	// > data : {
	// 	  id: integer, // the variant_id
	// 	  quantity: integer
	// }
	// > success : $.done() callback
	// > failure : $.fail() callback
	function change(data, success, fail){
		$.ajax({
			type: 'POST',
			url: '/cart/change.js',
			data: data,
			dataType: 'json',
			cache: false
		}).done(function(response){
			if (typeof success === 'function') success(response);
			$(RC).trigger('cart:changed', [response, data]);
		}).fail(function(response){
			if (typeof fail === 'function') fail(response);
			$(RC).trigger('cart:failure', [response, data]);
		});
	}

	// ## Params ## //
	// > data : {
	// 	  id: integer, // the variant_id
	// 	  quantity: integer
	// }
	// > success : $.done() callback
	// > failure : $.fail() callback
	function update(data, success, fail){
		$.ajax({
			type: 'POST',
			url: '/cart/update.js',
			data: data,
			dataType: 'json',
			cache: false
		}).done(function(response){
			if (typeof success === 'function') success(response);
			$(RC).trigger('cart:updated', [response, data]);

		}).fail(function(response){
			if (typeof fail === 'function') fail(response);
			$(RC).trigger('cart:failure', [response, data]);
		});
	}

	// ## Params ## //
	// > data : {
	// 	  id: integer, // the variant_id
	// 	  quantity: integer
	// }
	// > success : $.done() callback
	// > failure : $.fail() callback
  
	function add(data, success, fail){

      	$.ajax({
			type: 'POST',
			url: '/cart/add.js',
			data: data,
			dataType: 'json',
			cache: false
		}).done(function(response){

          if (typeof success === 'function') success(response);
          $(RC).trigger('cart:item_added', [response, data]);

		}).fail(function(response){
			if (typeof fail === 'function') fail(response);
			$(RC).trigger('cart:failure', [response, data]);
		});
	}

	// ## Params ## //
	// > success : $.done() callback
	// > failure : $.fail() callback
	function getCart(success, fail){
		$.ajax({
			type: 'GET',
			url: '/cart.js',
			dataType: 'json',
			cache: false
		}).done(function(response){
			if (typeof success === 'function') success(response);
		}).fail(function(response){
			if (typeof fail === 'function') fail(response);
		});
	}

	// ## Params ## //
	// > handle : string - the product handle
	// > success : $.done() callback
	// > failure : $.fail() callback
	function getItem(handle, success, failure){
		$.ajax({
			type: 'GET',
			url: '/products/'+handle+'.js',
			dataType: 'json',
			cache: false
		}).done(function(response){
			if (typeof success === 'function') success(response);
		}).fail(function(response){
			if (typeof success === 'function') failure(response);
		});
	}

	function clearCart(success, failure){
		$.ajax({
			type: 'POST',
			url: '/cart/clear.js',
			dataType: 'json',
			cache: false
		}).done(function(response){
			if (typeof success === 'function') success(response);
console.log('cart cleared');
		}).fail(function(response){
			if (typeof success === 'function') failure(response);
		});
	}

	return {
		update: update,
		add: add,
		get: getCart,
		change: change,
		clear: clearCart,
		getItem: getItem
	};

})(RC, jQuery);
///////////////////////////
// RocketCode Lazyloader //
///////////////////////////

// # Requires: jQuery

// Namespace Check
var RC = RC || {};

RC.lazyloader = (function(RC, $){

	/*
	* scope -> class or id to provide context
	* callback -> optional callback
	*/
	function load(scope, callback) {
		var scopes = [].concat(scope),
			scopesLength = scopes.length,
			i;

		for (i = 0; i < scopesLength; i++){
			$(scopes[i]).find('.lazyload').each(function(index){
				$(this).attr('src', $(this).attr('data-src'))
					.on('load', function() {
						if ((index + 1) === scopesLength && typeof callback === 'function') callback();
					});
			});
		}
	}

	return {
		load: load
	};

})(RC, jQuery);

////////////////////////////////
// RocketCode Utility Helpers //
////////////////////////////////

// # Requires: jQuery

// Namespace Check
var RC = RC || {};

RC.utils = (function(RC, $){

	// ## Params ## //
	// > arr : array of items to shuffle
	// ## Return ## //
	// returns a shuffled array of items
	// ## Context ## //
	// see Fisher-Yates Shuffling (https://www.wikiwand.com/en/Fisher%E2%80%93Yates_shuffle)
	function shuffle(arr) {
		var i, j, temp;
		for (i = arr.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return arr;    
	}

	// ## Params ## //
	// > key : param key to search for
	// ## Return ## //
	// returns the value for said param key || null
	// ## Context ## //
	// see https://github.com/youbastard/jquery.getQueryParameters
	function getURLParam(key) {
		return decodeURIComponent((new RegExp('[?|&]' + key + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || ['',""])[1].replace(/\+/g, '%20')) || null;
	}

	// ## Params ## //
	// > str : param key to search for
	// ## Return ## //
	// returns all url params as an object { paramName: "paramValue" }
	// ## Context ## //
	// see https://github.com/youbastard/jquery.getQueryParameters
	function getURLParams(str) {
		return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n=n.split("="),this[n[0]]=n[1],this;}.bind({}))[0];
	}

	// ## Return ## //
	// returns the current URL hash
	function getURLHash() {
		return window.location.hash.split('#')[1];
	}

	// ## Return ## //
	// returns the current URL parts after the domain in an array
	function getURLParts(){
		return window.location.pathname.split(/\s*\/\s*/).filter(function(n){ return n != '' });
	}

	// Decodes HTML entities
	// WARNING: Very dangerous to use for user generated content.
	// ONLY USE FOR TRUSTED CONTENT
	function htmlDecode(input){
	  var e = document.createElement('div');
	    e.innerHTML = input;
	    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
	}
	
	/**
	 * Function to allow both click and touch events to happen
	 *      but ONLY once
	 * @param input
	 *
	 * To use: getClickTouch(whatever, function(){
	 *              //actions to take
	 *          });
	 */
	function getClickTouch(input, fnc){
		$(input).on('click touchstart', function(e){
			e.stopPropagation();
			e.preventDefault();
			if (e.handled !== true){
				fnc(e);
				e.handled = true;
			}
			else {
				return false;
			}
		});
	}


	/*
		A function that takes cents and converts it to dollars, while truncating cents if it's an even dollar amount

		Example: centsToDollars(2000);
		Returns: 20

		Example: centsToDollars(2055);
		Returns: 20.55
	*/
	function centsToDollars(cents) {
		return (+cents % 100) === 0 ? (+cents / 100) : (+cents / 100).toFixed(2);
	}
	
	return {
		shuffle: shuffle,
		urlParam: getURLParam,
		urlParams: getURLParams,
		urlHash: getURLHash,
		urlParts: getURLParts,
		getClickTouch: getClickTouch,
		centsToDollars: centsToDollars
	};

})(RC, jQuery);
//////////////////////////////////////////
/// RocketCode Shopify Preview Button ////
//////////////////////////////////////////

// # Requires: Nothing

/*
NOTES:

Tired of that terrible shopify preview bar? Then you've come to the right place! This module condenses that down into a small button on the bottom left of the screen, allowing you to know what preview theme you're in without the visual clutter!

*/


var RC = RC || {};

RC.shopifyPreviewButton = (function(RC) {
	var count = 0;

	function watchForBar() {

		window.setTimeout(function() {

			if(document.getElementById('shopify-theme-controls') !== null) {
				relocateBar();

			} else if(count > 30) {
				return;
			} else {
				count += 1;
				watchForBar();
			}

		}, 250);
	}

	function relocateBar() {
		var shopifyBar = document.getElementById('shopify-theme-controls'),
			minimize = document.querySelectorAll('a[title=Minimize]')[0],
			themeName = document.querySelectorAll('.shopify-preview-bar__title')[0],
			hideTheme = document.querySelectorAll('.shopify-preview-bar__btn')[0];

		//set initial bar styles
		shopifyBar.setAttribute('style', 'display: block !important; width: 40px; height: 40px; padding: 5px; pointer-events: none;');

		//theme name display
		themeName.setAttribute('style', 'position: absolute; left: 45px; bottom: 0; width: 300px; background: rgba(0,0,0,.7); padding: 5px; transition: transform .2s ease-in; transform: translateX(0);')
		themeName.textContent = themeName.textContent.replace(/You are currently previewing the theme: /ig, '');

		//minimize button
		minimize.textContent = '×';
		minimize.setAttribute('style', 'position: absolute; font-size: 50px; color: white; bottom: -32px; left: -21px; text-decoration: none; pointer-events: auto;')

		//remove preview button
		hideTheme.setAttribute('style', 'display: none;');

		//hide theme name
		themeNameTimeout(themeName);

		//theme name show
		minimize.addEventListener('mouseover', function() {
			themeName.style.transform = 'translateX(0)';
			themeNameTimeout(themeName);
		});
	}

	function themeNameTimeout(name) {
		window.setTimeout(function() {
			name.style.transform = 'translateX(-350px)';
		}, 5000);
	}

	function init() {
		watchForBar();
	}

	return {
		init: init
	}

})(RC);

// add this to a js file: RC.shopifyPreviewButton.init();

var BRR = BRR || {};
BRR.product = (function(BRR, $){

	var $product,
		$header;

	function bindEvents(){
		$(window).resize(calcHeight);
	}

	function calcHeight(){
		$product.css('min-height', 'calc(100vh - ' + $header.height() + 'px)');
	}

	return {
		init: function(){
			$product = $('section.product');
			$header = $('#shopify-section-header');
			calcHeight();
			bindEvents();
		}
	};

})(BRR, jQuery);

BRR.product.buy = (function(BRR, $){

	var $buy, $buyAddOn, $newbuyAddOn;

	function bindEvents() {

      	$buy.on('click', function(){
          	var $this = $(this);
          	var $selected = $('.product-dropdown__list option:selected');

          	var itemsData = [];

          	var attachedProduct, attachedProductID;
          	var variantName = $selected.attr('data-title');
			var selectedVariantID = $('.product-dropdown__list').val();
          
            var productItem = {};
            productItem.quantity = 1;
            productItem.id = selectedVariantID;
            productItem.properties = {};

            $this.addClass('loading');

          	if($('.cs-bonus-products .cs-bonus-input:checked').length > 0) {

              attachedProduct = $('.cs-bonus-products .cs-bonus-input:checked').val();
              attachedProductID = $('.cs-bonus-products .cs-bonus-input:checked').data('product');
            }

          	var isBundle = [32063933612137, 39457507534, 39457508238, 32063929352297, 1127306002446, 1127306067982, 32063932498025, 29140262617193, 29140262649961];

            if(isBundle.indexOf(Number(selectedVariantID)) > -1){
                var varientForCal = variantName;
				var bonusPillow = 'Standard Bear Pillow (2x)';

              	if(variantName == "Cal King" || variantName == "King") {
                  bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                }

              	var productName = "";

                if(location.href.indexOf('/bear-sleep-bundle') > -1) {
                  	productName = "Bear Mattress";
                } else if(location.href.indexOf('/bear-hybrid-bundle') > -1) {
                  	productName = "Bear Hybrid";
                } else if(location.href.indexOf('/bear-pro-bundle') > -1) {
                  	productName = "Bear Pro";
                }

                if(variantName == "Cal King") {
                    varientForCal = "King"
                }

                productItem.properties['Variant'] = variantName+' '+productName+'--'+variantName+' '+'Bear Protector--'+bonusPillow;
            }

          	if(attachedProduct) {
                var bonusItem = {};

              	if(attachedProductID == 6768279158889) {
                  var bonusPillow = 'Standard Bear Pillow (2x)';

                  if(variantName == "Cal King" || variantName == "King") {
                    bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                  }
                } else {
                  var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress Protector';

                  if(variantName == "Cal King" || variantName == "King") {
                    bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress Protector';
                  }
                }

                bonusItem.quantity = 1;
                bonusItem.id = attachedProduct;
                bonusItem.properties = {};
                bonusItem.properties['FREE'] = attachedProduct;
                // bonusItem.properties['Variant'] = bonusPillow;
                bonusItem.properties['Variant'] = bonusPillow+"--"+variantName+" "+"Sheet Set";
                productItem.properties['combo'] = attachedProduct;
              	productItem.properties['Celliant'] = 'No';

                itemsData.push(bonusItem);
            }
          
            itemsData.push(productItem);
          
            var finalItem = {};
          	finalItem['items'] = itemsData;

            RC.cart.add(finalItem, function(cart){
              
              $this.removeClass('loading');
              $('.frequent-products input:checked').prop("checked", false);
              
              RC.cart.get(function(response){
                ajaxifyShopify.updateCountPrice(response);
                ajaxifyShopify.buildCart(response);
              });
            });

          	return false;
		});

      	$buyAddOn.on('click', function(){
          console.log("ddddd oodd");
            var $this = $(this);
          	var $selected = $('.product-dropdown__list option:selected');

            var attachedProduct, attachedProductID;
            var frequentProducts = []; 

          	var itemsData = [];

          	var variantName = $selected.attr('data-title');

          	if(variantName.includes(' / ')) {
              	variantName = variantName.split(' / ')[0];
            }

          	var selectedVariantID = $('.product-dropdown__list').val();

            var productItem = {};
            productItem.quantity = 1;
            productItem.id = selectedVariantID;
            productItem.properties = {};

           // bear original 
           // var material = $("#material").val();
          //console.log("material"+material)
            // if(material!=""){
            // productItem.properties['material'] = material
            // }
          // bear original 
          
            $this.addClass('loading');

          	if($('.cs-bonus-products .cs-bonus-input:checked').length > 0) {

              attachedProduct = $('.cs-bonus-products .cs-bonus-input:checked').val();
              attachedProductID = $('.cs-bonus-products .cs-bonus-input:checked').data('product');
            }

          	if($('.frequent-products .product-tiles-check:checked').length > 0) {

              	$('.frequent-products .product-tiles-check:checked').each(function() {

                  	var frequentID = $(this).val();
                  	var frequentAddon = $(this).data('addon');

                  	var frequentItem = {};
                    frequentItem.quantity = 1;
                    frequentItem.id = frequentID;

                  	if(frequentAddon) {

                      frequentItem.properties = {};
                      var bonusItem = {};
                      bonusItem.properties = {};

                      if(frequentID == 2358863167593) {
                        var bonusPillow = 'Standard Cooling Pillows (2-pack)';
                        var bonusProtector = variantName + ' Bear Mattress Protector';

                        if(variantName == "Cal King" || variantName == "King") {
                          bonusPillow = 'King Cooling Pillows (2-pack)';
                          bonusProtector = variantName + ' Bear Mattress Protector';
                        }

                        if(variantName == "Split King") {
                          bonusPillow = 'King Cooling Pillows (2-pack)';
                          bonusProtector = 'Twin XL Bear Mattress Protector (2x)';
                        }

                        bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

                      } else if(attachedProductID == 6768279158889) {
                        var bonusPillow = 'Standard Bear Pillows (2-pack)';
                        var bonusProtector = variantName + ' Bear Mattress Protector';

                        if(variantName == "Cal King" || variantName == "King") {
                          bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                          bonusProtector = variantName + ' Bear Mattress Protector';
                        }

                        if(variantName == "Split King") {
                          bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                          bonusProtector = 'Twin XL Bear Mattress Protector (2x)';
                        }

                        bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

                      } else if(attachedProductID == 6553413451881) {
                        var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                        var bonusProtector = variantName + ' Terry Mattress Protector';

                        if(variantName == "Cal King" || variantName == "King") {
                          bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                          bonusProtector = variantName + ' Terry Mattress Protector';
                        }

                        if(variantName == "Split King") {
                          bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                          bonusProtector = 'Twin XL Terry Mattress Protector (2x)';
                        }

                        bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

                      } else {
                        var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                        var bonusProtector = variantName + ' Terry Mattress Protector';

                        if(variantName == "Cal King" || variantName == "King") {
                          bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                          bonusProtector = variantName + ' Terry Mattress Protector';
                        }
                        if(variantName == "Split King") {
                          bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                          bonusProtector = 'Twin XL Terry Mattress Protector (2x)';
                        }

                        bonusItem.properties['Variant'] = bonusPillow;
                      }

                      bonusItem.quantity = 1;
                      bonusItem.id = frequentAddon;
                      bonusItem.properties['_FREE'] = frequentAddon;
                      frequentItem.properties['_combo'] = frequentAddon;
function getRandom5DigitNumber() {
                return Math.floor(10000 + Math.random() * 90000);
                 }
               // var random5DigitNumber = getRandom5DigitNumber(); 
               //  bonusItem.properties['_pair'] = random5DigitNumber;
               //  frequentItem.properties['_pair'] = random5DigitNumber;
                      itemsData.push(bonusItem);
                    }
                  
                  	itemsData.push(frequentItem);
                });
            }
          
            var isBundle = [32063933612137, 39457507534, 39457508238, 32063929352297, 1127306002446, 1127306067982, 32063932498025, 29140262617193, 29140262649961];

			if(isBundle.indexOf(Number(selectedVariantID)) > -1){
                var varientForCal = variantName;
				var bonusPillow = 'Standard Bear Pillow (2x)';

              	if(variantName == "Cal King" || variantName == "King") {
                  bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                }

              	var productName = "";

                if(location.href.indexOf('/bear-sleep-bundle') > -1) {
                  	productName = "Bear Mattress";
                } else if(location.href.indexOf('/bear-hybrid-bundle') > -1) {
                  	productName = "Bear Hybrid";
                } else if(location.href.indexOf('/bear-pro-bundle') > -1) {
                  	productName = "Bear Pro";
                }

                if(variantName == "Cal King") {
                    varientForCal = "King"
                }

                productItem.properties['Variant'] = variantName+' '+productName+'--'+variantName+' '+'Bear Protector--'+bonusPillow;
            }
          
          	if(attachedProduct) {
                var bonusItem = {};
                bonusItem.properties = {};

              	if(attachedProductID == 2358863167593) {
                  var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                  var bonusProtector = variantName + ' Bear Mattress Protector';

                  if(variantName == "Cal King" || variantName == "King") {
                    bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                    bonusProtector = variantName + ' Bear Mattress Protector';
                  }

                  if(variantName == "Split King") {
                    bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                    bonusProtector = 'Twin XL Bear Mattress Protector (2x)';
                  }

                  bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

				} else if(attachedProductID == 6768279158889) {
                  var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                  var bonusProtector = variantName + ' Bear Mattress Protector';

                  if(variantName == "Cal King" || variantName == "King") {
                    bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                    bonusProtector = variantName + ' Bear Mattress Protector';
                  }

                  if(variantName == "Split King") {
                    bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                    bonusProtector = 'Twin XL Bear Mattress Protector (2x)';
                  }

                  bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

                } else if(attachedProductID == 6553413451881) {
                  var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                  var bonusProtector = variantName + ' Terry Mattress Protector';

                  if(variantName == "Cal King" || variantName == "King") {
                    bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                    bonusProtector = variantName + ' Terry Mattress Protector';
                  }

                  if(variantName == "Split King") {
                    bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                    bonusProtector = 'Twin XL Terry Mattress Protector (2x)';
                  }

                  bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

                } else {
                  var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                  var bonusProtector = variantName + ' Terry Mattress Protector';

                  if(variantName == "Cal King" || variantName == "King") {
                    bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                    bonusProtector = variantName + ' Terry Mattress Protector';
                  }

                  if(variantName == "Split King") {
                    bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                    bonusProtector = 'Twin XL Terry Mattress Protector (2x)';
                  }

                  bonusItem.properties['Variant'] = bonusPillow;
                }

                bonusItem.quantity = 1;
                bonusItem.id = attachedProduct;
                bonusItem.properties['_FREE'] = attachedProduct;
                productItem.properties['_combo'] = attachedProduct;
                function getRandom5DigitNumber() {
                return Math.floor(10000 + Math.random() * 90000);
                 }
               // var random5DigitNumber = getRandom5DigitNumber(); 
               //  bonusItem.properties['_pair'] = random5DigitNumber;
               //  productItem.properties['_pair'] = random5DigitNumber;
                itemsData.push(bonusItem);
            }
          
            itemsData.push(productItem);
          
            var finalItem = {};
          	finalItem['items'] = itemsData;

            RC.cart.add(finalItem, function(cart){
              
              $this.removeClass('loading');
              $('.frequent-products input[type="checkbox"]:checked').prop("checked", false);
              
              RC.cart.get(function(response){
                ajaxifyShopify.updateCountPrice(response);
                ajaxifyShopify.buildCart(response);
                
              });
            });

          	return false;
          });

// web Component


      
//web component
          
        $newbuyAddOn.on('click', function(){
          console.log("ddddd oodd");
            var $this = $(this);
          	var $selected = $('.product-dropdown__list option:selected');

            var attachedProduct, attachedProductID;
            var frequentProducts = []; 

          	var itemsData = [];

          	var variantName = $selected.attr('data-title');

          	if(variantName.includes(' / ')) {
              	variantName = variantName.split(' / ')[0];
            }

          	var selectedVariantID = $('.product-dropdown__list').val();

            var productItem = {};
            productItem.quantity = 1;
            productItem.id = selectedVariantID;
            productItem.properties = {};

           // bear original 
           // var material = $("#material").val();
          //console.log("material"+material)
            // if(material!=""){
            // productItem.properties['material'] = material
            // }
          // bear original 
          
            $this.addClass('loading');

          	if($('.cs-bonus-products .cs-bonus-input:checked').length > 0) {

              attachedProduct = $('.cs-bonus-products .cs-bonus-input:checked').val();
              attachedProductID = $('.cs-bonus-products .cs-bonus-input:checked').data('product');
            }

          	if($('.frequent-products .product-tiles-check:checked').length > 0) {

              	$('.frequent-products .product-tiles-check:checked').each(function() {

                  	var frequentID = $(this).val();
                  	var frequentAddon = $(this).data('addon');

                  	var frequentItem = {};
                    frequentItem.quantity = 1;
                    frequentItem.id = frequentID;

                  	if(frequentAddon) {

                      frequentItem.properties = {};
                      var bonusItem = {};
                      bonusItem.properties = {};

                      if(frequentID == 2358863167593) {
                        var bonusPillow = 'Standard Cooling Pillows (2-pack)';
                        var bonusProtector = variantName + ' Bear Mattress Protector';

                        if(variantName == "Cal King" || variantName == "King") {
                          bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                          bonusProtector = variantName + ' Bear Mattress Protector';
                        }

                        if(variantName == "Split King") {
                          bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                          bonusProtector = 'Twin XL Bear Mattress Protector (2x)';
                        }

                        bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

                      } else if(attachedProductID == 6768279158889) {
                        var bonusPillow = 'Standard Bear Pillows (2-pack)';
                        var bonusProtector = variantName + ' Bear Mattress Protector';

                        if(variantName == "Cal King" || variantName == "King") {
                          bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                          bonusProtector = variantName + ' Bear Mattress Protector';
                        }

                        if(variantName == "Split King") {
                          bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                          bonusProtector = 'Twin XL Bear Mattress Protector (2x)';
                        }

                        bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

                      } else if(attachedProductID == 6553413451881) {
                        var bonusPillow = 'King Cirrus Cloud Pillow (2x)';
                        var bonusProtector = variantName + ' Terry Mattress Protector';

                        if(variantName == "Cal King" || variantName == "King") {
                          bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                          bonusProtector = variantName + ' Terry Mattress Protector';
                        }

                        if(variantName == "Split King") {
                          bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                          bonusProtector = 'Twin XL Terry Mattress Protector (2x)';
                        }

                        bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

                      } else {
                        var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                        var bonusProtector = variantName + ' Terry Mattress Protector';

                        if(variantName == "Cal King" || variantName == "King") {
                          bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                          bonusProtector = variantName + ' Terry Mattress Protector';
                        }
                        if(variantName == "Split King") {
                          bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                          bonusProtector = 'Twin XL Terry Mattress Protector (2x)';
                        }

                        bonusItem.properties['Variant'] = bonusPillow;
                      }

                      bonusItem.quantity = 1;
                      bonusItem.id = frequentAddon;
                      bonusItem.properties['_FREE'] = frequentAddon;
                      frequentItem.properties['_combo'] = frequentAddon;
function getRandom5DigitNumber() {
                return Math.floor(10000 + Math.random() * 90000);
                 }
               // var random5DigitNumber = getRandom5DigitNumber(); 
               //  bonusItem.properties['_pair'] = random5DigitNumber;
               //  frequentItem.properties['_pair'] = random5DigitNumber;
                      itemsData.push(bonusItem);
                    }
                  
                  	itemsData.push(frequentItem);
                });
            }
          
            var isBundle = [32063933612137, 39457507534, 39457508238, 32063929352297, 1127306002446, 1127306067982, 32063932498025, 29140262617193, 29140262649961];

			if(isBundle.indexOf(Number(selectedVariantID)) > -1){
                var varientForCal = variantName;
				var bonusPillow = 'Standard Bear Pillow (2x)';

              	if(variantName == "Cal King" || variantName == "King") {
                  bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                }

              	var productName = "";

                if(location.href.indexOf('/bear-sleep-bundle') > -1) {
                  	productName = "Bear Mattress";
                } else if(location.href.indexOf('/bear-hybrid-bundle') > -1) {
                  	productName = "Bear Hybrid";
                } else if(location.href.indexOf('/bear-pro-bundle') > -1) {
                  	productName = "Bear Pro";
                }

                if(variantName == "Cal King") {
                    varientForCal = "King"
                }

                productItem.properties['Variant'] = variantName+' '+productName+'--'+variantName+' '+'Bear Protector--'+bonusPillow;
            }
          
          	if(attachedProduct) {
                var bonusItem = {};
                bonusItem.properties = {};

              	if(attachedProductID == 2358863167593) {
                  var bonusPillow = 'Standard Cooling Pillows (2-pack)';
                  var bonusProtector = variantName + ' Bear Mattress Protector';

                  if(variantName == "Cal King" || variantName == "King") {
                    bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                    bonusProtector = variantName + ' Bear Mattress Protector';
                  }

                  if(variantName == "Split King") {
                    bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                    bonusProtector = 'Twin XL Bear Mattress Protector (2x)';
                  }

                  bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

				} else if(attachedProductID == 6768279158889) {
                  var bonusPillow = 'Standard Bear Pillows (2-pack)';
                  var bonusProtector = variantName + ' Bear Mattress Protector';

                  if(variantName == "Cal King" || variantName == "King") {
                    bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                    bonusProtector = variantName + ' Bear Mattress Protector';
                  }

                  if(variantName == "Split King") {
                    bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                    bonusProtector = 'Twin XL Bear Mattress Protector (2x)';
                  }

                  bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

                } else if(attachedProductID == 6553413451881) {
                  var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                  var bonusProtector = variantName + ' Terry Mattress Protector';

                  if(variantName == "Cal King" || variantName == "King") {
                    bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                    bonusProtector = variantName + ' Terry Mattress Protector';
                  }

                  if(variantName == "Split King") {
                    bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                    bonusProtector = 'Twin XL Terry Mattress Protector (2x)';
                  }

                  bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

                } else {
                  var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                  var bonusProtector = variantName + ' Terry Mattress Protector';

                  if(variantName == "Cal King" || variantName == "King") {
                    bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                    bonusProtector = variantName + ' Terry Mattress Protector';
                  }

                  if(variantName == "Split King") {
                    bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                    bonusProtector = 'Twin XL Terry Mattress Protector (2x)';
                  }

                  bonusItem.properties['Variant'] = bonusPillow;
                }

                bonusItem.quantity = 1;
                bonusItem.id = attachedProduct;
                bonusItem.properties['_FREE'] = attachedProduct;
                productItem.properties['_combo'] = attachedProduct;
function getRandom5DigitNumber() {
                return Math.floor(10000 + Math.random() * 90000);
                 }
               // var random5DigitNumber = getRandom5DigitNumber(); 
               //  bonusItem.properties['_pair'] = random5DigitNumber;
               //  productItem.properties['_pair'] = random5DigitNumber;
                itemsData.push(bonusItem);
            }
          
            itemsData.push(productItem);
          
            var finalItem = {};
          	finalItem['items'] = itemsData;

            RC.cart.add(finalItem, function(cart){
              
              $this.removeClass('loading');
              $('.frequent-products input:checked').prop("checked", false);
              
              RC.cart.get(function(response){
                ajaxifyShopify.updateCountPrice(response);
                ajaxifyShopify.buildCart(response);
                
                setTimeout(function(){
                    document.location.href = "/cart/checkout";
                }, 1000);
              });
            });

          	return false;
          });

      	$(BRR).on('product:select', function(e){

          var $cents = parseInt(e.price.toString().replace(',','')) * 100;

          if($cents < 5000) {
            $(".affirm-as-low-as").html("&nbsp;");
          }

          affirm.ui.refresh();
        });

        $(document).on('product:added', function(){
          // console.log('added!');
        });
	}

	return {
		init: function(){
			$buy = $('.product-buy__button');
          	$buyAddOn = $('.product-buy__button_add_on');
            $newbuyAddOn = $('.new-product-buy__button_add_on');
			bindEvents();
		}
	};

})(BRR, jQuery);
BRR.product.slider = (function(BRR, $){

// 	var $transition;

// 	function bindEvents(){
// 		$('.product-slider__controls-thumb').on('click', function(){
//           	moveSlider($(this).attr('data-index'));

//           	if($('.product-slider__controls-thumb.has-video-thumb').length > 0) {

//               if($(this).hasClass('has-video-thumb')) {
//                 // player.playVideo();
//               } else {
//                 player.pauseVideo();
//               }
//             }
// 		});

//       	$(document).keydown(function(e) {
//           	if(!$("body").hasClass("ajaxcart--is-visible")) {

//         	var	$current = $('.product-slider__slide.active'),
// 				current_index = Number($current.attr('data-index'));
// 			switch (e.which) {
// 				case 37: // left -> previous slide
// 					moveSlider(((current_index === 1) ? $('.product-slider__slide').length : current_index - 1), true);
// 					break;
// 				case 39: // right -> next slide
// 					moveSlider(((current_index === $('.product-slider__slide').length) ? 1 : current_index + 1), true);
// 					break;
// 				default: return; // exit this handler for other keys
// 			}
//             }
// 		});

//       	$('.product-slider').swipe({
// 			swipe: function(e, direction){
// 				var	$current = $('.product-slider__slide.active'),
// 					current_index = Number($current.attr('data-index'));
// 				if (direction === 'right') {
// 					// previous
// 					moveSlider(((current_index === 1) ? $('.product-slider__slide').length : current_index - 1), true);
// 				} else if (direction === 'left') {
// 					// next
// 					moveSlider(((current_index === $('.product-slider__slide').length) ? 1 : current_index + 1), true);
// 				}
// 			},
// 			threshold: 100,
// 			maxTimeThreshold: 5000,
// 			fingers: 1,
// 			excludedElements: 'label, input, select, textarea, .noSwipe',
// 			allowPageScroll: 'vertical'
// 		});
// 	}

// 	function moveSlider(index){
//       	if($('.product-slider__controls-thumb.has-video-thumb').length > 0) {
//           if($('.product-slider__controls-thumb[data-index="' + index + '"]').hasClass('has-video-thumb')) {
//               // player.playVideo();
//           } else {
//               player.pauseVideo();
//           }
//         }

//       	$transition.css('background-image', 'url(' + $('.product-slider__slide.active').attr('data-image') + ')');
// 		$('.product-slider__controls-thumb.active').removeClass('active');
// 		$('.product-slider__slide.active').removeClass('active');
// 		$('.product-slider__controls-thumb[data-index="' + index + '"]').addClass('active');
// 		$('.product-slider__slide[data-index="' + index + '"]').addClass('active');
// 	
  
  	function slidesEvents() {
        var section_width = $(".product-slider").outerWidth();
        $(".product-slider .product-slider__slide").css("width", section_width);

        $(window).on("resize", function() {
          var section_width = $(".product-slider").outerWidth();
          $(".product-slider .product-slider__slide").css("width", section_width);
        });

        if($('.product-slider__slide.video-internal').length > 0) {
          $('.product-slider__slide.video-internal').each(function(i) {
            var video_poster = $(this).find('.video-banner').data('src');
            $(this).find('video').attr('poster', video_poster);
          });
        }

        $(".product-slider .product-slider__wrap").slick({
          infinite: false,
          dots: false,
          nextArrow: false,
          prevArrow: false,
          arrows: false,
          slidesToShow: 1,
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $(".product-slider__controls-thumb").removeClass("active");
            $(".product-slider__controls-thumb:eq("+nextSlide+")").addClass("active");

            if($(".product-slider__controls-thumb.has-video").length > 0) {
              $(".product-slider__slide video").each(function(){
                $(this).get(0).pause();
              });
            }
          
            if($(".product-slider__slide.video-youtube").length > 0) {
              $('.product-slider__slide.video-youtube').each(function(i) {
                player[i].pauseVideo();
              });
            }
        });

        $(".product-slider__controls-thumb").on('click', function(){
          var slideIndex = $(this).index();
          $(".product-slider .product-slider__wrap").slick('slickGoTo', slideIndex);
          
          /* bear original hybrid */
          //console.log("slider-iimmd");
          // $(".product-slider__wrap").css("display","block");
          var imge_sc = $(".product-slider__slide.active img").data('src');
          $(".product-slider__slide.active img").attr("src",imge_sc);
         // console.log("imge_sc"+imge_sc)
          /* bear original hybrid */
        });
    }

	return {
		init: function(){
// 			$transition = $('.product-slider__transition');
// 			$('.product-slider__slide').lazzyload({
// 				each: function($image){
// 					$image.parents('.product-slider__slide').css('background-image', 'url(' + $image.attr('data-src') + ')');
// 				}
// 			});

          	slidesEvents();
		}
	};

})(BRR, jQuery);
BRR.product.tiles = (function(BRR, $){

	var $dimensions;

	function bindEvents() {
        $(".priceSelected").on('click', function(){ 
          	$(this).hide();
			$(".product-tiles__list").show();
        });

        function affirmUpdate(){

          	var affirmInterval = setInterval(function(){
                var affirmPrice = $('.affirm-ala-price').text().replace("$","");
                $('.affirm-block .affirm-price').text(affirmPrice);
                $('.affirm-block h3').show();
            },50);

          	setTimeout(function(){clearInterval(affirmInterval)},2000);
        }

        var variants_dropdown = jQuery(".product-tiles .product-dropdown__list");
        variants_dropdown.clone().appendTo(".cs-sticky-choose .cs-sticky-price-dropdown").addClass('sticky_variant_selection').attr("id", "sticky_variant_selection");

        var product_buy_button = jQuery('.product-box__wrap .product-buy');
        product_buy_button.clone().appendTo('.cs-sticky-choose .cs-sticky-price-button');

		if(location.href.indexOf('/elite-hybrid-mattress') > -1 ){
          	jQuery('.cs-sticky-choose').addClass('cs-sticky-elite-hybrid');
          	jQuery('.cs-sticky-choose.cs-sticky-elite-hybrid .product-buy__button_add_on').html('Shop Now <span class="inline-loader"><i class="mdi mdi-loading mdi-spin"></i></span>');
          	jQuery('.cs-sticky-choose.cs-sticky-elite-hybrid .product-buy__button_add_on').removeClass('product-buy__button_add_on').addClass('cs-elite-buy__button');
        } 
if(location.href.indexOf('/pro-hybrid-mattress') > -1 ){
          	jQuery('.cs-sticky-choose').addClass('cs-sticky-elite-hybrid');
          	jQuery('.cs-sticky-choose.cs-sticky-elite-hybrid .product-buy__button_add_on').html('Shop Now <span class="inline-loader"><i class="mdi mdi-loading mdi-spin"></i></span>');
          	jQuery('.cs-sticky-choose.cs-sticky-elite-hybrid .product-buy__button_add_on').removeClass('product-buy__button_add_on').addClass('cs-elite-buy__button');
        } 
      if(location.href.indexOf('/star-hybrid-mattress') > -1 ){
          	jQuery('.cs-sticky-choose').addClass('cs-sticky-elite-hybrid');
          	jQuery('.cs-sticky-choose.cs-sticky-elite-hybrid .product-buy__button_add_on').html('Shop Now <span class="inline-loader"><i class="mdi mdi-loading mdi-spin"></i></span>');
          	jQuery('.cs-sticky-choose.cs-sticky-elite-hybrid .product-buy__button_add_on').removeClass('product-buy__button_add_on').addClass('cs-elite-buy__button');
        } 
      if(location.href.indexOf('/tencel-sheets') > -1 ){
          	jQuery('.cs-sticky-choose').addClass('cs-sticky-elite-hybrid');
          	jQuery('.cs-sticky-choose.cs-sticky-elite-hybrid .product-buy__button_add_on').html('Shop Now <span class="inline-loader"><i class="mdi mdi-loading mdi-spin"></i></span>');
          	jQuery('.cs-sticky-choose.cs-sticky-elite-hybrid .product-buy__button_add_on').removeClass('product-buy__button_add_on').addClass('cs-elite-buy__button');
        } 
       if(location.href.indexOf('/bear-original-mattress') > -1 ){
          	jQuery('.cs-sticky-choose').addClass('cs-sticky-elite-hybrid');
          	jQuery('.cs-sticky-choose.cs-sticky-elite-hybrid .product-buy__button_add_on').html('Shop Now <span class="inline-loader"><i class="mdi mdi-loading mdi-spin"></i></span>');
          	jQuery('.cs-sticky-choose.cs-sticky-elite-hybrid .product-buy__button_add_on').removeClass('product-buy__button_add_on').addClass('cs-elite-buy__button');
        } 
       if(location.href.indexOf('/chunky-knit-weighted-blanket') > -1 ){
          	jQuery('.cs-sticky-choose').addClass('cs-sticky-elite-hybrid');
          	jQuery('.cs-sticky-choose.cs-sticky-elite-hybrid .product-buy__button_add_on').html('Shop Now <span class="inline-loader"><i class="mdi mdi-loading mdi-spin"></i></span>');
          	jQuery('.cs-sticky-choose.cs-sticky-elite-hybrid .product-buy__button_add_on').removeClass('product-buy__button_add_on').addClass('cs-elite-buy__button');
         } jQuery(document).on("click", ".product-buy", function(){
      		 jQuery('html, body').animate({scrollTop: jQuery(".product-box__wrap").offset().top - 100}, 500);
         	return false;
        });





        jQuery(document).on("change", "#sticky_variant_selection", function(){
          var sticky_variant_val = jQuery(this).val();
          var original_variant = jQuery(".product-tiles select#dropdownMattressSize");

          if(original_variant.val() != sticky_variant_val){
            original_variant.val(sticky_variant_val).change();
          }
        });

        if(location.href.indexOf('/bear-pro') > 0 || location.href.indexOf('/bear-hybrid') > 0){

          $('.product-box select#dropdownMattressSize option, .cs-sticky-choose #sticky_variant_selection option').each(function(){
            var variantName = jQuery(this).attr('data-title').trim().toLowerCase();

            var option = $(this);

            $('#product-specs .measure_size').each(function(){

              var title = jQuery(this).find('.measure_title').text().trim().toLowerCase();

              if(title == variantName && jQuery(this).find('p').eq(0).text().trim() != '') {

                var data = ' - ' + jQuery(this).find('p').eq(0).text().trim();

                option.append(data);
              }
            });
          });
        }

     $('.single-option-selector').on('change', function() {
    var selected_option_1 = $('#cs-option-selection-0').val();
    var selected_option_2 = $('#cs-option-selection-1').val();
    var selected_option_3 = $('#cs-option-selection-2').val();

  var dropdown_selection = selected_option_1 + ' / ' + selected_option_2;
    if (selected_option_3) {
        dropdown_selection += ' / ' + selected_option_3;
    }

    $("#dropdownMattressSize option[data-variant='"+dropdown_selection+"']").prop("selected", true);
    $("#dropdownMattressSize").change();

    // bear-original-hybrid
    if($(this).hasClass('material')){
        var check_selected_second_op_v = $.trim($(this).find("option:selected").val());
        var $this = $('.product-dropdown__list').find("option:selected");
        var product_title_hybride = $("#product_title_hybride").data('product-full-handle'); 
        if(check_selected_second_op_v === "Hybrid" && product_title_hybride === "bear-original-mattress"){

            //get Hybrid description html 
            var hybrid_description = $(".boh_description").html();
            $("#for_replace_id").html(hybrid_description);
                
            var staggered_media_image1 = $this.data('staggered-media-image1');
            var staggered_media_image2 = $this.data('staggered-media-image2');
            var staggered_media_image3 = $this.data('staggered-media-image3');
            if(staggered_media_image1 !== "" && staggered_media_image2 !== "" && staggered_media_image3 !== ""){
                $("#staggered_media_image1").attr("src", staggered_media_image1);
                $("#staggered_media_image2").attr("src", staggered_media_image2);
                $("#staggered_media_image3").attr("src", staggered_media_image3);
            }
        }                           
    }    
});


		$('.product-dropdown__list').on('change', function(){
     var selcted_varinat_name =   $("#dropdownMattressSize option:selected").attr("data-variant");
     var selcted_varinat_id =   $("#dropdownMattressSize option:selected").attr("value");
     $("#variant-detail-id-title").attr("current-variant-id", selcted_varinat_id)
     $("#variant-detail-id-title").attr("current-variant-name", selcted_varinat_name)
     $("product-form form input.product-variant-id")?.val(selcted_varinat_id)
           /* loader added from VWO revenue */
          $('.price-block .cs-price-loading').removeClass('cs-price-loading');
          	$('.price-block .cs-price-loader').remove();
           /* loader added from VWO revenue */
          
            var $this = $(this).find("option:selected");
          	var selectedVariantID = $(this).val();

			var selected_text = $this.data("title");
          
          /* bear original hybrid */
          	// change image if there is color selection
            var varinatIndex = $this.data('thumbnail');
           	if(varinatIndex > -1) {
              	$('.product-slider__controls').find('.product-slider__controls-thumb:eq('+varinatIndex+')').trigger('click');
            }
          
            var product_title_hybride = $("#product_title_hybride").data('product-full-handle'); 
          /*if(product_title_hybride =="bear-original-mattress"){

            var product_title = $(".product-box__wrap .f2").data('product_title_1');           
            //$(".slick-current.slick-active img").attr('src',varinatIndex);           
            var product_title_ctm =selected_text.split("/").pop();
           
            if(product_title.indexOf(product_title_ctm) == -1 ){
            var product_title_ct= product_title +"-"+ selected_text.split("/").pop();
            $(".product-box__wrap .f2").text(product_title_ct);
              
             // bear original // 
            var product_full_title = $(".product-box__wrap .f2").data('product-full-title');
            var product_full_title_ct=product_full_title + selected_text.split("/").pop();
            $("#material").val(product_full_title_ct);
            // bear original //
             // console.log("bear original")
              
            }
            
          }*/
          
          	if(varinatIndex > -1) {
              	$('.product-slider__controls').find('.product-slider__controls-thumb:eq('+varinatIndex+')').trigger('click');
            }

          	if(selected_text.indexOf('+ Foundation') <= -1){
              	setDimensions(selected_text);
            }

          	if(selected_text.indexOf(' / ') > -1) {
                let separate_selection = selected_text.split(' / ');
                let first_selection = separate_selection[0];
                let second_selection = separate_selection[1];

              	if($('#cs-option-selection-0').length > 0) {
                	$('#cs-option-selection-0').val(separate_selection[0]);
                }

              	if($('#cs-option-selection-1').length > 0) {
					$('#cs-option-selection-1').val(separate_selection[1]);
                }
            }
          
//             var productInformation = $this.data('information');

//             if(productInformation) {
//               $('.product-box .delivery-info').hide();
//               $('.product-box .shipping-info').hide();
//               $('.product-box .cs-product-information').text(productInformation).show();
//             } else {
//               $('.product-box .delivery-info').show();
//               $('.product-box .shipping-info').show();
//               $('.product-box .cs-product-information').text('').hide();
//             }

          	if($('.cs-bonus-list .bonus-'+selectedVariantID).length > 0) {

              	var bonusData = $('.cs-bonus-list .bonus-'+selectedVariantID).html();
              	$('.cs-bonus-wrapper .cs-bonus-products').html(bonusData);
              	$('.cs-bonus-wrapper').show();
            } else {
              	$('.cs-bonus-wrapper .cs-bonus-products').html('');
              	$('.cs-bonus-wrapper').hide();
            }

          	$('body > .global-frequent-wrapper').remove();

          	if($('.frequent-list .frequent-'+selectedVariantID).length > 0) {

              	var frequentData = $('.frequent-list .frequent-'+selectedVariantID).html();
                $('.product-tiles .frequent-products .check-found').html(frequentData);
              
                $(".product-tiles .frequent-products .add-on-row").each(function(){
                  if(!$(this).hasClass('is-additional')) {
                    let break_st;
                    if($(this).data('target') == 'target-39653366202473') {
                      break_st = 'One Size';
                    }
                    else if($(this).data('target') == 'target-40330425663593') {
                      break_st = 'Twin';
                    }
                    else if ($this.data("title").indexOf("/") > -1){
                      break_stt = $this.data("title").split("/"); 
                      break_st=break_stt[0];
                    //console.log("ddddee" + break_st[0])
                    }else{
                      break_st=$this.data("title");
                      //console.log("ddddeer" +$this.data("title"))
                    }
                   
                    //$(this).find('.add-on-variant.change-variant').text($this.data("title"));
                    $(this).find('.add-on-variant.change-variant').text(break_st);
                  }
                });

                $('.product-tiles .frequent-products').show();
              	// $('.product-tiles .check-mattress-only').show();
            } else {
              	$('.product-tiles .frequent-products .check-found').html('');
              	$('.product-tiles .frequent-products').hide();
              	$('.product-tiles .check-mattress-only').hide();
            }

            if($('.frequent-extra-list .frequent-extra:first-of-type').length > 0) {

              var frequentextraData = $('.frequent-extra-list .frequent-extra:first-of-type').html();
              $('.product-tiles .frequent-products .check-found').append(frequentextraData);
              $('.product-tiles .frequent-products').show();
            }

		  	$('.check-mattress-only-checkbox').prop('checked', false).change();
          
            $(".product-tiles__header-details._inclusion .value").empty();

          	var additionalInfo = [];

          	var finalUpsellInfo = '';

          	$(".product-tiles-check:checked").each(function(){
				additionalInfo.push($(this).data('value'));
            });

            if(additionalInfo.length > 0){
                $.each(additionalInfo, function(i,y) {
                  finalUpsellInfo += ', ' + additionalInfo[i].trim();
                });
            } else {
              	additionalInfo == '';
            }

            if(Number($(".product-tiles__header-details .value").length) > 0) {

              if(location.href.indexOf('/bear-pro-bundle') > 0 || location.href.indexOf('/bear-sleep-bundle') > 0 || location.href.indexOf('/bear-hybrid-bundle') > 0 || location.href.indexOf('/bear-foundation') > 0 || location.href.indexOf('/bear-original-mattress') > 0 || location.href.indexOf('/bear-hybrid') > 0 || location.href.indexOf('/bear-pillow') > 0){
                  var tempSplit1 = $(".product-tiles__header-details .value").attr('data-info').split(",")[0];
                  var tempSplit2 =$(".product-tiles__header-details .value").attr('data-info').split(",")[1];
                  tempSplit2 = (typeof tempSplit2 == 'undefined') ? "" : (","+tempSplit2);
                  var tempSplit3 =$(".product-tiles__header-details .value").attr('data-info').split(",")[2];
                  tempSplit3 = (typeof tempSplit3 == 'undefined') ? "" : (","+tempSplit3);
                  var tempSplit4 =$(".product-tiles__header-details .value").attr('data-info').split(",")[3];
                  tempSplit4 = (typeof tempSplit4 == 'undefined') ? "" : (","+tempSplit4);
                  var tempSplit5 =$(".product-tiles__header-details .value").attr('data-info').split(",")[4];
                  tempSplit5 = (typeof tempSplit5 == 'undefined') ? "" : (","+tempSplit5);
                  var tempSplit6 =$(".product-tiles__header-details .value").attr('data-info').split(",")[5];
                  tempSplit6 = (typeof tempSplit6 == 'undefined') ? "" : (","+tempSplit6);
                  var tempSplit7 =$(".product-tiles__header-details .value").attr('data-info').split(",")[6];
                  tempSplit7 = (typeof tempSplit7 == 'undefined') ? "" : (","+tempSplit7);
                  var tempSplit8 =$(".product-tiles__header-details .value").attr('data-info').split(",")[7];
                  tempSplit8 = (typeof tempSplit8 == 'undefined') ? "" : (","+tempSplit8);
                  $(".product-tiles__header-details._inclusion span:last-child").html(tempSplit1 + tempSplit2 + tempSplit3 + tempSplit4 + tempSplit5 + tempSplit6 + tempSplit7 + tempSplit8);
              }
            }
          
          	var prodPrice = parseInt($this.attr('data-price'));
          	var oldPrice = parseInt($this.attr('data-old-price'));
          	var cs_discount_text = $this.data('discount-text');

          	prodPrice = prodPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          	oldPrice = oldPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            $('.title-after-price #discount-price').text(prodPrice);
            $('.title-after-price #total-price').text(oldPrice);
            $('.title-after-price .total-price .total-discount-text').remove();

            var sticky_variant = jQuery("select#sticky_variant_selection");
            var original_variant_val = selectedVariantID;

            if(original_variant_val != sticky_variant.val()){
              sticky_variant.val(original_variant_val).change();
            }

            $('.cs-sticky-choose .cs-sticky-discount').text(prodPrice);
            $('.cs-sticky-choose .cs-sticky-total').text(oldPrice);

          	var affirm_price = prodPrice.toString().replace(",","");

          	if(Number(affirm_price) > 250) {
				$('.affirm-as-low-as').attr('data-amount', affirm_price * 100);
              	$('.finance-info').css('display', 'inline-block');
            } else {
              	$('.finance-info').css('display', 'none');
            }

            if(cs_discount_text) {
             $('.title-after-price .total-price .total-discount-text').remove();
          if (cs_discount_text.includes('off')) {
    // If it already contains "off", append cs_discount_text without adding "off" again
    $('.title-after-price .total-price').append('<span class="total-discount-text">' + cs_discount_text + '</span>');
} else {
    // If cs_discount_text doesn't contain "off", append cs_discount_text along with " off"
    $('.title-after-price .total-price').append('<span class="total-discount-text">' + cs_discount_text + ' off</span>');
} }
          
            if(prodPrice == oldPrice || Number(oldPrice) == 0){
              $('.title-after-price .total-price').hide();
            } else {
              $('.title-after-price .total-price').show();
              $('.title-after-price .total-price').removeClass("_hide");
            }
          
			$(BRR).trigger({
				type: 'product:select',
				variant_id: $this.attr('data-variant-id'),
				price: prodPrice,
				title: $this.attr('data-title')
			});

          affirmUpdate();
          // console.log("product ddd");
		});

      	$(document).on("click", ".check-mattress-only .check-mattress-only-popup", function(){

          var targetEl = $(this).data('target');

          $('#'+targetEl).click();
          return false;
        });

      	$(document).on("change", ".frequent-white-glove .gf-detail-selection", function(){
          $('.frequent-white-glove .global-frequent-selection-btn').removeClass('disabled');

          $(".frequent-white-glove .gf-details .gf-details-option").removeClass('active');
          $(".frequent-white-glove .gf-details .gf-details-option .gf-detail-full-selection").prop("checked", false);

          $(".frequent-white-glove .gf-product").removeClass("active");
          $(this).parents(".gf-product").addClass("active");
        });

      	$(document).on("change", ".check-mattress-only-checkbox", function(){

          	if($(this).prop("checked") == true) {
               $('.frequent-products .product-tiles-check').prop('checked', false);
              $('.product-buy button .frequentXtotal').remove();
			  $('.frequent-products .add-on-row.is-additional').css('display', 'none');

              var attachedData = 'I have a ';

              $(".frequent-products .check-found .add-on-row").not('.is-additional').each(function(){

                var targetEl = $(this).data('target');

                if(($(this).index() + 1) == $(".frequent-products .check-found .add-on-row").not('.is-additional').length) {
                   attachedData += '<a class="check-mattress-only-popup" data-target="'+targetEl+'" href="#">'+$(this).data('productel')+'</a>'+'.';
                } else if(($(this).index() + 1) == $(".frequent-products .check-found .add-on-row").not('.is-additional').length - 1) {
                   attachedData += '<a class="check-mattress-only-popup" data-target="'+targetEl+'" href="#">'+$(this).data('productel')+'</a>'+' and ';
                } else {
                   attachedData += '<a class="check-mattress-only-popup" data-target="'+targetEl+'" href="#">'+$(this).data('productel')+'</a>'+', ';
                }
              });

              $('.check-mattress-only-additional').html(attachedData).show();
            } else {
              $('.check-mattress-only-additional').hide();
            }
        });

      	/* $(document).on("click", ".frequent-white-glove .gf-details-option", function(e){

          	if($(this).hasClass('active')) {
              	$(this).removeClass('active');
          		$(this).find('.gf-detail-full-selection').prop('checked', false).trigger('change');
            } else {
              	$(this).addClass('active');
          		$(this).find('.gf-detail-full-selection').prop('checked', true).trigger('change');
            }
        }); */

      	$(document).on("change", ".frequent-products .product-tiles-check", function(){
          
          if($(this).parents('.add-on-row').hasClass('frequent-extra-white-glove') && $(this).prop("checked") == true) {

            var targetEl = $(this).parents('.add-on-row').find('.popup-click').data('class');

            if($('.'+targetEl).length > 0) {

              $('body').append($('.'+targetEl));
              $('.'+targetEl).show();
              $("body").css('overflow', 'hidden');
            }
          }

          if($(this).parents('.add-on-row').hasClass('remove-on-row')) {

            if($(this).prop("checked") == true) {

              $(this).parents('.add-on-row').find('.price_bundle .price-new').text('OK, you will save $100!');
            } else {
              $(this).parents('.add-on-row').find('.price_bundle .price-new').text('Take $100 off');
            }
          }
          
          if($('.frequent-products .product-tiles-check:checked').length > 0) {
            var frequentXitemsDefault = 1;

            var frequentXitemsCount = $('.frequent-products .product-tiles-check:checked').length;

            var frequentXtotal = Number(frequentXitemsDefault) + Number(frequentXitemsCount);

            $('.product-buy button .frequentXtotal').remove();
            $('.product-buy button').append('<span class="frequentXtotal">('+frequentXtotal+' ITEMS)</span>');
          } else {
            $('.product-buy button .frequentXtotal').remove();
          }

		  $('.check-mattress-only-checkbox').prop('checked', false).change();

          if($(this).parents(".add-on-row").hasClass("has-additional")) {
              var targetEl = $(this).parents(".add-on-row").data("has-additional");

              if($(this).prop("checked") == true) {

                $(".frequent-products #"+targetEl).parents('.add-on-row.is-additional').css('display', 'block');
              } else {

                if($(".frequent-products #"+targetEl).prop("checked") == true) {
                	$(".frequent-products #"+targetEl).parents('.add-on-row.is-additional').css('display', 'block');
                } else {
                	$(".frequent-products #"+targetEl).parents('.add-on-row.is-additional').css('display', 'none');
                }
              }
          }
          
          if($(this).parents(".add-on-row").hasClass("is-additional")) {

              if($(this).prop("checked") == true) {
                $(this).parents('.add-on-row.is-additional').css('display', 'block');
              }
          }

          $(".product-tiles__header-details._inclusion .value").empty();

          var additionalInfo = [];
          
          var finalUpsellInfo = '';
          
          $(".product-tiles-check:checked").each(function(){
			  additionalInfo.push($(this).data('value'));
          });

          if(additionalInfo.length > 0) {

            $.each(additionalInfo, function(i,y){ 
              finalUpsellInfo += ', ' + additionalInfo[i].trim();
            });
          } else {
            additionalInfo == '';
          }

          if(Number($(".product-tiles__header-details .value").length) > 0) {

            if(location.href.indexOf('/bear-pro-bundle') > 0 || location.href.indexOf('/bear-sleep-bundle') > 0 || location.href.indexOf('/bear-hybrid-bundle') > 0 || location.href.indexOf('/bear-foundation') > 0 || location.href.indexOf('/bear-original-mattress') > 0 || location.href.indexOf('/bear-hybrid') > 0 || location.href.indexOf('/bear-pillow') > 0){
              var tempSplit1 = $(".product-tiles__header-details .value").attr('data-info').split(",")[0];
              var tempSplit2 =$(".product-tiles__header-details .value").attr('data-info').split(",")[1];
              tempSplit2 = (typeof tempSplit2 == 'undefined') ? "" : (","+tempSplit2);
              var tempSplit3 =$(".product-tiles__header-details .value").attr('data-info').split(",")[2];
              tempSplit3 = (typeof tempSplit3 == 'undefined') ? "" : (","+tempSplit3);
              var tempSplit4 =$(".product-tiles__header-details .value").attr('data-info').split(",")[3];
              tempSplit4 = (typeof tempSplit4 == 'undefined') ? "" : (","+tempSplit4);
              var tempSplit5 =$(".product-tiles__header-details .value").attr('data-info').split(",")[4];
              tempSplit5 = (typeof tempSplit5 == 'undefined') ? "" : (","+tempSplit5);
              var tempSplit6 =$(".product-tiles__header-details .value").attr('data-info').split(",")[5];
              tempSplit6 = (typeof tempSplit6 == 'undefined') ? "" : (","+tempSplit6);
              var tempSplit7 =$(".product-tiles__header-details .value").attr('data-info').split(",")[6];
              tempSplit7 = (typeof tempSplit7 == 'undefined') ? "" : (","+tempSplit7);
              var tempSplit8 =$(".product-tiles__header-details .value").attr('data-info').split(",")[7];
              tempSplit8 = (typeof tempSplit8 == 'undefined') ? "" : (","+tempSplit8);
              $(".product-tiles__header-details._inclusion span:last-child").html(tempSplit1 + tempSplit2 + tempSplit3 + tempSplit4 + tempSplit5 + tempSplit6 + tempSplit7 + tempSplit8);
            }
          }
      });
	}

	function setDimensions(title){
		if (title !== 'Default Title' && typeof window.mattressDimensions !== "undefined"){
			var data = window.mattressDimensions.filter(function(variant){
				return variant.title === title;
			});

			$dimensions.attr('data-info', (data.length) ? data[0].dimensions : '').html((data.length) ? data[0].dimensions : '');
		}
	}

	return {
		init: function(){
			$dimensions = $('.product-tiles__header-details .value');
			setDimensions(($('.product-tiles__item.selected').length) ? $('.product-tiles__item.selected').attr('data-title') : $('.product-tiles__item:first-child').attr('data-title'));
			bindEvents();
		}
	};

})(BRR, jQuery);
BRR.gridtabs = (function(BRR, $){

	var start = true;

	function bindEvents(){
		$(document).on('shopify:section:load', function(e){
			if ($(e.target).find('.gridtabs').length) {
				load();
			}
		});
		$(document).on('click', ".gridtabs-options__item", function(){
			var $this = $(this);
			$('.gridtabs-options__item.active').removeClass('active');
			$('.gridtabs-tab.active').removeClass('active');
			$('.gridtabs-tab[data-tab="' + $this.attr('data-tab') + '"]').addClass('active');
			$this.addClass('active');
		});
		$(window).on("resize", load);
	}

	function load(){
		$('.gridtabs').lazzyload();
	}

	return {
		init: function(){
			load();
			bindEvents();
			start = false;
		},
	    update: function(){
			if (start) init();
	    }
	};

})(BRR, jQuery);

BRR.hero = (function(BRR, $){

	var start = true;

	function bindEvents(){
		$(document).on('shopify:section:load', function(e){
			if ($(e.target).find('.hero').length) {
				load();
			}
		});
		$(window).on('resize', load);
	}

	function load(){
      	var seprate_size = $('body').hasClass('template-index') ? 1024 : 801;

		var $pic = (window.innerWidth < seprate_size) ? $('.hero-bg.mobile') : $('.hero-bg.desktop');

      	$pic.lazzyload({

          each: function($image){
				$image.parents('.hero').css('background-image', 'url(' + $image.attr('src') + ')');
			}
		});
	}

	return {
		init: function(){
			load();
			bindEvents();
			start = false;
		},
		update: function(){
			if (start) init();
		}
	};

})(BRR, jQuery);

BRR.mobilenav = (function(BRR, $){

	var $mnav,
		$burger,
        $burger_overlay,
		$html = $('html'),
		$window = $(window),
		$header,
		navElementsWidth;

	function bindEvents(){
		$('.mnav-item .mnav-item__link.dropdown').on('click', function(e){

          	var parentEl = $(this).parents('.mnav-list');
          	var parentList = $(this).parents('.mnav-item');

          	if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                parentEl.find('.mnav-item__dropdown').slideUp(300);

              	parentEl.find('.mnav-item').find('button').data('aria-expanded', false);
			} else {
              	$(this).find('button').data('aria-expanded', true);
              
                parentEl.find('.mnav-item__link').removeClass('open');
                parentEl.find('.mnav-item__dropdown').slideUp(300);

              	$(this).addClass('open');
              	parentList.find('.mnav-item__dropdown').slideDown(300);
			}
          
          	return false;
		});

      	$burger.on('click', open);
      
      	$burger_overlay.on('click', open);

      	$('.mnav-overlay, .mnav-close').on('click', close);

      	// $window.on('resize', checkVersion);
	}

	function checkVersion(){
      
      navElementsWidth = $('.header-logo').width() + $('.header-nav').width() + $('.header-subnav').width();
		if ($(window).width() < 1035) {
			$header.addClass('is--mobile');
		} else {
			$header.removeClass('is--mobile');
		}
	}

  	var _scrollTopPos = '';

  	function close() {      
		$html.removeClass('locked');
		$mnav.removeClass('open');
	}

	function open(handle) {
      
      var topOffset = 0;

      if($(".cs-mp-bar-position").length > 0){
        var topOffset = $(".cs-mp-bar-position").outerHeight();
      }

      if($(".toppromobar").length > 0){
        var topOffset = $(".toppromobar").outerHeight();
      }
      
      $(".site-header").css("top","-"+topOffset+"px");

      if($mnav.hasClass('open')){

		$('.header-wrap').removeClass('no-shadow');

        $('.background-layer').hide();

      	$burger.removeClass('menu__open');
        $html.removeClass('parent__menu__opened');
        $html.addClass('parent__menu__closed');
		$mnav.removeClass('open');
      } else {
        
		$('.header-wrap').addClass('no-shadow');
        
		$('.background-layer').show();
        
        var winScrolltop = $(window).scrollTop();
        
        if(Number(winScrolltop) == 0) {
      		$('html, body').animate({scrollTop: topOffset}, 100);
        }

        setTimeout(function() {
          
          var mpBar = $(".cs-mp-bar-position").outerHeight();
          var topBar = $(".toppromobar").outerHeight();

          if($(".cs-mp-bar-position").length > 0){
            $(".site-header").css("top","-"+mpBar+"px");
          }

          if($(".toppromobar").length > 0){
            $(".site-header").css("top","-"+topBar+"px");
          }
        }, 150);

        scrollTopPos = window.pageYOffset;
        $burger.addClass('menu__open');
        $html.addClass('parent__menu__opened');
        $html.removeClass('parent__menu__closed');
        $mnav.addClass('open');              	
      }
	}

	return {
		init: function(){
			$header = $('.site-header');
			$mnav = $('.mnav');
			$burger = $('.header-toggle__button');
          	$burger_overlay = $('.background-layer');
			navElementsWidth = $('.header-logo').width() + $('.header-nav').width() + $('.header-subnav').width();
			checkVersion();
			bindEvents();
		}
	};

})(BRR, jQuery);

BRR.msize = (function(BRR, $){
	var start = true;

	function escapeDoubleQuotes(str) {

      if(str != undefined) {
		  return str.replace(/\\([\s\S])|(")/g,"\\$1$2");
      }
	}

	function bindEvents(){
		$(document).on('shopify:section:load', function(e){
			if ($(e.target).find('.msize').length) {
				load();
				defaultOption();
			}
		});
		$(BRR).on('product:select', function( e ) {
			$('.msize-options__item[data-title="' + escapeDoubleQuotes($(e.target).data('title')) + '"]').trigger('click');
    
		});
		$(document).on('click', '.msize-options__item', function(){
			var $this = $(this);
			$('.msize-options__item.active').removeClass('active');
			$('.msize-tab.active').removeClass('active');
			$this.addClass('active');
			$('.msize-tab[data-tab="' + $this.attr('data-tab') + '"]').addClass('active');
		});
		$(window).on("resize", function(){
			load();
			defaultOption();
		});
	}

  
	function load(){
		$('.msize').lazzyload();
	}

	function defaultOption() {
		if ($('.msize-options__item.active').length === 0) {
			$('.msize-options__item:first-child').trigger('click'); // for the theme editor
		}
	}

	return {
		init: function(){
			load();
			bindEvents();
			defaultOption();
			start = false;
		},
	    update: function(){
	      if (start) init();
	    }
	};

})(BRR, jQuery);

BRR.nav = (function(BRR, $){

	var $dnav,
        parentHovered,
		throttle;

	function bindEvents(){
      
        var elLeft = $('.header-nav__item:first-of-type').offset().left;
        var elWidth = $('.header-nav__item:first-of-type').outerWidth();
        $('.header-nav__item-active').css({left: elLeft, width: elWidth});

      	$('.header-nav__item').mouseenter(function() {
          var _this = $(this);
          parentHovered = true;

          if($(this).find('.header-nav__item-link.dropdown').length > 0) {
            var elLeft = _this.offset().left;
            var elWidth = _this.outerWidth();

            var deopdownHeight = _this.find('.dnav.dropdown__subnav').outerHeight();
            _this.data('active', true);
            $('.cs-menu-layer').css({'height': deopdownHeight});

            if($('.header-nav__item .dropdown__subnav_image_wrapper.csload').length > 0) {

              	$('.header-nav__item .dropdown__subnav_image_wrapper.csload').each(function() {
                    var _this = $(this);
                    var imagePath = _this.data('src');

                    var imgSelf = new Image();
                    imgSelf.src = imagePath;

                    imgSelf.onload = function () {

                      _this.find('.dropdown__subnav_image').attr('src', imagePath);
                      _this.removeClass('csload');
                    };
                });
            }

            setTimeout(function(){
              if(_this.data('active') == true) {
                $('.background-layer').fadeIn(250);
                $('.cs-menu-layer').addClass('slidedown');
                _this.addClass('active');
              }
            }, 150);

            $('.header-nav__item-active').css({opacity: 1, left: elLeft, width: elWidth});

            _this.parents('.header-wrap').addClass('no-shadow');
          } else {
            $('.background-layer').fadeOut(250);
          }
        }).mouseleave(function() {
          var _this = $(this);
          parentHovered = false;
          
		  if($(this).find('.header-nav__item-link.dropdown').length > 0) {

            _this.data('active', false);
            $('.header-nav__item').removeClass('active');
			$('.cs-menu-layer').css({'height': 0});
            $('.cs-menu-layer').removeClass('slidedown');

            $('.header-nav__item-active').css({opacity: 0});

            setTimeout(function(){

              if(parentHovered == false) {
                $('.background-layer').fadeOut(250);
              }
            }, 100);

            $(this).parents('.header-wrap').removeClass('no-shadow');
          } else {
            $('.background-layer').fadeOut(250);
          }
        });

      	$('.nav-hover-switcher, .nav-hover-button-switcher').mouseover(function() {
          var targetEL = $(this).data('el');
          
          if(targetEL && $('.'+targetEL).length > 0) {
            var nav_title = $('.'+targetEL).data('title');
            var nav_image = $('.'+targetEL).data('image');
            var nav_text = $('.'+targetEL).data('text');
            var nav_link = $('.'+targetEL).data('link');

            var nav_title_el = $(this).parents('.dropdown__subnav_inner').find('.nav_dropdown__subnav_heading');
            var nav_image_el = $(this).parents('.dropdown__subnav_inner').find('.dropdown__subnav_image');
            var nav_text_el = $(this).parents('.dropdown__subnav_inner').find('.dropdown__subnav_link');
            var nav_link_el = $(this).parents('.dropdown__subnav_inner').find('.dropdown__subnav_image_wrapper');

            if(nav_title) {
				nav_title_el.text(nav_title);
            }

            if(nav_image) {
				nav_image_el.attr('src', nav_image);
            }

            if(nav_text) {
				nav_text_el.text(nav_text);
            }

            if(nav_link) {
				nav_link_el.attr('href', nav_link);
            }
          }
        });

        jQuery('.trustpoints-slider .trustpoints-item').click(function() {
          var tooltiptitle = jQuery(this).find('span').data('heading');
          var tooltipContent = jQuery(this).find('.trustpoints-content').html();

          $("body").css("overflow","hidden");

          $(".cs-tooltip-title").html(tooltiptitle);
          $(".cs-tooltip-content").html(tooltipContent);
          $(".cs-tooltip-wrapper").fadeIn(250);

          return false;
        });

      	$(document).on('cart:toggle', close);
	}

	function close() {
		$dnav.removeClass('open');
		$('.header-nav__item.active').removeClass('active');
		$('.dnav-dropdown.open').removeClass('open');
	}

	function open(handle) {
		$dnav.addClass('open');
		$('.dnav-dropdown[data-dropdown="' + handle + '"]').addClass('open');
		$('.header-nav__item.dropdown[data-dropdown="' + handle + '"]').addClass('active');
	}

	return {
		init: function(){
			$dnav = $('.dnav');
			bindEvents();
		}
	};

})(BRR, jQuery);

BRR.pfeatures = (function(BRR, $){

	var start = true;

	function load(){
		$('.pfeatures').lazzyload();
	}

	return {
		init: function(){
			load();
			$(document).on('shopify:section:load', function(e){
				if ($(e.target).find('.pfeatures').length) {
					load();
				}
			});
			start = false;
		},
		update: function(){
			if (start) init();
		}
	};

})(BRR, jQuery);
BRR.press = (function(BRR, $){

  var $textArray, height, start = true;

  function bindEvents(){
    $(document).on('shopify:section:load', function(e){
      if ($(e.target).find('.press-slider').length) {
        calcHeight();
        load();
      }
    });
    $(document).on('click', '.press-slider__publication-logo', function(){
      var $this = $(this);
      calcHeight();
      $('.press-slider__publication-logo.active').removeClass('active');
      $('.press-slider__arrow.active').removeClass('active');
      $('.press-slider__text-wrapper.active').removeClass('active');
      $this.addClass('active');
      $('.press-slider__text-wrapper[data-slide="' + $this.attr('data-slide') + '"]').addClass('active');
      $('.press-slider__arrow[data-slide="' + $this.attr('data-slide') + '"]').addClass('active');
    });
    $(window).resize(calcHeight);
  }

  function calcHeight(){
    var heightArray = [],
        $textArray = $(".press-slider__text");

      $($textArray).each(function(i){
        var text = $($textArray)[i],
        height = $(text).height();

        heightArray.push(height);
      });
      if ( $(window).width() >= 768 ) {
        height = (Math.max.apply(null, heightArray)) + 200;
      } else {
        height = (Math.max.apply(null, heightArray)) + 70;
      }

      $(".press-slider__text-wrapper").each(function(){
        $(this).css("height", "" + height + "px");
      });
  }



	return {
		init: function(){
      bindEvents();
      calcHeight();
      start = false;
		},
    update: function(){
      if (start) init();
    }
	};

})(BRR, jQuery);


BRR.purchasecta = (function(BRR, $){

	var start = true;

	function bindEvents(){
		$(document).on('click', '.purchase-button', function(){
			var $this = $(this);
          
			var selectedVariantID = $this.attr('data-variant-id');
            var productFormData = new FormData();
            productFormData.append('id[]', selectedVariantID);

          	RC.cart.add(productFormData, function(cart){
              ajaxifyShopify.updateCountPrice(cart);
              ajaxifyShopify.buildCart(cart);
			});
		});
	}

	return {
		init: function(){
			bindEvents();
			start = false;
		},
	    update: function(){
	      if (start) init();
	    }
	};

})(BRR, jQuery);
BRR.review = (function(BRR, $){

	var start = true;

	function bindEvents(){
		$(document).on('shopify:section:load', function(e){
			if ($(e.target).find('.review').length) {
				load();
			}
		});
	}

	function load(){
		$('.review-background').lazzyload({
			each: function($image){
				$image.parents('.review').css('background-image', 'url(' + $image.attr('src') + ')');
			}
		});
	}

	return {
		init: function(){
			load();
			bindEvents();
			start = false;
		},
	    update: function(){
	      if (start) init();
	    }
	};

})(BRR, jQuery);
BRR.simplegrid = (function(BRR, $){

	var start = true;

	function load(){
		$('.simplegrid').lazzyload();
	}

	return {
		init: function(){
			load();
			$(document).on('shopify:section:load', function(e){
				if ($(e.target).find('.simplegrid').length) {
					load();
				}
			});
			start = false;
		},
	    update: function(){
			if (start) init();
	    }
	};

})(BRR, jQuery);
BRR.slider = (function(BRR, $){

      var start = true;

	return {
		init: function(){
                  $('.product-grid__slider').slick({
                        infinite: true,
                        dots: true,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        appendDots: $(".product-grid__slider")
                  });
                  start = false;
		},
            update: function(){
                 if (start) init();
            }
	};

})(BRR, jQuery);

BRR.testimonials = (function(BRR, $){

  var start = true;

	return {
		init: function(){
      $('.testimonial-grid__slider').slick({
       infinite: true,
       dots: true,
       arrows: true,
       slidesToShow: 1,
       slidesToScroll: 1,
       appendDots: $(".testimonial-grid__slider")
     });
      start = false;
		},
    update: function(){
      if (start) init();
    }
	};

})(BRR, jQuery);

BRR.router = (function(BRR, $){

	var $body = $('body');

	function init() {
		///////////////////////
		// Auto start        //
		///////////////////////
		BRR.nav.init();
		BRR.mobilenav.init();

		///////////////////////
		// Conditional Start //
		///////////////////////
		if ($(".testimonial-grid__slider").length) BRR.testimonials.init();
		if ($(".product-grid__slider").length) BRR.slider.init();
		if ($(".press-slider").length) BRR.press.init();
		if ($('.pfeatures').length) BRR.pfeatures.init();
		if ($('.gridtabs').length) BRR.gridtabs.init();
		if ($('.simplegrid').length) BRR.simplegrid.init();
		if ($('.review').length) BRR.review.init();
		if ($('.purchase').length) BRR.purchasecta.init();
		if ($('.hero').length) BRR.hero.init();
		if ($('.msize').length) BRR.msize.init();
		if ($body.hasClass('template-product')) {
			BRR.product.init();
			BRR.product.slider.init();
			BRR.product.tiles.init();
			BRR.product.buy.init();
		}
	}

	return {
		init: init,
		editor: function(){
			$(document).on('shopify:section:load', function(e){
				var module = $(e.target).find('[data-section-id]').attr('data-module');
				if (typeof BRR[module] !== 'undefined' && typeof BRR[module].update !== 'undefined') BRR[module].update();
			});
		}
	};

})(BRR, jQuery);

BRR.router.init();
BRR.router.editor();

  //section_slideshow-reviews
  var reviewslide =  $('.slideshow-reviews');

  reviewslide.slick({
    infinite: false,
    dots: true,
    nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" aria-disabled="false"><i class="mdi mdi-chevron-right"></i></button>',
    prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" aria-disabled="false"><i class="mdi mdi-chevron-left"></i></button>',
    arrows: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
        }
      }
    ]
  });

  var yt_reviews_slider =  $('.yt-reviews-slider');

  yt_reviews_slider.slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    adaptiveHeight: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: $('.yt-slider-arrow.slick-prev'),
    nextArrow: $('.yt-slider-arrow.slick-next'),
    responsive: [{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        adaptiveHeight: false
      }
    }]
  });

// header-v2 page
 $(function(){

   	 $('.bundle-product').on('mouseover', function(){
       $('.dnav-other-products').addClass('over-bundle');
     }).on('mouseout', function(){
       $('.dnav-other-products').removeClass('over-bundle');
     })

     /* setTimeout(function(){$(".header-nav__item.dropdown").on("mouseover", function(){
       console.log("enter");
       $("header>div").css("box-shadow", "none");
     })}, 300);

     setTimeout(function(){$(".header-nav__item.dropdown").on("mouseout", function(){
       $("header>div").css("box-shadow", "rgba(0, 0, 0, 0.12) 0px 0px 4px, rgba(0, 0, 0, 0.25) 0px 4px 4px");
     })}, 300);

     // scrolling bar script
     var tobarheight = $('.toppromobar').height();
     $('#bearmenubar').css('top', tobarheight ); */
   
   	 $('body').addClass('topbar-on');

     var topBar, siteHeader, mpBar, background_styling, color_styling;

     setInterval(function(){

       var cs_el = $('.cs-mp-bar-position a.mp-button-type-hyperlink');

       if(cs_el.length > 0) {
         background_styling = cs_el.css('background-color');
         color_styling = cs_el.css('color');
         cs_el.replaceWith('<div id="cs_pxu_cst" class="cs_pxu_cst" style="color: '+color_styling+'; background-color: '+background_styling+'">'+cs_el.html()+'</div>');
       }

       siteHeader = $('.site-header').outerHeight();
       $("body").css("padding-top", siteHeader);
       $(".product-slider").css("top", (siteHeader + 25) +"px");
     },100);

     var prevvalue = 0;

   	$(window).on('scroll',function(){	
		var scrolltop = $(this).scrollTop();
        var mpBar = $(".cs-mp-bar-position").outerHeight();
        var topBar = $(".toppromobar").outerHeight();

    	$("html").removeClass("parent__menu__closed");
		$("body").css("padding-top", siteHeader);
		$(".product-slider").css("top", (siteHeader + 25) +"px");

  		if (scrolltop > prevvalue){

          	if(scrolltop >= 100){

                if($(".cs-mp-bar-position").length > 0){
					$(".site-header").css("top","-"+mpBar+"px");
                }

              	if($(".toppromobar").length > 0){
					$(".site-header").css("top","-"+topBar+"px");
                }
            }
       	} else {

           if($(".cs-mp-bar-position").length > 0){
				$(".site-header").css("top","0");
           }
          
           if($(".toppromobar").length > 0){
             $(".site-header").css("top", "0");
           }
       	}

      	prevvalue = scrolltop;
	});
   
   	if($('body').hasClass('template-cart')) {

      	$(".addon-related").slick({
            dots: true,
            nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" aria-disabled="false"><i class="mdi mdi-chevron-right"></i></button>',
            prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" aria-disabled="false"><i class="mdi mdi-chevron-left"></i></button>',
            infinite: false,
            variableWidth: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 767,
                settings: {
                  centerMode: true,
                  slidesToShow: 1,
                  centerPadding: '60px',
                }
              }
            ]
        });
    }

	$(document).on('click', '.addon-related .addon-cart', function(evt) {

       var currentEl = $(this);
       var product_id = currentEl.data("variant_id");
       var product_variant = currentEl.data("variant");
      
	   if(currentEl.hasClass("loading")) {
		  return false;
		}

       $("body").data("addonslide", currentEl.parents(".addon-item").index());

       currentEl.find(".addon-cart-text").text("LOADING...");
       currentEl.addClass("loading");

       jQuery.ajax({
         type: 'POST',
         url: '/cart/add.js',
         data: {
           quantity: 1,
           id: product_id
         },
         dataType: 'json',
         success: function(response) {
      var currentUrl = window.location.href;
if (currentUrl.includes('cart')) {
    location.reload();
} else {
    ajaxifyShopify.buildCart(response);
}
           currentEl.attr('disabled', true);
       	   currentEl.find(".addon-cart-text").text("ADDED TO CART");
       	   currentEl.removeClass("loading");
         },
         error: function(XMLHttpRequest, textStatus) {}
       });

       return false;
     });
   
   	 $('.yt-reviews-wrapper .yt-reviews-feature').on('click',function(){
       $('.yt-popup-reviews-overlay').show();
       $('.yt-popup-reviews-inner').show();
       $('body').css('overflow','hidden');

       if($('.yt-popup-reviews-slides').hasClass('slick-initialized')) {
       } else {
         var yt_popup_reviews_slides =  $('.yt-popup-reviews-slides');

         yt_popup_reviews_slides.slick({
           dots: false,
           infinite: true,
           speed: 300,
           slidesToShow: 1,
           slidesToScroll: 1,
           adaptiveHeight: true,
           pauseOnFocus: false,
           pauseOnHover: false,
           prevArrow: $('.yt-popup-slider-arrow.slick-prev'),
           nextArrow: $('.yt-popup-slider-arrow.slick-next')
         });
       }

       var dataIndex = $(this).parents('.yt-reviews-item').data('index');
       $('.yt-popup-reviews-slides').slick('slickGoTo', dataIndex - 1, true);

       return false;
     });
   
     $('.yt-reviews-wrapper .yt-review-popup').on('click',function(){
       $('.yt-popup-reviews-overlay').show();
       $('.yt-popup-reviews-inner').show();
       $('body').css('overflow','hidden');

       if($('.yt-popup-reviews-slides').hasClass('slick-initialized')) {
       } else {
         var yt_popup_reviews_slides =  $('.yt-popup-reviews-slides');

         yt_popup_reviews_slides.slick({
           dots: false,
           infinite: true,
           speed: 300,
           slidesToShow: 1,
           slidesToScroll: 1,
           adaptiveHeight: true,
           pauseOnFocus: false,
           pauseOnHover: false,
           prevArrow: $('.yt-popup-slider-arrow.slick-prev'),
           nextArrow: $('.yt-popup-slider-arrow.slick-next')
         });
       }
       
       var dataIndex = $(this).parents('.yt-reviews-item').data('index');
       $('.yt-popup-reviews-slides').slick('slickGoTo', dataIndex - 1, true);

       return false;
     });
   
     $('.yt-popup-reviews-inner .yt-popup-close').on('click',function(){
       $('.yt-popup-reviews-overlay').hide();
       $('.yt-popup-reviews-inner').hide();
       $('body').css('overflow','auto');

       return false;
     });
   
     $('#product .close').on('click',function(){
       $('#product .modal').hide();
       $('body').css('overflow','auto');
     });

     $(document).on('click', '.fn-tabs-wrapper .fn-tabs-list .fn-tabs-link', function() {
       console.log(123);
       return false;
     });

     $(document).on('click', '.product-splitit-wrapper .product-splitit-link', function(){
       $('.cs-image-wrapper').show();
       $('body').css('overflow','hidden');
       return false;
     });
   
     $(document).on('click', '.cart-splitit-wrapper .cart-splitit-link', function(){
       $('.cs-image-wrapper').show();
       $('body').css('overflow','hidden');
       return false;
     });

     $('.cs-image-wrapper .cs-image-close').on('click',function(){
       $('.cs-image-wrapper').hide();
       $('body').css('overflow','auto');
       return false;
     });

     $('.close-modal-cta a').on('click',function(){
       if($(this).parents('.modal-content').hasClass('remove-celliant-popup')) {
         var a = $(this).attr('data-value');
         $("input[data-value='"+a+"']").prop("checked", false).trigger('change');
       }

       $('#product .modal').hide();
       $('body').css('overflow','auto');
     });

     $('#product .cs-modal-overlay').on('click',function(){
       $('#product .modal').hide();
       $('body').css('overflow','auto');
     });

     $(document).on('click', '.popup-click', function() {

       var targetEl = $(this).data('class');

       if($(this).parents('.add-on-row').hasClass('frequent-extra-white-glove')) {

         if($('.'+targetEl).length > 0) {

           $('.'+targetEl).show();
           $("body").css('overflow', 'hidden');
         }
       } else {

         if($('.'+targetEl).length > 0) {

           $('body').append($('.product-tiles .'+targetEl));
           $('body > .'+targetEl).show();
           $("body").css('overflow', 'hidden');
         }
       }

       return false;
     });

     $(document).on('click', '.global-frequent-wrapper', function(e) {

       if (e.target !== this) {} else {
         $('.global-frequent-wrapper').hide();
         $('body').css('overflow', 'auto');
         return false;
       }
     });

     $(document).on('click', '.global-frequent-wrapper .global-frequent-selection-btn', function() {

       var service_selection_value = '';

       if($('.gf-detail-selection:checked').length > 0) {
         service_selection_value = $('.gf-detail-selection:checked').val();
       }

       if($('.gf-detail-selection:checked').parents('.gf-details').find('.gf-detail-full-selection:checked').length > 0) {
         service_selection_value = $('.gf-detail-selection:checked').parents('.gf-details').find('.gf-detail-full-selection:checked').val();
       }

       if(service_selection_value) {
         $('.frequent-products .frequent-extra-white-glove').remove();
       }
       
       if($('.frequent-extra-list .frequent-extra-'+service_selection_value).length > 0) {

         var frequentextraData = $('.frequent-extra-list .frequent-extra-'+service_selection_value).html();
         $('.product-tiles .frequent-products .check-found').append(frequentextraData);

         $('.product-tiles .frequent-products #fv-'+service_selection_value).prop('checked', true);

         $('.product-tiles .frequent-products').show();
       }

       $('.global-frequent-wrapper').hide();
       $('body').css('overflow', 'auto');

       return false;
     });

     $(document).on('click', '.global-frequent-wrapper .global-frequent-btn', function() {
       $('.global-frequent-wrapper').hide();
       $('body').css('overflow', 'auto');

       return false;
     });

     $(document).on('click', '.global-frequent-wrapper .close', function() {
       $(".global-frequent-wrapper").hide();
       $("body").css('overflow', 'auto');

       return false;
     });

     $('.fn-tabs-wrapper .fn-tabs-link').click(function() {
       var targetAttr = $(this).data('target');

       $('.fn-tabs-wrapper .fn-tabs-link').removeClass('active');
       $(this).addClass('active');

       $('.fn-tabs-wrapper .fn-tabs-column').addClass('cs-hide');
       $(targetAttr).removeClass('cs-hide');
       return false;
     });

     $('.fn-tabs-wrapper .fn-learn-splitit').click(function() {
       $('.cs-image-wrapper').show();
       $('body').css('overflow','hidden');
       return false;
     });

     if ($(window).width() < 601) {
       $('.fn-tabs-wrapper .fn-caller-affirm').addClass('active');
       $('.fn-tabs-wrapper .fn-caller-splitit').removeClass('active');

       $('.fn-tabs-wrapper #fn-tabs-affirm').removeClass('cs-hide');
       $('.fn-tabs-wrapper #fn-tabs-splitit').addClass('cs-hide');
     } else {
       $('.fn-tabs-wrapper .fn-caller-affirm').addClass('active');
       $('.fn-tabs-wrapper .fn-caller-splitit').removeClass('active');

       $('.fn-tabs-wrapper #fn-tabs-affirm').removeClass('cs-hide');
       $('.fn-tabs-wrapper #fn-tabs-splitit').removeClass('cs-hide');
     }

     $(window).resize(function() {

       if ($(window).width() < 601) {
         $('.fn-tabs-wrapper .fn-caller-affirm').addClass('active');
         $('.fn-tabs-wrapper .fn-caller-splitit').removeClass('active');

         $('.fn-tabs-wrapper #fn-tabs-affirm').removeClass('cs-hide');
         $('.fn-tabs-wrapper #fn-tabs-splitit').addClass('cs-hide');
       } else {
         $('.fn-tabs-wrapper .fn-caller-affirm').addClass('active');
         $('.fn-tabs-wrapper .fn-caller-splitit').removeClass('active');

         $('.fn-tabs-wrapper #fn-tabs-affirm').removeClass('cs-hide');
         $('.fn-tabs-wrapper #fn-tabs-splitit').removeClass('cs-hide');
       }
     });

     $(document).on('click', '.cs-bonus-title', function(){
       var productimg = '';
       var productDesc = '';
       var variantPrice = '';
       var orderProduct = '';
       var modalHeading = '';
       var modalDesc = '';
       var modalsubDesc = '';
       var productList = '';

       var variantTitle = $(this).parents('.cs-bonus-box').find('.cs-bonus--variant').text();
       
       $('#product .container-popup-item-second').hide();

       $('body').css('overflow','hidden');
       productimg = $(this).data('prod-img');
       productDesc = $(this).data('prod-desc');
       orderProduct = $(this).parents('.cs-bonus-box').find('input').attr('data-value');
	   variantPrice = $(this).parents('.cs-bonus-box').find('.el_price_bundle').html();
       modalHeading = $(this).data('fheading');
       modalDesc = $(this).data('fdescription');
       modalsubDesc = $(this).data('subfdescription');
       productList = $(this).data('prod-list');

       $('#product .container-popup-item-first img').attr('src',productimg);
      $('#product .container-popup-item-first .right-col .modal-head').html($(this).data('html'));
       $('#product .product-desc').text(productDesc);
       $('#product .container-popup-item-first .right-col .variant-price').html($.trim(variantTitle) + ' - ' + variantPrice);
       $('#product .order a').attr('data-value', orderProduct);
       $('#product .close-modal-cta a').attr('data-value', orderProduct);

       $('#product .modal-content h3').html(modalHeading);
       $('#product .modal-content .modal-description').text(modalDesc);
       $('#product .modal-content .submodal-description').text(modalsubDesc);
       $('#product .modal-product-list').html(productList);
       if ($(".modal-content h3").text() == 'Bear Sleep Bundle'){
         $("#product .order").hide();
         var pElement = document.createElement("p");
  pElement.textContent = "";
pElement.classList.add("dark", "small-print");
  var modalCtaElement = document.querySelector(".modal-cta");
  modalCtaElement.parentNode.insertBefore(pElement, modalCtaElement);
       }else{
          $("#product .order").show();
       }

      
       $('#product .close-modal-cta a').text('CLOSE');

       $('#product .modal').show();
       
       return false;
     });

     $(document).on('click', '.product-popup-call', function(){

       if($(this).parents('.add-on-row').hasClass('frequent-extra-white-glove')) {

         var targetEl = $(this).parents('.add-on-row').find('.popup-click').data('class');

         if($('.'+targetEl).length > 0) {

           $('.'+targetEl).show();
           $("body").css('overflow', 'hidden');
         }
       } else {
         var productimg = '';
         var productDesc = '';
         var variantPrice = '';
         var orderProduct = '';
         var modalHeading = '';
         var modalDesc = '';
         var modalsubDesc = '';
         var productList = '';

         var variantTarget = $(this).data('target-el');
         var variantTitle = $(this).parents('.add-on-inner').find('.add-on-variant').text();

         $('#product .container-popup-item-second').hide();

         $('body').css('overflow','hidden');
         productimg = $(this).data('prod-img');
         productDesc = $(this).data('prod-desc');
         orderProduct = $(this).parents('.add-on-row').find('input').attr('data-value');
         variantPrice = $(this).parents('.add-on-row').find('.el_price_bundle').html();
         modalHeading = $(this).data('fheading');
         modalDesc = $(this).data('fdescription');
         modalsubDesc = $(this).data('subfdescription');
         productList = $(this).data('prod-list');
         $('#product .container-popup-item-first img').attr('src',productimg);
         $('#product .container-popup-item-first .right-col .modal-head').html($(this).data('html'));
         var parentElement = $(this).closest('.add-on-inner');
         if (!parentElement.find('.close-text').length) {} else {
         var url = window.location.href; // Get the current URL
        if (url === 'https://www.bearmattress.com/products/adjustable-bed-deal') {
        $('#product .container-popup-item-first .right-col .modal-head').append('<span class="close-text">50% OFF</span>');
        } else {
       $('#product .container-popup-item-first .right-col .modal-head').append('<span class="close-text">CLOSEOUT</span>');
  }
}

   $('#product .product-desc').text(productDesc);
         $('#product .container-popup-item-first .right-col .variant-price').html($.trim(variantTitle) + ' - ' + variantPrice);
         $('#product .order a').attr('data-value', orderProduct);
         $('#product .close-modal-cta a').attr('data-value', orderProduct);

         $('#product .modal-content h3').text(modalHeading);
         $('#product .modal-content .modal-description').text(modalDesc);
          $('#product .modal-content .submodal-description').text(modalsubDesc);
         $('#product .modal-product-list').html(productList);
if ($(".modal-content h3").text() == 'Bear Sleep Bundle'){
         $("#product .order").hide();
       }else{
          $("#product .order").show();
       }
         if ($(".modal-content h3").text() == '50% Off Adjustable Flex Bed + Mattress Deal'){
           $('#product .order a').text('SHOP NOW');
         }else{
           $('#product .order a').text('YES, INCLUDE IT');
         }
// Check if the modal content h3 text is '50% Off Adjustable Flex Bed + Mattress Deal'
if ($(".modal-content h3").text() == '50% Off Adjustable Flex Bed + Mattress Deal') {
  // Find the anchor tag within the div with class 'order'
  var anchorTag = $(".order a");

  // Change the href attribute to the desired value
  anchorTag.attr("href", "https://www.bearmattress.com/products/adjustable-bed-deal");
} else {
  // If the condition is not met, set the href attribute to "javascript:void(0)"
  $(".order a").attr("href", "javascript:void(0)");
}

         $('#product .close-modal-cta a').text('NO, THANK YOU');

         $('#product .modal').show();
       }
       
       return false;
     });
   
	 $('.popup-caller').on('click',function() {
       	 $(this).siblings('.popup-click').trigger('click');
     });

     $('#product .order a').on("click",function() {
       var a = $(this).attr('data-value');
       $("input[data-value='"+a+"']").prop("checked", true).trigger('change');
       $('body').css('overflow','auto');
       $('#product .modal').hide();
     });
  });

 if($("body").hasClass("custom__body__reviews")) {
   
   $(".directly-review").click(function() {
     var _this = $(this);

     //Move to the Page Top before unloading the page.
     $(window).on('beforeunload', function(){
       $(window).scrollTop(0);
     });

     setTimeout(function() {
       	window.location.href = _this.attr("href");
     }, 200);
     
     return false;
   });
   
   $(".reviews-more a").click(function() {
     $(this).toggleClass('active');
     $('.reviews-small-wrapper').slideToggle();

     return false;
   });
 }

  $(window).on('load', function(){
    var url_string = window.location.href;

    if(url_string.indexOf("target=1") > -1 && $("#review-section").length > 0) {

      $('html, body').animate({scrollTop: $("#review-section").offset().top - 100}, 500);
    }

    var mainurl = window.location.href;
    var parseurl = new URL(mainurl);
    var urlvariant = parseurl.searchParams.get("variant");
    
	var dropdownEl = $('#dropdownMattressSize');
    
    if(urlvariant) {
        var dropdownValue = urlvariant;
    } else {
      
        var dropdownIndex = dropdownEl.data('selection');
       if (window.location.href.indexOf("bear-trek-rv-mattress") > -1) {
           var dropdownValue = dropdownEl.find('option:eq(0)').attr('value');
       }else{
           var dropdownValue = dropdownEl.find('option:eq('+dropdownIndex+')').attr('value');
       }
    }
    dropdownEl.val(dropdownValue).change();
  });  
  
// ADVANTAGE GRID SECTION MOBILE SLIDER //
  var slickslide =  $('.advantage-grid__slider');
  if ($(window).width() < 1024) {
    slickslide.slick({
  	   infinite: true,
       dots: true,
       arrows: true,
       slidesToShow: 1,
       slidesToScroll: 1
   });
  }
  
var iconslide =  $('.hightlight-grid-center');
var winSize = $('#shopify-section-flex-section-publications').length > 0 ? 1201 : 901;
var initialSlide = $('#shopify-section-section-publications-3').length > 0 ? 1 : 2;

function iconSlide() {
  iconslide.slick({
      arrows: false,
      centerMode: true,
      infinite: false,
      variableWidth: true,
      responsive: [
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              initialSlide: initialSlide,
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
}

if ($(window).width() < winSize) {

  if(!iconslide.hasClass('slick-initialized')) {
	iconSlide();
  }
} else {

  if(iconslide.hasClass("slick-initialized")) {
	iconslide.slick("unslick");
  }
}

$(window).resize(function () {

  if ($(window).width() < winSize) {

    if(!iconslide.hasClass('slick-initialized')) {
      iconSlide();
    }
  } else {

    if(iconslide.hasClass("slick-initialized")) {
      iconslide.slick("unslick");
    }
  }
});

$(document).ready(function(){
  var active_currency = Shopify.currency.active;
  
  var recycleProducts = [39775214567529, 39775213715561, 39775213551721, 39775216500841, 39775216762985, 39775217123433];

  var itemsData = {};

  $(".currency-wrapper .currency-dropdown").val(active_currency);

  var currency_value = $(".currency-wrapper .currency-dropdown").val();
  var currency_image = $(".currency-wrapper .currency-dropdown").find(':selected').data('image');

  $(".currency-wrapper .currency-selector img").attr("src", currency_image);
  $(".currency-wrapper .currency-selector span").text(currency_value);

  $(".currency-wrapper .currency-dropdown").change(function() {
    $(this).parents(".shopify-currency-form").submit();
    return false;
  });

  $('.product-description__wrap .link-wrapper').prepend($('#shopify-section-product-discount-code'));
  $('.product-description__wrap .link-wrapper').prepend($('#bo-product-discount-code'));
 
  // wrapping timer element and link
  var prependTimerElement = $('<span class="cs-countdown-progress"></span>');
  $('.product-description__wrap .link-wrapper a').parent().after(prependTimerElement);

  function timerConvert(data) {
    return ("0" + data).slice(-2);
  }
  
  //getting countdown starting and ending time from body attribute
  var start_timer = $.trim($(".topbar-on").attr("data-start-timer"));
  var end_timer = $.trim($(".topbar-on").attr("data-end-timer"));
  
  if (start_timer=="false" && end_timer=="false") { 
    
    start_timer ="August 26, 2022 11:00:00";
    end_timer = "September 6, 2022 3:00:00";
  }

  // Set the date we're counting down to
  var countUpDate = new Date(start_timer).getTime();

  var countDownDate = new Date(end_timer).getTime();

  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  
  var percentage = Math.round(((now - countUpDate) / (countDownDate - countUpDate)) * 100)+ '%';

  var minutesLeft = Math.floor(distance / (1000 * 60));

  // Time calculations for days, hours, minutes and seconds
  var days = timerConvert(Math.floor(distance / (1000 * 60 * 60 * 24)));
  var hours = timerConvert(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  var minutes = timerConvert(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  var seconds = timerConvert(Math.floor((distance % (1000 * 60)) / 1000));

  $(".cs-countdown-progress").html('<span class="cs-countdown-timer"></span><span class="cs-countdown-progress-bar"><span class="cs-countdown-progress-default"></span></span>');
  $(".cs-topbar-content .cs-countdown-progress").css("display", "inline-block");
  $(".toppromobar .cs-countdown-progress-default").css("width", percentage);
  $(".cs-countdown-timer").html("<span class='cs-timer'>"+"<span class='oe'>ENDS:&nbsp;</span>"+days+"</span>day <span class='cs-timer'>"+hours+"</span>hr <span class='cs-timer'>"+minutes+"</span>min <span class='cs-timer'>"+seconds+"</span>sec");
  $(".cs-topbar-content").removeClass('no-countdown');

  // If the count down is over, write some text 
  if (distance < 0) {
  	$(".cs-countdown-progress").html('').css("display", "none");
    $(".cs-topbar-content").addClass('no-countdown');
  }

  // Update the count down every 1 second
  var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    
 	var percentage = Math.round(((now - countUpDate) / (countDownDate - countUpDate)) * 100)+ '%';

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = timerConvert(Math.floor(distance / (1000 * 60 * 60 * 24)));
    var hours = timerConvert(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = timerConvert(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = timerConvert(Math.floor((distance % (1000 * 60)) / 1000));

    $(".cs-countdown-progress").html('<span class="cs-countdown-timer"></span><span class="cs-countdown-progress-bar"><span class="cs-countdown-progress-default"></span></span>');
    $(".cs-topbar-content .cs-countdown-progress").css("display", "inline-block");
    $(".toppromobar .cs-countdown-progress-default").css("width", percentage);
  	$(".cs-countdown-timer").html("<span class='cs-timer'>"+"<span class='oe'>ENDS:&nbsp;</span>"+days+"</span>day <span class='cs-timer'>"+hours+"</span>hr <span class='cs-timer'>"+minutes+"</span>min <span class='cs-timer'>"+seconds+"</span>sec");
    $(".cs-topbar-content").removeClass('no-countdown');

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);

      $(".cs-countdown-progress").html('').css("display", "none");
      $(".cs-topbar-content").addClass('no-countdown');
    }
  }, 1000);
  
  var checkClearedCart = localStorage.getItem('030317_cart');

  if(Number(checkClearedCart) != 1) {
    // To clear cart for FREE pillow issue
    $.ajax({
      type: "POST",
      url: '/cart/clear.js',
      dataType: 'json',
      success: function(cart){
        console.log('Cart cleared!');
        ajaxifyShopify.updateCountPrice(cart);
        localStorage.setItem('030317_cart', 1);
      }
    });
  } else {
	  console.log('Already cleared!');
  }

  $.ajax({
    type: 'GET',
    url: '/cart.js',
    dataType: 'json',
    async: false
  }).done(function(cartData) {

    cartData.items.forEach(function(line_item, index) {

      if(recycleProducts.indexOf(line_item.id) > -1) {
        itemsData[line_item.key] = 0;
      }
    });

    if(jQuery.isEmptyObject(itemsData)) {

    } else {

      RC.cart.update({updates: itemsData}, function(cart) {
		ajaxifyShopify.updateCountPrice(cart);
      });
    }
  });
  
  $("#dropdownMattressSize option").each(function(){

	$(this).text($(this).text().replace("Protector", "").trim())
  });

  if($('.return-exchange-policy').length > 0) {

    $('.return-exchange-policy__list-item-title').click(function(e){

      if($(this).hasClass("has-type-list")) {
        return false;
      }

      e.preventDefault();
      var _this = $(this);

      var parentEle = _this.parents('.return-exchange-policy__list-item-wrap');

      if(!_this.hasClass('collapse')){
      	parentEle.find('.return-exchange-policy__list-item-content-wrap').addClass('in').slideUp();	
      } else {
//         $('.return-exchange-policy__list-item-title').addClass('collapse'); 
//         $('.return-exchange-policy__list-item-content-wrap.in').slideUp(300);
//         $('.return-exchange-policy__list-item-content-wrap.in').removeClass('in');
//         setTimeout(function(){
//         	$('html, body').animate({scrollTop: parentEle.offset().top - 100}, 500);
//         	parentEle.find('.return-exchange-policy__list-item-content-wrap').addClass('in').slideDown();	
//         },310);
      	parentEle.find('.return-exchange-policy__list-item-content-wrap').removeClass('in').slideDown();
      }

      _this.toggleClass('collapse');
    });
  } 

  $('.product-firmness-wrap').children().first().removeClass('inv').addClass('vis');
  $('#firmness-scale-dropdown').change(function(){
    var activePosition = $("#firmness-scale-dropdown").children('option:selected').val();
    $('.product-firmness-wrap').children('.content').removeClass('vis').addClass('inv');
    $('.product-firmness-wrap .content[ data-block-id = "'+activePosition+'"]' ).removeClass('inv').addClass('vis');
  });

  $(document).on("click", ".has-type-accordion", function() {
    
//   	if($(this).hasClass('active')) {
//       	$('.pdp-accordion .has-type-accordion').removeClass('active');
//       	$('.pdp-accordion .accordion-content').slideUp();
//     } else {
//       	$('.pdp-accordion .has-type-accordion').removeClass('active');
//       	$(this).addClass('active');
//       	$('.pdp-accordion .accordion-content').slideUp();
//       	$(this).next(".accordion-content").slideDown(500);
//     }
    
  	if($(this).hasClass('active')) {
      	$(this).removeClass('active');
      	$(this).next(".accordion-content").slideUp(500);
    } else {
      	$(this).addClass('active');
      	$(this).next(".accordion-content").slideDown(500);
    }

  	return false;
  });
  
    $(document).on("click", ".warranty-list a", function() {
      var targetEl = $(this).data("href");

      $('html, body').animate({scrollTop: $(targetEl).offset().top - 100}, 500);

      return false;
    });
  
	// compare feature page js
  	$(".fcompare-wrapper .fcompare-items .fcompare-item").css("opacity", 0);

    if($(window).outerWidth() < 992) {

        $(".fcompare-wrapper .fcompare-items").slick({
          infinite: false,
          dots: false,
          nextArrow: false,
          prevArrow: false,
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true

        }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
          	$(".fcompare-active").css("left", (nextSlide * 100));
            $(".fcompare-wrapper .fcompare-tab li").removeClass("active");
            $(".fcompare-wrapper .fcompare-tab li:eq("+nextSlide+")").addClass("active");
        });
    }

  	$(".fcompare-wrapper .fcompare-tab li a").click(function(){
      	var elIndex = $(this).parent("li").index();
      	$(".fcompare-wrapper .fcompare-items").slick('slickGoTo', elIndex);
      	return false;
    });
  
    if($(".has-images-variant").length > 0) {
      	var winWidth = $(window).outerWidth();

        $(".has-images-variant").each(function() {
			var desktop_image = $(this).data("desktop");
			var ipad_image = $(this).data("ipad");
			var mobile_image = $(this).data("mobile");
          	var el_image = $(this);

          	if(winWidth > 991) {
              	el_image.attr("src", desktop_image);
            } else if(winWidth > 767 && winWidth < 992) {
              	el_image.attr("src", ipad_image);
            } else {
              	el_image.attr("src", mobile_image);
            }
        });
    }

    $('.fcompare-global-select').change(function() {

      var selected_variant = Number($(this).val());

      $('.fcompare-option.fcompare-elite-hybrid-option').text(elite_hybrid_variant[selected_variant * 6][0].split('/')[0].trim());
      $('.fcompare-option.fcompare-hybrid-option').text(hybrid_variant[selected_variant * 2][0].split('/')[0].trim());
      $('.fcompare-option.fcompare-pro-option').text(pro_variant[selected_variant * 2][0].split('/')[0].trim());
      $('.fcompare-option.fcompare-mattress-option').text(mattress_variant[selected_variant * 2][0].split('/')[0].trim());

      $('.fcompare-price.fcompare-elite-hybrid-price').text(elite_hybrid_variant[selected_variant * 6][2]);
      $('.fcompare-price.fcompare-hybrid-price').text(hybrid_variant[selected_variant * 2][2]);
      $('.fcompare-price.fcompare-pro-price').text(pro_variant[selected_variant * 2][2]);
      $('.fcompare-price.fcompare-mattress-price').text(mattress_variant[selected_variant * 2][2]);

      if(elite_hybrid_variant[selected_variant][3]) {
      	$('.fcompare-old-price.fcompare-elite-hybrid-old-price').text(elite_hybrid_variant[selected_variant * 6][3]);
      } else {
      	$('.fcompare-old-price.fcompare-elite-hybrid-old-price').text('');
      }

      if(hybrid_variant[selected_variant][3]) {
      	$('.fcompare-old-price.fcompare-hybrid-old-price').text(hybrid_variant[selected_variant * 2][3]);
      } else {
      	$('.fcompare-old-price.fcompare-hybrid-old-price').text('');
      }
      
if(pro_variant[selected_variant][3]) {
      	$('.fcompare-old-price.fcompare-pro-old-price').text(pro_variant[selected_variant * 2][3]);
      } else {
      	$('.fcompare-old-price.fcompare-pro-old-price').text('');
      }

      if(mattress_variant[selected_variant][3]) {
      	$('.fcompare-old-price.fcompare-mattress-old-price').text(mattress_variant[selected_variant * 2][3]);
      } else {
      	$('.fcompare-old-price.fcompare-mattress-old-price').text('');
      }

      $('.buy-2019-hybrid-direct').data('product', elite_hybrid_variant[selected_variant * 3][1]);
      $('.buy-hybrid-direct').data('product', hybrid_variant[selected_variant][1]);
      $('.buy-pro-direct').data('product', pro_variant[selected_variant* 2][1]);
      $('.buy-mattress-direct').data('product', mattress_variant[selected_variant * 2][1]);

      $('.buy-2019-hybrid-direct').data('attached', elite_hybrid_variant[selected_variant * 3][4]);
      $('.buy-hybrid-direct').data('attached', hybrid_variant[selected_variant][4]);
      $('.buy-pro-direct').data('attached', pro_variant[selected_variant* 2][4]);
      $('.buy-mattress-direct').data('attached', mattress_variant[selected_variant * 2][4]);

      return false;
    });

    var fcompare_global_select = $('.fcompare-global-select');
    var index_to_highlight = fcompare_global_select.data('selection');
    var variant_to_highlight = fcompare_global_select.find('option:eq('+index_to_highlight+')').attr('value');
	fcompare_global_select.val(variant_to_highlight).change();

  	$('.fcompare-buy .buy-direct').click(function() {
        var currentEl = $(this);
        var variantName = $('.fcompare-global-select option:selected').text();
        var product_id = currentEl.data('product');
        var attached_id = currentEl.data('attached');
      
      	var itemsData = [];

        if(currentEl.hasClass("loading")) {
          return false;
        }
      
        var productItem = {};
        productItem.quantity = 1;
        productItem.id = product_id;
        productItem.properties = {};

      	if(attached_id) {
            var bonusItem = {};
            var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
            var bonusProtector = variantName + ' Terry Mattress Protector';

            if(variantName == "Cal King" || variantName == "King") {
              bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
              bonusProtector = variantName + ' Terry Mattress Protector';
            }

          	if(variantName == "Split King") {
              bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
              bonusProtector = 'Twin XL Terry Mattress Protector (2x)';
            }

          	bonusItem.quantity = 1;
            bonusItem.id = attached_id;
            bonusItem.properties = {};
            bonusItem.properties['_FREE'] = attached_id;
			bonusItem.properties['_Variant'] = bonusPillow;
			// bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;
            productItem.properties['_combo'] = attached_id;
function getRandom5DigitNumber() {
                return Math.floor(10000 + Math.random() * 90000);
                 }
               // var random5DigitNumber = getRandom5DigitNumber(); 
               //  bonusItem.properties['_pair'] = random5DigitNumber;
               //  productItem.properties['_pair'] = random5DigitNumber;
            itemsData.push(bonusItem);
        }

        currentEl.addClass("loading");
      
        itemsData.push(productItem);
          
        var finalItem = {};
        finalItem['items'] = itemsData;

        RC.cart.add(finalItem, function(cart){

            currentEl.removeClass("loading");

            RC.cart.get(function(response){
                ajaxifyShopify.updateCountPrice(response);
                ajaxifyShopify.buildCart(response);
            });
        });

        return false;
    });

  	 var pdp_url = window.location.href;

    if(pdp_url.indexOf("/bear-hybrid") > -1 || pdp_url.indexOf("/bear-pro") > -1 || pdp_url.indexOf("/bear-original-mattress") > -1 || pdp_url.indexOf("/elite-hybrid-mattress") > -1 || pdp_url.indexOf("/star-hybrid-mattress") > -1 || pdp_url.indexOf("/pro-hybrid-mattress") > -1 || pdp_url.indexOf("/adjustable-bed-deal") > -1) {
        var winScrolltop = $(window).scrollTop();
        var elementTop;
        if (pdp_url.indexOf("/bear-original-mattress") > -1){
          elementTop = jQuery('product-form form .product-form__buttons button').offset().top;
        }
        else{
          elementTop = jQuery('.product-box__wrap .product-buy__button_add_on').offset().top;
        }
      
        if(winScrolltop > elementTop && $(window).outerWidth() < 1025) {
          $('body').addClass('pdp-sticky-choose');
        } else {
          $('body').removeClass('pdp-sticky-choose');
        }
    }
    
          
});

$(window).on('scroll',function(){
  	var pdp_url = window.location.href;

    if(pdp_url.indexOf("/bear-hybrid") > -1 || pdp_url.indexOf("/bear-pro") > -1 || pdp_url.indexOf("/bear-original-mattress") > -1 || pdp_url.indexOf("/elite-hybrid-mattress") > -1 || pdp_url.indexOf("/pro-hybrid-mattress") > -1 || pdp_url.indexOf("/adjustable-bed-deal") > -1) {
        var winScrolltop = $(window).scrollTop();
        var elementTop;
        if (pdp_url.indexOf("/bear-original-mattress") > -1){
          elementTop = jQuery('product-form form .product-form__buttons button').offset().top;
        }
        else{
          elementTop = jQuery('.product-box__wrap .product-buy__button_add_on').offset().top;
        }
        if(winScrolltop > elementTop && $(window).outerWidth() < 1025) {
          $('body').addClass('pdp-sticky-choose');
        } else {
          $('body').removeClass('pdp-sticky-choose');
        }
    }
});

$(window).on('beforeunload', function(){
  if(updation_in_progress == true) {
    return "You have some unsaved changes";
  }
});

$(window).on("load", function() {
  
  	var highestBox = 0;
  
    $(".fcompare-wrapper .fcompare-items .fcompare-item-inner").each(function() {

      if($(this).outerHeight() > highestBox) {
        highestBox = $(this).outerHeight(); 
      }
    });
  
	$(".fcompare-wrapper .fcompare-items .fcompare-item-inner").css("min-height", highestBox);
  
  	$(".fcompare-wrapper .fcompare-items .fcompare-item").css("opacity", 1);
  
	$(".shipping-line").on("click",function(){
      	var tooltipContent = $(this).data("content");
		var tooltiptitle = $(this).text();
      
        if($(this).data('title')) {
			var tooltiptitle = $(this).data("title");
        }

      	$("body").css("overflow","hidden");

      	$(".cs-tooltip-title").html(tooltiptitle);
      	$(".cs-tooltip-content").html(tooltipContent);
      	$(".cs-tooltip-wrapper").show();
      
      	return false;
    });

    $(document).on('click', ".cs-tooltip-box", function(){
        var _this = $(this);

        var coupon = _this.data('code');

        const selection = navigator.clipboard;

        selection.writeText(coupon).then(function() {
          _this.find('.custom-tooltip').text('Code Copied!')
        });

        return false;
    });

    $(document).on('mouseleave', ".cs-tooltip-box", function(){
        var _this = $(this);

        _this.find('.custom-tooltip').text('Click To Copy');

        return false;
    });
  
    $(".cs-tooltip-wrapper .cs-tooltip-btn").on("click",function(){
        $(".cs-tooltip-wrapper").hide();
      	$("body").css("overflow","auto");
      
      	return false;
    });
  
    $(".cs-tooltip-wrapper .close").on("click",function(){
        $(".cs-tooltip-wrapper").hide();
      	$("body").css("overflow","auto");

      	return false;
    });

    $(".cs-tooltip-wrapper").on('click',function(e){

      if (e.target !== this) {} else {

        $(".cs-tooltip-wrapper").hide();
        $("body").css("overflow","auto");

        return false;
      }
    });

    if($('body').hasClass('template-collection')) {

      $(".product-slider__wrap").slick({
        infinite: false,
        dots: false,
        nextArrow: false,
        prevArrow: false,
        arrows: false,
        slidesToShow: 1,
      }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        
        var currentSlider = slick.$slider.parent();

        currentSlider.find(".product-slider__controls-thumb").removeClass("active");
        currentSlider.find(".product-slider__controls-thumb:eq("+nextSlide+")").addClass("active");

        if($(".product-slider__controls-thumb.has-video").length > 0) {
          $(".product-slider__slide video").each(function(){
            $(this).get(0).pause();
          });
        }

        if($(".product-slider__slide.video-youtube").length > 0) {
          $('.product-slider__slide.video-youtube').each(function(i) {
            player[i].pauseVideo();
          });
        }
      });

      $(".product-slider__controls-thumb").on('click', function(){
        var slideIndex = $(this).index();
        $(this).parents('.collection-product-slider').find(".product-slider__wrap").slick('slickGoTo', slideIndex);
      
      });
    }

  	if($('body').hasClass('template-cart')) {
      	let listing_content = $('.cs-mattress-list-wrapper').html();
		$('.cart__body__wrapper .cart__body').append('<div class="mattress-list-wrapper">'+listing_content+'</div>');
    }
  
    $.ajax({
        url: "https://api.yotpo.com/v1/widget/yjNXdflh4p4OfTj1ZjS9Bv5mc5B5kdK7ca5iEb6d/reviews?per_page=0&page=1",
        success: function (result1) {

            $.ajax({
                url: "https://api.yotpo.com/products/yjNXdflh4p4OfTj1ZjS9Bv5mc5B5kdK7ca5iEb6d/yotpo_site_reviews/bottomline",
                success: function (result2) {
                    $(".yotpo-total-reviews-count").text((result1.response.bottomline.total_review + result2.response.bottomline.total_reviews).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                }
            });
        }
    });

  $('a[href="#gorgias"]').click(function() {
      if (typeof GorgiasChat.open !== "undefined") { 
        GorgiasChat.open();
      }
      
      return false;
    });
    if (document.querySelector(".tn-gate-toggle-input").checked){
      document.querySelector(".frequent-products").classList.add("hidden")
    }
    else{
      document.querySelector(".frequent-products").classList.remove("hidden")
    }
    document.querySelector(".tn-gate-toggle-input")?.addEventListener("change", (event)=>{
      if(event.target.checked){
         document.querySelector(".frequent-products").classList.add("hidden")
      }
      else{
         document.querySelector(".frequent-products").classList.remove("hidden")
      }
     })
});

$(window).resize(function(){
  
  	var highestBox = 0;

  	if($(window).outerWidth() < 992) {
      
        if(!$(".fcompare-wrapper .fcompare-items").hasClass("slick-initialized")) {

            $(".fcompare-wrapper .fcompare-items").slick({
              infinite: false,
              dots: false,
              nextArrow: false,
              prevArrow: false,
              arrows: false,
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true

            }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                $(".fcompare-active").css("left", (nextSlide * 100));
                $(".fcompare-wrapper .fcompare-tab li").removeClass("active");
                $(".fcompare-wrapper .fcompare-tab li:eq("+nextSlide+")").addClass("active");
            });
        }
    } else {

      	if($(".fcompare-wrapper .fcompare-items").hasClass("slick-initialized")) {
          	$(".fcompare-wrapper .fcompare-items").slick("unslick");
          	$(".fcompare-wrapper .fcompare-items").removeClass("slick-initialized");
        }
    }
  
    $(".fcompare-wrapper .fcompare-items .fcompare-item-inner").each(function() {

        if($(this).outerHeight() > highestBox) {
			highestBox = $(this).outerHeight(); 
        }
    });
  
	$(".fcompare-wrapper .fcompare-items .fcompare-item-inner").css("min-height", highestBox);

  	$(".fcompare-wrapper .fcompare-items .fcompare-item").css("opacity", 1);
  
    jQuery(document).on("mouseenter touchstart", ".tooltip-box", function() {
      var _this = this;
      var offsetLeft = jQuery(_this).offset().left;
      var winWidth = jQuery(window).outerWidth();
      var offsetRight = winWidth - (offsetLeft + 20);
      var offsetElement = jQuery(_this).find(".custom-tooltip");

      $(".tooltip-box").removeClass("has-tooltip");
      $(".tooltip-box .custom-tooltip").removeClass("point-left point-right");

      if(offsetLeft < 100) {
        offsetElement.css({left: 0, right: "auto", marginLeft: 0});
        offsetElement.addClass("point-left");
      }

      if(offsetRight < 100) {
        offsetElement.css({left: "auto", right: 0, marginLeft: 0});
        offsetElement.addClass("point-right");
      }

      if(offsetLeft > 100 && offsetRight > 100) {
        offsetElement.css({left: "50%", right: "auto", marginLeft: "-90px"});
        offsetElement.removeClass("point-left point-right");
      }

      setTimeout(function(){
        jQuery(_this).addClass("has-tooltip");
      }, 250);
    }).on("mouseleave", ".tooltip-box", function() {
      
      var _this = this;
      var offsetElement = jQuery(_this).find(".custom-tooltip");
      
      jQuery(_this).removeClass("has-tooltip");
    });
  
    $('body').not(".tooltip-box").on('touchstart', function(e){
        $(".tooltip-box").removeClass("has-tooltip");
    });

    if($(".has-images-variant").length > 0) {
      	var winWidth = $(window).outerWidth();

        $(".has-images-variant").each(function() {
			var desktop_image = $(this).data("desktop");
			var ipad_image = $(this).data("ipad");
			var mobile_image = $(this).data("mobile");
          	var el_image = $(this);

          	if(winWidth > 991) {
              	el_image.attr("src", desktop_image);
            } else if(winWidth > 767 && winWidth < 992) {
              	el_image.attr("src", ipad_image);
            } else {
              	el_image.attr("src", mobile_image);
            }
        });
    }
  
    $('.cs-fcompare-table tr td:nth-of-type(2)').append('<hr/>');
    $('.cs-fcompare-table tr td:nth-of-type(3)').append('<hr/>');
    $('.cs-fcompare-table tr td:nth-of-type(4)').append('<hr/>');
    $('.cs-fcompare-table tr td:nth-of-type(5)').append('<hr/>');
});

if (!customElements.get('product-form')) {
  
  customElements.define(
    'product-form',class ProductForm extends HTMLElement {
      constructor() {
        super();

        this.form = this.querySelector('form');
        this.submitButton = this.querySelector('[type="submit"]');
        this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      
        }

      onSubmitHandler(evt) {
        evt.preventDefault();
          // var $this = this.querySelector('[type="submit"]');
         // console.log(this.querySelector('[type="submit"]'), $this )
          var $selected = $('.product-dropdown__list option:selected');
          var attachedProduct, attachedProductID;
          var itemsData = [];
          var variantName = $selected.attr('data-title');
          if(variantName.includes(' / ')) {
              variantName = variantName.split(' / ')[0];
          }
          var selectedVariantID = $('.product-dropdown__list').val();
          var productItem = {};
          productItem.quantity = 1;
          productItem.id = selectedVariantID;
          productItem.properties = {};

          // if (document.querySelector("trynow-cta-button").style.display = "unset"){
          //     productItem.selling_plan = 1184727223
          // }
          if ( document.querySelector("trynow-cta-button + div .tn-gate-toggle-checked")){
            productItem.selling_plan = 1184727223
          }
         
          this.querySelector('[type="submit"]').classList.add('loading');

          if($('.cs-bonus-products .cs-bonus-input:checked').length > 0) {

            attachedProduct = $('.cs-bonus-products .cs-bonus-input:checked').val();
            attachedProductID = $('.cs-bonus-products .cs-bonus-input:checked').data('product');
          }

          if($('.frequent-products .product-tiles-check:checked').length > 0) {

              $('.frequent-products .product-tiles-check:checked').each(function() {

                  var frequentID = $(this).val();
                  var frequentAddon = $(this).data('addon');

                  var frequentItem = {};
                  frequentItem.quantity = 1;
                  frequentItem.id = frequentID;

                  if(frequentAddon) {

                    frequentItem.properties = {};
                    var bonusItem = {};
                    bonusItem.properties = {};

                    if(frequentID == 2358863167593) {
                      var bonusPillow = 'Standard Cooling Pillows (2-pack)';
                      var bonusProtector = variantName + ' Bear Mattress Protector';

                      if(variantName == "Cal King" || variantName == "King") {
                        bonusPillow = 'King Cooling Pillows (2-pack)';
                        bonusProtector = variantName + ' Bear Mattress Protector';
                      }

                      if(variantName == "Split King") {
                        bonusPillow = 'King Cooling Pillows (2-pack)';
                        bonusProtector = 'Twin XL Bear Mattress Protector (2x)';
                      }

                      bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

                    } else if(attachedProductID == 6768279158889) {
                      var bonusPillow = 'Standard Bear Pillows (2-pack)';
                      var bonusProtector = variantName + ' Bear Mattress Protector';

                      if(variantName == "Cal King" || variantName == "King") {
                        bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                        bonusProtector = variantName + ' Bear Mattress Protector';
                      }

                      if(variantName == "Split King") {
                        bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                        bonusProtector = 'Twin XL Bear Mattress Protector (2x)';
                      }

                      bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

                    } else if(attachedProductID == 6553413451881) {
                      var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                      var bonusProtector = variantName + ' Terry Mattress Protector';

                      if(variantName == "Cal King" || variantName == "King") {
                        bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                        bonusProtector = variantName + ' Terry Mattress Protector';
                      }

                      if(variantName == "Split King") {
                        bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                        bonusProtector = 'Twin XL Terry Mattress Protector (2x)';
                      }

                      bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

                    } else {
                      var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                      var bonusProtector = variantName + ' Terry Mattress Protector';

                      if(variantName == "Cal King" || variantName == "King") {
                        bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                        bonusProtector = variantName + ' Terry Mattress Protector';
                      }
                      if(variantName == "Split King") {
                        bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                        bonusProtector = 'Twin XL Terry Mattress Protector (2x)';
                      }

                      bonusItem.properties['Variant'] = bonusPillow;
                    }

                    bonusItem.quantity = 1;
                    bonusItem.id = frequentAddon;
                    bonusItem.properties['_FREE'] = frequentAddon;
                    frequentItem.properties['_combo'] = frequentAddon;
            
                    itemsData.push(bonusItem);
                  }
                
                  itemsData.push(frequentItem);
              });
          }
        
          var isBundle = [32063933612137, 39457507534, 39457508238, 32063929352297, 1127306002446, 1127306067982, 32063932498025, 29140262617193, 29140262649961];

    if(isBundle.indexOf(Number(selectedVariantID)) > -1){
              var varientForCal = variantName;
      var bonusPillow = 'Standard Bear Pillow (2x)';

              if(variantName == "Cal King" || variantName == "King") {
                bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
              }

              var productName = "";

              if(location.href.indexOf('/bear-sleep-bundle') > -1) {
                  productName = "Bear Mattress";
              } else if(location.href.indexOf('/bear-hybrid-bundle') > -1) {
                  productName = "Bear Hybrid";
              } else if(location.href.indexOf('/bear-pro-bundle') > -1) {
                  productName = "Bear Pro";
              }

              if(variantName == "Cal King") {
                  varientForCal = "King"
              }

              productItem.properties['Variant'] = variantName+' '+productName+'--'+variantName+' '+'Bear Protector--'+bonusPillow;
          }
        
          if(attachedProduct) {
              var bonusItem = {};
              bonusItem.properties = {};

              if(attachedProductID == 2358863167593) {
                var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                var bonusProtector = variantName + ' Bear Mattress Protector';

                if(variantName == "Cal King" || variantName == "King") {
                  bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                  bonusProtector = variantName + ' Bear Mattress Protector';
                }

                if(variantName == "Split King") {
                  bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                  bonusProtector = 'Twin XL Bear Mattress Protector (2x)';
                }

                bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

      } else if(attachedProductID == 6768279158889) {
                var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                var bonusProtector = variantName + ' Bear Mattress Protector';

                if(variantName == "Cal King" || variantName == "King") {
                  bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                  bonusProtector = variantName + ' Bear Mattress Protector';
                }

                if(variantName == "Split King") {
                  bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                  bonusProtector = 'Twin XL Bear Mattress Protector (2x)';
                }

                bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

              } else if(attachedProductID == 6553413451881) {
                var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                var bonusProtector = variantName + ' Terry Mattress Protector';

                if(variantName == "Cal King" || variantName == "King") {
                  bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                  bonusProtector = variantName + ' Terry Mattress Protector';
                }

                if(variantName == "Split King") {
                  bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                  bonusProtector = 'Twin XL Terry Mattress Protector (2x)';
                }

                bonusItem.properties['Variant'] = bonusPillow+", "+variantName+" "+"Sheet Set"+", "+bonusProtector;

              } else {
                var bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                var bonusProtector = variantName + ' Terry Mattress Protector';

                if(variantName == "Cal King" || variantName == "King") {
                  bonusPillow = 'Includes 2 Pillows, 1 Sheet Set, and 1 Mattress protector';
                  bonusProtector = variantName + ' Terry Mattress Protector';
                }

                if(variantName == "Split King") {
                  bonusPillow = 'Includes 2 Pillows, 2 Sheet Set, and 2 Mattress protector';
                  bonusProtector = 'Twin XL Terry Mattress Protector (2x)';
                }

                bonusItem.properties['Variant'] = bonusPillow;
              }

              bonusItem.quantity = 1;
              bonusItem.id = attachedProduct;
              bonusItem.properties['_FREE'] = attachedProduct;
              productItem.properties['_combo'] = attachedProduct;
             
              itemsData.push(bonusItem);
          }
        
        
          itemsData.push(productItem);
          
          if (document.querySelector("trynow-cta-button + div .tn-gate-toggle-checked")){
            
            itemsData = itemsData.filter((items)=> !!items?.properties?._FREE  || !!items?.selling_plan)
            console.log(itemsData, "product Item");
          }
          var finalItem = {};
          finalItem['items'] = itemsData;

          RC.cart.add(finalItem, function(cart){
            
            document.querySelector('product-form form [type="submit"]').classList.remove('loading');
            $('.frequent-products input[type="checkbox"]:checked').prop("checked", false);
            
            RC.cart.get(function(response){
             // console.log(response, "response")
              ajaxifyShopify.updateCountPrice(response);
              ajaxifyShopify.init({
                method: 'modal',
                wrapperClass: 'wrapper',
                formSelector: '.product-form',
                addToCartSelector: '.addToCart',
                cartCountSelector: '.cartCount',
                cartCostSelector: '.cartCost',
                toggleCartButton: '.CartToggle',
                useCartTemplate: true,
                btnClass: 'btn',
                moneyFormat: theme.moneyFormat,
                disableAjaxCart: false,
                enableQtySelectors: true,
                prependDrawerTo: 'body',
                onToggleCallback: function(){
                    jQuery('body').trigger('ajaxCart.afterCartLoad')
                }
            });
              ajaxifyShopify.buildCart(response);
              
            });
          });

          return false;

      }

    }
  );
}

