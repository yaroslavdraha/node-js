const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const mongoose = require('./services/mongoose');
const Todo = require('./models/todo');

const app = new express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => res.status(400).send(e))
});

app.get('/todos', (req, res) => {
  Todo.find().then(todos => {
    res.send({todos});
  }, (e) => res.status(400).send(e));
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

module.exports = app;