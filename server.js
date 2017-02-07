var express = require('express');
var app = express();
var http = require('http').Server(app);
var path= require('path');

var mongoClient = require('mongodb').MongoClient;



app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/movies?:movie',function(req,res){
  console.log('movie requested: ',req.query.item);
  mongoClient.connect("mongodb://localhost:27017/filmifyDB", function(err, db) {
  if(!err) {
    if(req.query.item){
      db.collection('movies')
      .find({title:req.query.item}).toArray((err,items) => {
        console.log('items found',items);
        res.json({found:items});
      })
    }else{
      db.collection('movies')
      .find().toArray((err,items) => {
        console.log('items found',items);
        res.json({found:items});
      })
    }
  }
});
});

app.use(express.static('public'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});
