var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
})

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log('Our app is running on: ' + port);
});