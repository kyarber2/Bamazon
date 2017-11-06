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
  //mysql> SELECT name, birth FROM pet;
  // RowDataPacket { id: 1, product_name: 'Coconut Water' },
  connection.query("SELECT id, product_name FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

readProducts();

//then prompts the user the for id of the product they would like to buy
inquirer.prompt([
  {
    type: "checkbox",
    name: "userSelection",
    message: "Which product would you like to purchase?",
    choices: [
    '1', 
    '2', 
    '3', 
    '4', 
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'exit']
  }
]).then(function(choices) {
  console.log(choices);
  // if/then function based on userchoices
        if (choices.userSelection[0] === '1') {
           console.log('1');
           quantitySelector();
           //function that 
        } else if (choices.userSelection[0] === '2') {
          console.log('2');
          quantitySelector();
        } else if (choices.userSelection[0] === '3') {
          console.log('3');
          quantitySelector();
      } else if (choices.userSelection[0] === '4') {
          console.log('4');
          quantitySelector();
      } else if (choices.userSelection[0] === '5') {
          console.log('5');
          quantitySelector();
        } else if (choices.userSelection[0] === '6') {
          console.log('6');
          quantitySelector();
        } else if (choices.userSelection[0] === '7') {
          console.log('7');
          quantitySelector();
        } else if (choices.userSelection[0] === '8') {
          console.log('8');
          quantitySelector();
        } else if (choices.userSelection[0] === '9') {
          console.log('9');
          quantitySelector();
        } else if (choices.userSelection[0] === '10') {
          console.log('10');
          quantitySelector();
          }else if (choices.userSelection[0] === 'exit') {
        console.log('Your session has ended. Come back soon!');
      }
  });

//then prompts the user for the quantity they would like to buy

var quantitySelector = function(){
  inquirer.prompt([
    {
      type: "string",
      name: "quantity",
      message: "How many would you like to purchase?",
      input: ''
    }
  ]).then(function(input) {
    console.log(input);
   //function to compare total requested with total in database
    });
}




//then checks to see if there is enough of the product in stock

//if not enough in stock, console.log("Insufficient quantity!"); and prevent the order from going through

//if there is enough in stock, then the order should be completed
//then the database should be updated

//the user should be notified of the total price 