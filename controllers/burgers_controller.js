
var express = require("express");

var router = express.Router();

//Imports the model (burger.js) to use its database functions
var burger = require("../models/burger.js");


//Routes 



router.get("/", function(req, res) {
    burger.all(function(data) {

        const hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject);
    });
});




router.post("/api/burgers", function(req,res){
    burger.create([
        "burger_name", "devoured"
    ], [ 
        req.body.name, req.body.devoured
     ], function(result) {
        //send back id of new 
        res.json({id: result.insertId});
    });
});


router.put("/api/burgers/:id", function(req,res){
    console.log("updated burger!")
    const condition = `id =  ${req.params.id}`;

    console.log("condition", condition);
    console.log(req.params.id);
    

    burger.update({
        devoured: 1,
    }, condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});


  







//Exports routes for server.js to use
module.exports = router;