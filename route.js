/**
 * Application router.
 *
 * @package turtle
 * @author Andrew Sliwinski
 */

/**
 * Dependencies
 */
var _           = require('underscore'),
    $           = require('cheerio'),
    fs          = require('fs'),
    filed       = require('filed'),
    handlebars  = require('handlebars'),
    marked      = require('marked'),
    lru         = require('lru-cache'); 

/**
 * Make a Page
 */
function makePage (environment, subDir, num ) {
    // Markdown
    var raw         = fs.readFileSync(__dirname + subDir + num + '.md').toString();  
    var content     = marked(raw);  

    // Handlebars
    var source      = fs.readFileSync(__dirname + '/static/index.html').toString();
    var template    = handlebars.compile(source);

    // Compose and return
    var provider    = _.extend(environment, {
        content: content
    });
    return template(provider);
}

/**
 * Static file server.
 *
 * @param {Object} Request
 * @param {Object} Response
 *
 * @return {void}
 */
function serveStatic (req, res) {
    filed(__dirname + '/static' + req.url).pipe(res);
}

function activeState (page, id) {
    page('.c' + id).addClass('active')
}

/**
 * Export
 */
module.exports = function (router, environment) {
    // Init router and cache
    var route = router();
    var cache = lru(20);

    // Root
    var root = makePage(environment, '/intro', '');
    route.get('/', function (request, response) {
        response.writeHead(200);
        response.end(root);
    });

    route.get('/challenge/{num}', function(req, res) {
        var num = req.params.num; 
        var cachePile = cache.get(num)
        if (cachePile) {
            res.writeHead(200)
            res.end(cachePile)
        } else {
            var page = makePage(environment, '/content/', num ) 
            var pageCheerio = $.load(page)
            activeState(pageCheerio, num)
            page = pageCheerio.html()
            cache.set(num, page)
            res.writeHead(200)
            res.end(page)
        }
    });

    // Static
    route.get('/css/*', serveStatic);
    route.get('/images/*', serveStatic);
    route.get('/js/*', serveStatic);
    route.get('/fonts/*', serveStatic);

    // Export
    return route;
}