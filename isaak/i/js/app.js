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

    $(document).ready(function () {   // use this for sites
        
    console.log(window);
    
    //$(window).load(function() { // use this for banners
       
        console.log('loaded');
        
       $('#scene').parallax();
        
        
        // show trailer only once
        /*
        Fresco.show({
          url: 'https://www.youtube.com/watch?v=HhPaxmKQ4SI',
          options: {
            youtube: { autoplay: 1 }
          }
        });
        */
        
        
        
        // Higlight current page in menu
        var currentUrl = window.location.href,
            currentPortion = currentUrl.substr(currentUrl.lastIndexOf('/') + 1),
            
            //currentPage = currentPortion.substr(0, currentPortion.indexOf('?')),
            targetUrl = null;
        
        
            if (currentPortion.indexOf('?') === -1) {
                targetUrl = currentPortion;
            } else {
                targetUrl = currentPortion.substr(0, currentPortion.indexOf('?'));
            }
        
        
        
            //console.log(targetUrl);
        
        switch (targetUrl) {
            
            case "index":
                $('.navbar-nav>li:nth-child(1)').addClass('active');
            break;
                
            case "trailer":
                $('.navbar-nav>li:nth-child(2)').addClass('active');
            break; 
            
            case "gallery":
                $('.navbar-nav>li:nth-child(3)').addClass('active');
            break;
            
            case "backstage":
                $('.navbar-nav>li:nth-child(4)').addClass('active');
            break;
            
            case "storia":
                $('.navbar-nav>li:nth-child(5)').addClass('active');
            break;
            
            case "download":
                $('.navbar-nav>li:nth-child(6)').addClass('active');
            break;
                
            
                
            
            default:
                $('.navbar-nav>li:nth-child(1)').addClass('active');
            break;
                
        }
        
    });

    $.noConflict();

}(jQuery, this, this.document));