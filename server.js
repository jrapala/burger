// Eat-Da-Burger! | By Juliette Rapala
// =====================================================================================

  // Setup  
  // =====================================================================================

    // Dependencies
    var express = require("express");
	var bodyParser = require("body-parser");
	var exphbs = require('express-handlebars');
	var methodOverride = require('method-override');

	// Initialize Express
	var app = express();

	// Port Config
    var PORT = process.env.PORT || 3000;

	// App Middleware
	app.use(methodOverride('_method'));
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(express.static(process.cwd() + "/public"));

	// Handlebars Config
	app.engine("handlebars", exphbs({ defaultLayout: "main" }));
	app.set("view engine", "handlebars");

	// Route Config
	var routes = require("./controllers/burgers_controller.js");
	app.use("/", routes);
	app.listen(PORT);
	
	// MySQL Config
	var mysql = require("mysql");

	var connection = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "",
	  database: "burgers_db"
	});

	// // Connect to database
	// connection.connect(function(err) {
	//   if (err) {
	//     console.error("error connecting: " + err.stack);
	//     return;
	//   }
	//   console.log("connected as id " + connection.threadId);
	// });