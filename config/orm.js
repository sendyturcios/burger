
// import MySQL connection

var connection = require("../config/connection.js");

//Helper function for SQL syntax
//helps convert array to string
function printQuestionMarks(num) {
    var arr = [];

    for(var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}


function objToSql(ob) {
    var arr = [];
  
    for (let key in ob){
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'"
            }
            arr.push(key + "=" + value);
        }
    }
  
    return arr.toString();
  }



//Methods to retrieve and store data in your database.


var orm = {
    selectAll: function(tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            callback(result);
        });
    },

    //vals is an array of values we want to save to cols
    //cols are the columns we want to insert the values into
    insertOne: function(table, cols, vals, callback) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        
        connection.query(queryString, vals, function(err, result) {
            if(err) {
                throw err;
            }
            callback(result);
        });

    },

    //objColVals would be the columns and values they want to update
    // Ex: {name: panther, sleepy: true}
    updateOne: function(table, objColVals, condition, callback) {
        var queryString = "UPDATE" + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        //console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            callback(result);
        });
    },

    delete: function(table, condition, callback) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          callback(result);
        });
      }
    };









// Export the orm object for the model (cat.js).
module.exports = orm;