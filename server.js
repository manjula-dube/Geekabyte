var express = require('express');
var app = express();
var http = require("http");

var PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));


app.get('/', function(req, res){ 

    res.sendFile('index.html');
});

var server = app.listen(PORT, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log('App running at http://%s:%s', host, port);

  setInterval(function() {
    http.get("http://vihangpatel.herokuapp.com");
}, 300000);
 
});