var request = require('request').defaults({json: true})

var htmldir = path.resolve(__dirname, 'attachments')

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})

var port = process.env.PORT || 5000;
request.listen(port, function() {
  console.log("Listening on " + port);
});	