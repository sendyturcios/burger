
//import the ORM to create functions that will interact with the database

var orm = require("../config/orm.js");

var burger  = {
    all: function(callback) {
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    //the variables cols and vals are arrays
    create: function(cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, function(res){
            callback(res);
        });
    },
    update: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            callback(res);
        });
    },

  delete: function(condition, callback) {
    orm.delete("burgers", condition, function(res) {
      callback(res);
    });
  }
};










//Exports the database functions for the controller (burgers_controller.js)
module.exports = burger;