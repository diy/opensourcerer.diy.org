var connect = require('connect')
var path = require('path')
var http = require('http')

// var htmldir = path.resolve(__dirname, './')

var app = connect()
  .use(connect.static('./'))

http.createServer(app).listen(3000);