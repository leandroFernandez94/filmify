var express = require('express');
var app = express();
var http = require('http').Server(app);
var path= require('path');
var db = require('./database.js');

app.use(express.static('public'));

// Initialize connection
db.connect(function() {
  // Start the application after the database connection is ready
  app.listen(3000);
  console.log("Listening on port 3000");

  app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
  });


  app.get('/movies?:movie',function(req,res){
    let search = req.query.params;
    console.log('movie requested: ', params);
    db.getMovies(params,docs => {
      docs.toArray((err,movies) => {
        let coincidences = search ? movies.filter(movie => movie.title === search) : movies;
        console.log('items found: ',coincidences);
        res.json({found:coincidences});
      });
    });
  });
});  

