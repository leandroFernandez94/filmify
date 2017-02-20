var express = require('express');
var app = express();
var http = require('http').Server(app);
var path= require('path');

app.use(express.static('public'));

http.listen(3000, function(){
    console.log('listening on *:3000');
 });

