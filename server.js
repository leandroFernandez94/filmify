var express = require('express');
var app = express();
var http = require('http').Server(app);
var path= require('path');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/app/index.html');
});

app.use(express.static('app'));
app.use(express.static('libraries'));
app.use(express.static('css'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});
