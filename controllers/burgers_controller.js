
const express = require("express");

const router = express.Router();

//Imports the model (burger.js) to use its database functions
const burger = require("../models/burger.js");


//Routes 



router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});




router.post("/api/burgers", function(req,res){
    burger.insertOne([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        //send back id of new 
        res.json({ id: result.insertId });
    });
});


router.put("/api/burgers/:id", function(req,res){
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});







//Exports routes for server.js to use
module.exports = router;