const express = require("express");
const app = express();
const port = 1975;
const morgan = require("morgan");
var storage = require('node-persist');


var suits = ["diamond", "clover", "heart", "spade"];
var value = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
var cardObj =
    {
      ace: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      jack: 10,
      queen: 10,
      king: 10,
    }

function hitYou(times) {
  var sum = 0;
  var cards = [];
  for (var j = 0; j < times; j++) {
    cards.push(value[Math.floor(Math.random() * 13)] + " of " + suits[Math.floor(Math.random() * 4)]);
  }
  var ready = [];
  for (var i = 0; i < cards.length; i++) {
    var splitted = cards[i].split(" ");
    var keyPair = cards[i] + ": " + cardObj[splitted[0]];
    ready.push(keyPair)
    sum += cardObj[splitted[0]];
  }
  return ready + " - total your score: "  + sum;
}


function hitDealer(times) {
  var sum = 0;
  var cards = [];
  for (var j = 0; j < times; j++) {
    cards.push(value[Math.floor(Math.random() * 13)] + " of " + suits[Math.floor(Math.random() * 4)]);
  }
  var ready = [];
  for (var i = 0; i < cards.length; i++) {
    var splitted = cards[i].split(" ");
    var keyPair = cards[i] + ": " + cardObj[splitted[0]];
    ready.push(keyPair)
    sum += cardObj[splitted[0]];
  }
  return ready + " - total your score: "  + sum;
}
app.get(`/`, (req, res) => {
  res.send(`blackjack is on localhost:${port}/hit/:number  (how many times you would like to hit)`);
})

app.get(`/hit/:number`, (req, res) => {
  const {number} = req.params;
  var num = Number(number);
  var dataYou = hitYou(num)
  var dataDealer = hitDealer(num);
  var sumYou = Number(dataYou.slice(-2));
  var sumDealer = Number(dataDealer.slice(-2));
  var jFile = JSON.stringify(`Your cards: <strong>${dataYou}</strong>   <br>   Dealer's cards: <strong>${dataDealer}</strong>`);
  if (sumYou > 21) {
    var youLose = JSON.stringify(" <h4>Sorry! You lose. YOU WENT OVER 21!<h4>")
    res.send(jFile + youLose);
  }
  if (sumDealer > 21) {
    var dealerLose = JSON.stringify(" <h4>Dealer lose. Dealer WENT OVER 21!<h4>")
    res.send(jFile + dealerLose);
  }
  if (sumYou > sumDealer) {
    var youWin = JSON.stringify(`Conguratulation you Win with the score ${sumYou} and Dealer's score ${sumDealer} <br> `);
    res.send( youWin + jFile);
  }
  if (sumDealer > sumYou) {
    var youLose2 = JSON.stringify(`Sorry you Lose. with the score ${sumYou} and Dealer's score ${sumDealer} <br>`);
    res.send(youLose2 + jFile);
  }
})

app.listen(port, () => {
  console.log("server is running...");
})
