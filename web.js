var path = require('path');
var tako = require('tako')
var filed = require('filed');
var request = require('request').defaults({json: true})


var htmldir = path.resolve(__dirname, 'attachments')

var t = tako()

t.route('/', function (req, resp) {
 filed(path.join(htmldir, 'index.html')).pipe(resp)
})

t.route('/*').files(htmldir)

var port = process.env.PORT || 5000;
t.listen(port, function() {
  console.log("Listening on " + port);
});	