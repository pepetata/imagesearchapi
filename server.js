var express = require('express')
        , stylus = require('stylus')
        , path = require('path')
        , MongoClient = require('mongodb').MongoClient
        , api = require("./api/imagesearch.js")
        , app = express()
        , url
        , db
        , result
        , surl
        , urldoc
        , urls
        , counters
        , ref
        , origurl


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'stylus');
app.use(express.static(path.join(__dirname, 'views')));
app.use(stylus.middleware(path.join(__dirname, 'views')));



// Connect to the db
MongoClient.connect("mongodb://localhost:27017/db", function (err, database) {
  if (!err) {
    console.log("MongoDB connected to port 27017");
  }
  db = database
  api(app,db)

  var port = process.env.PORT || 8080;
  app.listen(port, function () {
    console.log('App listening on port '+port+' !')
  })
  
  
  
});

