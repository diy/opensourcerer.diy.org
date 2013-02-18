var express = require('express');
var path = require('path');
var filed = require('filed');

var htmldir = path.resolve(__dirname, 'attachments')

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  filed(path.join(htmldir, 'index.html')).pipe(response)
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});	