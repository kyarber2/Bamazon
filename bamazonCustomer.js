//file should first display bamazon_db information--ids, names, and prices
var inquirer = require("inquirer");
var mysql = require("mysql");
var fs = require("fs");
//require pool
//var pool = require('./pool.js');

//displays the products in the table
var express = require('express'),
    app = express(),
  	connection = require('./connection.js');

app.get('/bamazon_DB', function (req, res) {
    connection.query('SELECT * FROM products', function(err, rows, fields)
    {
        res.render('products', {
          items: rows
        });
          console.log(rows);

    });
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);

});

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

readProducts();
//then prompts the user the for id of the product they would like to buy

//then prompts the user for the quantity they would like to buy

//then checks to see if there is enough of the product in stock

//if not enough in stock, console.log("Insufficient quantity!"); and prevent the order from going through

//if there is enough in stock, then the order should be completed
//then the database should be updated

//the user should be notified of the total price 