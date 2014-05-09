var express = require('express');
var request = require('request');

// Create express app
var app = express();
app.listen(process.env.PORT || 1337);

// Catch all request
app.get('/:term', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var term = req.params.term;

  // Query Facebook Graph API
  var request = require('request');
  request('https://graph.facebook.com/' + term + '?fields=name,likes,link,pictures',
          function (error, response, body) {

    // Send facebook object, if found
    if (!error && response.statusCode == 200) {
      res.send(body);
    // Empty object, if nothing is found
    } else {
      res.send({});
    }

  });
});
