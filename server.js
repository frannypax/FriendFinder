//requring packages
//
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//configuring basic express server
var app = express();
var PORT = process.env.PORT || 8080;

//Exposing public directory to server
app.use(express.static(path.join(__dirname, "./app/public")))

//middleware to handle data parsing of incoming requests
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.text());


//Requiring Routes: will guide express server to 
//a "map" of how to respond when the different urls
//are visited

//note: export files before adding lines 22 and 23
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes.js"))(app);

//starting express server
app.listen(PORT, function(){
	console.log("App listening on port: " + PORT);

});


