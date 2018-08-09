
//import the ORM to create functions that will interact with the database

const orm = require("../config/orm.js");

const burger  = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    //the variables cols and vals are arrays
    insertOne: function(cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, function(res){
            callback(res);
        });
    },
    updateOne: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, conditon, function(res) {
            callback(res);
        });
    }

}









//Exports the database functions for the controller (burgers_controller.js)
module.exports = burger;