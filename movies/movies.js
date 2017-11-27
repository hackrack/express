const express = require('express');
const morgan = require("morgan");
const app = express();
const port = 1979;
const movies = require('./movies.json');
app.use(morgan('dev'))

app.get("/", (req, res) => {
  res.send(`/year/:year <br> /title/:title <br> /genre/:genre`);
})
app.get(`/title/:title`, (req, res) => {
  res.send(movies.filter(movie => movie.title === req.params.title))
})

app.get(`/year/:year`, (req, res) => {
  var year = Number(req.params.year);
  res.send(movies.filter(movie => movie.year === year));
})
app.get(`/genre/:genre`, (req, res) => {
  res.send(movies.filter(movie => movie.genre === req.params.genre));
})
app.listen(port, () => {
  console.log("server is running");
})
