/**
 * JLORD SATELLITE
 *
 * @package satellite
 * @author jlord <to.jlord@gmail.com>
 */


/**
 * Dependencies
 */
var http    = require('http'),
    router  = require('router'),
    argv    = require('optimist')
                .default('h', 'localhost')
                .default('p', 3000)
                .argv;

/**
 * Server
 */
var environment  = {
    host:       process.env.HOST || argv.h,
    port:       Number(process.env.PORT) || argv.p,
    production: process.env.NODE_ENV === 'production'
};
var route   = require('./route.js')(router, environment),
    app     = http.createServer(route);

/**
 * Listen
 */
app.listen(environment.port);
console.log('Listening at %s on port %d', environment.host, environment.port);