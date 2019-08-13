/*!
 * Version: 0.8.0
 * Updated: 13/03/2016
 *
 * @license Copyright (c) 2016. All rights reserved.
 * @author: Emanuele Manco, me@emanuelemanco.com
 */

/*jslint browser: true*/
/*global jQuery */

(function ($, window) {
    'use strict';

    //$(document).ready(function () {   // use this for sites
    
    $(window).load(function() { // use this for banners
       
        console.log('loaded');
        
        
        
        var renderer = PIXI.autoDetectRenderer(500, 650, {transparent:true, resolution:1});
        
        document.getElementById("container").appendChild(renderer.view);
        
        var stage = new PIXI.Container(),
            logo = new PIXI.Container();

        stage.addChild(logo);
        
        
        var foxtons = new PIXI.Sprite.fromImage('assets/foxtons.jpg');
        
        logo.addChild(foxtons);
        
        logo.x =20;
        
        
        /*
        var red = new PIXI.Sprite.fromImage('assets/logo.png'),
            green = new PIXI.Sprite.fromImage('assets/logo.png'),
            blue = new PIXI.Sprite.fromImage('assets/logo.png');
        
        red.tint = 0xff0000;
        green.tint = 0x00ff00;
        blue.tint = 0x0000ff;    
        
        red.blendMode = PIXI.BLEND_MODES.SCREEN;
        green.blendMode = PIXI.BLEND_MODES.SCREEN;
        blue.blendMode = PIXI.BLEND_MODES.SCREEN;
        
        logo.addChild(red);
        logo.addChild(green);
        logo.addChild(blue);
        
        logo.x = 20;
        logo.y = 5;
        
        */
        
        
        // Displacement filter
        var displacementTexture = new PIXI.Texture.fromImage("assets/displace.png");
            displacementTexture.r = 10;
            displacementTexture.g = 0;
        
        var displacementSprite = new PIXI.Sprite(displacementTexture);
        var displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

        logo.addChild(displacementSprite);
        
        // Apply Filter
        function addFilter() {
            logo.filters = [displacementFilter];
        }
        
        // Remove Filter
        function removeFilter() {
            logo.filters = null;
        }
        

        // Render Function
        function render() {
            renderer.render(stage);
        }
        
        
        // Tweening routine
        /*TweenMax.from(logo, 1, {alpha:0, y:20, onUpdate: render, onComplete: function() {
            tl.play();
        }});
        
        var tl = new TimelineMax({onUpdate: render, paused:true});
        
        tl.to(displacementSprite, 10, {y:-50, ease:SteppedEase.config(3)});*/
        
        
        addFilter();
        
        
        // shim layer with setTimeout fallback
        window.requestAnimFrame = (function(){
          return  window.requestAnimationFrame       ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame    ||
                  function( callback ){
                    window.setTimeout(callback, 1000 / 60);
                  };
        })();
        
        
        // Animate
        window.requestAnimFrame(animate);

        function animate() {
            
            var offset = 2;

            //displacementFilter.offset.x += offset;
            //displacementFilter.offset.y += offset;
            
            displacementSprite.x += offset;
            displacementSprite.y += offset;

            render();
            window.requestAnimFrame(animate);
            
            console.log('animate');
        }
        
         
         
        // Random loop
        /*(function loop() {
                var rand = Math.round(Math.random() * (10000 - 1000)) + 1000;
                setTimeout(function() {
                        tl.restart();
                        loop();  
                }, rand);
            }());*/

        
        
        
        
        
        
        
        
    
    });

    $.noConflict();

}(jQuery, this, this.document));