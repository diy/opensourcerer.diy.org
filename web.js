var express = require('express');

var app = express.createServer(express.logger());

app.configure(function(){
  server.use('/media', express.static(__dirname + '/media'));
  server.use(express.static(__dirname + '/public'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});