var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne("burger_name", req.body.burger_name, function(result) {
      // Send back the ID of the new quote
      res.redirect('/');
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var burgerID = req.params.id;

  burger.updateOne({
    devoured: true
  }, burgerID, function(data) {
    res.redirect('/');
  });
});


  // },
  // insertOne: function(table, cols, vals, cb) {
  //     var queryString = "INSERT INTO" + tableInput + " (" + cols.toString() + ") VALUES (" + vals + ") ;";
  //     console.log(queryString);
  //     connection.query(queryString, function(err, result) {
  //       if (err) {
  //         throw err;
  //       }
  //       cb(result);
  //     });
  // },

// router.put("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/cats/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
