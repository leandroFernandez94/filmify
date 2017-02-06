var express = require('express');
var app = express();
var http = require('http').Server(app);
var path= require('path');
var MongoClient = require('mongodb').MongoClient;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

MongoClient.connect("mongodb://localhost:27017/filmifyDB", function(err, db) {
  if(!err) {
    console.log("We are connected");
    var movies = db.collection('movies');
    movies.find().toArray((err,items) => {
      console.log('movies',items);
    });
  }
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
