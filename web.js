var express = require('express');

var app = express.createServer(express.logger());

var message = buffer.toString(fs.readFileSync(index.html));

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});