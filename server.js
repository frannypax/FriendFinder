//requring packages
//
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//configuring basic express server
var app = express();
//Serring an initial port
var PORT = process.env.PORT || 8080;

//Setting up express to handle data parsing
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Requiring Routes: will guide express server to 
//a "map" of how to respond when the different urls
//are visited

//note: export files before adding lines 22 and 23
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//starting express server
app.listen(PORT, function(){
	console.log("App listening on port: " + PORT);

});


