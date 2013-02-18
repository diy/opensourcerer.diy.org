var connect = require('connect')
var path = require('path')
var http = require('http')

var htmldir = path.resolve(__dirname, 'attachments')

var app = connect()
  .use(connect.static(htmldir,'index.html'))

http.createServer(app).listen(3000);