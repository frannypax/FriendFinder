
//requiring path
var path = require("path");

module.exports = function(app){
	//html get requests

	//when user visite the survey page
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname + "/../public/survey.html"));
	});
	//if no matching route, default to home
	app.get("*", function(req, res){
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});


};