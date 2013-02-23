// force no cache of POST requests (iOS6)
// http://stackoverflow.com/questions/12506897/is-safari-on-ios-6-caching-ajax-results
// ------------------------------------------------------------------------------

$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    if (!originalOptions.type || originalOptions.type.toUpperCase() !== 'POST') return;
    var now = new Date().getTime();
    if (typeof originalOptions.data === 'string') {
        options.data = originalOptions.data + (originalOptions.data.length ? '&' : '') + '_ts=' + now; 
    } else {
        options.data = jQuery.param($.extend(originalOptions.data || {}, { 
            _ts: now
        }));
    }
});

// facebook sdk
// ------------------------------------------------------------------------------

window._fb = (function() {
    var init = false;
    
    // init callback 
    window.fbAsyncInit = function() {
        FB.init({
            appId      : DIY.globals.services.facebook['app-id'],
            channelUrl : '//' + window.location.hostname + '/channel.html',
            status     : !!(DIY.session && DIY.session.parent),
            cookie     : false,
            xfbml      : true
        });
        init = true;
        while (callbacks.length) {
            callbacks.pop()();
        }
    };
    
    // include facebook sdk
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.async = true;
        js.src = "//connect.facebook.net/en_US/all.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
    // interface
    var callbacks = [];
    return function(callback) {
        if (init) callback();
        else callbacks.push(callback);
    };
})();

_fb(function() {
    FB.Event.subscribe('auth.statusChange', function(response) {
        var linked = response.status === 'connected';
        $(document.documentElement)
            .toggleClass('fbauth', linked)
            .toggleClass('no-fbauth', !linked);
    });
});

// video player settings
// ------------------------------------------------------------------------------

if (typeof _V_ !== 'undefined') {
    _V_.options.flash.swf = DIY.globals['static'] + '/video-js.swf';
}

// other
// ------------------------------------------------------------------------------

/**
 * Displays a popup window centered in the browsers.
 * @param {object} options - Window options.
 */
var popup = function(options) {
    var $window = $(window);
    
    var w = options.width || 400;
    var h = options.height || 300;
    var top = (window.screenY || window.screenTop) + Math.round(($window.height() - h) / 2);
    var left = (window.screenX || window.screenLeft) + Math.round(($window.width() - w) / 2);
    
    window.open(options.url, options.name || '',
        'scrollbars=no,menubar=no,resizable=yes,toolbar=no,location=no,status=yes,' +
        'left=' + left + ',' +
        'top=' + top + ',' +
        'width=' + w + ',' +
        'height=' + h
    ).focus();
    return false;
};

$(function() {
    "use strict";
    
    var $window = $(window);
    var $body   = $('body');
    
    /**
     * Pinned Footer
     */
    
    var footerHeight = 0;
    var footerTop    = 0;
    var $footer      = $('.pinned-footer');
        
    if ($footer.length) {
        var resetFooter = function() {
            footerHeight = $footer.outerHeight();
            
            if ($body.height() > $window.height()) {
                $footer.css({
                    position: 'absolute',
                    top: $body.height() - footerHeight,
                    bottom: 'auto'
                });
            } else {
                $footer.css({
                    position: 'fixed',
                    top: 'auto',
                    bottom: '0'
                });
            }
        };
        
        $window.on('load', function() {
            resetFooter();
            window.setTimeout(function() {
                resetFooter();
            }, 50);
        });
        
        $window.on('scroll resize', resetFooter);
        $window.bind('resetfooter', resetFooter);
        resetFooter();
    }
});