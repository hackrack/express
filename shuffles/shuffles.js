const express = require('express');
const morgan = require("morgan");
const app = express();
const port = 3000;

var suits = ["diamond", "clover", "heart", "spade"];
var value = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
const shuffle = (num) => {
  var cards = [];
  for (var i = 0; i < num; i++) {
    cards.push(suits[Math.floor(Math.random() * 4)] + " of " + value[Math.floor(Math.random() * 13)]);
  }
  return cards;
}

app.get('/', (req, res) => {
  res.send('localhost:3000/draw/:number')
})
app.get(`/draw/:number`, (req, res) => {
  const {number} = req.params;
  if (number > 10) {
    res.send("Please choose the number below 10");
  }
  var num = Number(number);
  var data = shuffle(number);
  var jFile = JSON.stringify(data);
  res.send(jFile);
})

app.listen(port, () => {
  console.log("Server is running...");
})
