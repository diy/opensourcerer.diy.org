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
    fs          = require('fs'),
    filed       = require('filed'),
    handlebars  = require('handlebars'),
    markdown    = require('markdown').markdown;



/**
 * Compile template
 */
function compile (config) {
    // Markdown
    var raw         = fs.readFileSync(__dirname + '/tutorial.md').toString();
    var content     = markdown.toHTML(raw);

    // Handlebars
    var source      = fs.readFileSync(__dirname + '/static/index.html').toString();
    var template    = handlebars.compile(source);

    // Compose and return
    var provider    = _.extend(config, {
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
function static (req, res) {
    filed(__dirname + '/static' + req.url).pipe(res);
}

/**
 * Export
 */
module.exports = function (router, data) {
    // Init router
    var route = router();

    // Root
    var root = compile(data);
    route.get('/', function (req, res) {
        res.writeHead(200);
        res.end(root);
    });

    // Static
    route.get('/css/*', static);
    route.get('/images/*', static);
    route.get('/js/*', static);
    route.get('/fonts/*', static);

    // Export
    return route;
}