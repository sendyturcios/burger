
const express = require("express");

const router = express.Router();

//Imports the model (burger.js) to use its database functions
const burger = require("../models/burger.js");


//Routes 



router.get("/", function(req, res) {

});




router.post("/api/burgers", function(req,res){

});




router.put("/api/burgers/:id", function(req,res){

})



routere.delete("/api/burgers/:id", function(req,res){

});



//Exports routes for server.js to use
module.exports = router;