var express = require('express');
var app = express();
var http = require('http').Server(app);
var path= require('path');
var MongoClient = require('mongodb').MongoClient;

var DBURL = "mongodb://localhost:27017/filmifyDB";

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

app.get('/movies',(req,res) => {
  console.log('GET for /movies');
  MongoClient.connect(DBURL, function(err, db) {
    if(!err) {
      var movies = db.collection('movies');
      movies.find().toArray((err,items) => {
        console.log('RESP SENT',items);
        res.send(items);
      });
    }
  });
});



http.listen(3000, function(){
  console.log('listening on *:3000');
});
