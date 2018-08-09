
// import MySQL connection

const connection = require("../config/connection.js");

//Helper function for SQL syntax
//helps convert array to string
function printQuestionMarks(num) {
    const arr = [];

    for(const i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

//helper function to convert object key/value pairs to SQL syntax

function objToSql(ob) {
    const arr = [];

    //loops through they keys and pushes the ky/value as a string int arr
    for (const key in obj) {
        const value = ob[key];
        //check tp skip hiddent properties
        if(ob.hasOwnProperty(key)) {
            arr.push(key + "=" + ob[key]);
        }
        return arr.toString();
    }
}


//Methods to retrieve and store data in your database.


const orm = {
    selectAll: function(tableInput, callback) {
        const queryString = "SELECT * FROM " + tableInput + ";";
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
        const queryString = "INSERT INTO " + table;

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
        const queryString = "UPDATE" + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if(err) {
                throw err;
            }
            callback(result);
        });
    }
}









// Export the orm object for the model (cat.js).
module.exports = orm;