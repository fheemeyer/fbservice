var express = require('express');
var request = require('request');

var app = express();
app.listen(process.env.PORT || 1337);

app.get('/:term', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var term = req.params.term;

  var request = require('request');
  request('https://graph.facebook.com/' + term + '?fields=name,likes,link', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.send({});
    }
  });
});
