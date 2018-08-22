var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');

//Connect to mongoDB server
mongoose.connect('mongodb://localhost:27017/picture');
mongoose.set('debug', true);
require('./server/models/tag'); 
require('./server/models/photo'); 

// Configuration express
var app = express();

// Routing
var photoRoute = require('./server/endpoint/photo'); 
app.use('/photo', photoRoute);
var tagRoute = require('./server/endpoint/tag'); 
app.use('/tag', tagRoute);

// Enable bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Enable CORS
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
 next();
});

//Get environment port or use 3000
var port = process.env.PORT || '3000';
app.set('port', port);
 
//Create HTTP server.
var server = http.createServer(app);
 
//Listen on port
server.listen(port, () => console.log(`API running on localhost:${port}`));
