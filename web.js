var ecstatic = require('ecstatic')

var app = require('http').createServer(ecstatic('./'))

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});