const express = require('express');
const morgan = require('morgan');
const serveStatic = require('serve-static');
const app = express();
var hexToBinary = require('hex-to-binary');

const port = 8000;
app.get(`/:number`, (req, res) => {
  var num = Number(req.params.number);
  var results =
  {
    original: {value: num, base: 10},
    conversions: {decimal: num, binary: num.toString(2), hex: num.toString(16)}
  }
  var jFile = JSON.stringify(results);
  res.send(jFile);
})
app.get(`/:number/bin`, (req,res) => {
  const {number, bin} = req.params;
  var num = req.params.number;
  var results =
  {
    original: {value: num, base: 2},
    conversions: {decimal: parseInt(num, 2), binary: num, hex: parseInt(num, 2).toString(16)}
  }
  var jFile = JSON.stringify(results);
  res.send(jFile);
})
app.get(`/:number/hex`, (req,res) => {
  const {number, hex} = req.params;
  var num = req.params.number;
  var results =
  {
    original: {value: num, base: 16},
    conversions: {decimal: parseInt(num, 16), binary:  hexToBinary(num), hex: num}
  }
  var jFile = JSON.stringify(results);
  res.send(jFile);
})
app.listen(port, () => {
  console.log("server is running...");
})
