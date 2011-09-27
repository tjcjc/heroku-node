var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('lalala ');
});

var port = process.env.C9_PORT || process.env.PORT;
app.listen(port, function() {
  console.log("Listening on " + port);
});
