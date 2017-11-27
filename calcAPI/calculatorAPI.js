const express = require('express');
const morgan = require('morgan');
const serveStatic = require('serve-static');
const app = express();
const port = 1986;
const url = require("url");
var x = '%2B';
console.log(x.replace("%2B", "+"));
var plus = x.replace("%2B", '+'); // '1%20%2B%201%20%3D%202'
x = decodeURIComponent(plus);   // '1 + 1 = 2'
console.log("xxx", x);
app.get(`/add/:num1/:num2/`, (req, res) => {
  const {num1, num2} = req.params;
  var number1 = parseInt(req.params.num1.slice(1));
  var number2 = parseInt(req.params.num2.slice(1));
  var sum = number1 + number2;
  var addingObj = {num1: number1, num2: number2, result: sum};
  var jFile = JSON.stringify(addingObj);
  if (isNaN(number1) || isNaN(number2)) {
    res.send("Both parameters must be numbers");
  }
  res.send(jFile);
})
app.get("/sub/:num1/:num2", (req, res) => {
  const {num1, num2} = req.params;
  var number1 = parseInt(req.params.num1.slice(1));
  var number2 = parseInt(req.params.num2.slice(1));
  var sum = number1 - number2;
  var addingObj = {num1: number1, num2: number2, result: sum};
  var jFile = JSON.stringify(addingObj);
  if (isNaN(number1) || isNaN(number2)) {
    res.send("Both parameters must be numbers");
  }
  res.send(jFile);
})
app.get("/mul/:num1/:num2", (req, res) => {
  const {num1, num2} = req.params;
  var number1 = parseInt(req.params.num1.slice(1));
  var number2 = parseInt(req.params.num2.slice(1));
  var sum = number1 * number2;
  var addingObj = {num1: number1, num2: number2, result: sum};
  var jFile = JSON.stringify(addingObj);
  if (isNaN(number1) || isNaN(number2)) {
    res.send("Both parameters must be numbers");
  }
  res.send(jFile);
})
app.get("/div/:num1/:num2", (req, res) => {
  const {num1, num2} = req.params;
  var number1 = parseInt(req.params.num1.slice(1));
  var number2 = parseInt(req.params.num2.slice(1));
  var sum = number1 / number2;
  var addingObj = {num1: number1, num2: number2, result: sum};
  var jFile = JSON.stringify(addingObj);
  if (isNaN(number1) || isNaN(number2)) {
    res.send("Both parameters must be numbers");
  }
  res.send(jFile);
})

app.listen(port, () => {
  console.log("server is running...");
})
