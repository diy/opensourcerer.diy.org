var express = require('express');
var path = require('path');
var tako = require('tako')
var filed = require('filed');

var htmldir = path.resolve(__dirname, 'attachments')

var t = tako()

var app = express.createServer(express.logger());

t.route('/', function (req, resp) {
  filed(path.join(htmldir, 'index.html')).pipe(resp)
})

t.route('/*').files(htmldir)

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});	