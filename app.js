const express = require("express");
 const bodyParser = require("body-parser");
 const ejs = require("ejs");
 const $ = require( "jquery" );
 const app = express();

 app.use(express.static("public"));
 app.set('view engine', 'ejs');
 app.use(bodyParser.urlencoded({
   extended: true
 }));

 app.get("/", function(req,res){
    res.render("landingpage")
 });

 app.get("/logged-in", function(req,res){
  res.render("logged-in")
});

 app.listen(3000, function(req, res) {
    console.log("Server started on port 3000.");
  });