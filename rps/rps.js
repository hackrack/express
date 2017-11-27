const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 1950;

app.use(morgan("dev"));

var rockPaperScissors = ["rock", "paper", "scissors"];
app.get("/", (req, res) => {
  res.send(`please choose rock, paper or scissors on localhost port ${port}/`);
})

app.get(`/rock`, (req, res) => {
  var ai = rockPaperScissors[Math.floor(Math.random() * 3)];
  var rpsObj = {user: "rock", ai: ai, result: ""}
  if (ai === "rock") {
    rpsObj.result = "tie";
  } else if (ai === "paper") {
    rpsObj.result = "lose";
  } else {
    rpsObj.result = "win";
  }
  res.send(JSON.stringify(rpsObj));
})

app.get(`/paper`, (req, res) => {
  var ai = rockPaperScissors[Math.floor(Math.random() * 3)];
  var rpsObj = {user: "paper", ai: ai, result: ""}
  if (ai === "paper") {
    rpsObj.result = "tie";
  } else if (ai === "rock") {
    rpsObj.result = "win";
  } else {
    rpsObj.result = "lose";
  }
  res.send(JSON.stringify(rpsObj));
})

app.get(`/scissors`, (req, res) => {
  var ai = rockPaperScissors[Math.floor(Math.random() * 3)];
  var rpsObj = {user: "scissors", ai: ai, result: ""}
  if (ai === "scissors") {
    rpsObj.result = "tie";
  } else if (ai === "rock") {
    rpsObj.result = "lose";
  } else {
    rpsObj.result = "win";
  }
  res.send(JSON.stringify(rpsObj));
})

app.listen(port, () => {
  console.log("server is running...");
})
