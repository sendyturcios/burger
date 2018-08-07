const express = require("express");

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();

//Serves static content for app from "public" directory in the application directory

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse application/json
app.use(bodyParser.json());

//set handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give the server access to them 
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Start server to begin listening to client requests

app.listen(PORT, function() {
    //log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
})

