
//import the ORM to create functions that will interact with the database

const orm = require("../config/orm.js");

const burger  = {
    all: function(callback) {
        orm.all("burgers", function(res){
            callback(res);
        });
    },


    //the variables cols and vals are arrays
    create: function(cols, vals, callback) {
        orm.create("burgers", cols, vals, function(res){
            callback(res);
        })
    }



}




















//Exports the database functions for the controller (burgers_controller.js)
module.exports = cat;