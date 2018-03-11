const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const mongoose = require('./services/mongoose');
const Todo = require('./models/todo');
const ObjectID = require('mongodb').ObjectID;

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

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(400).send({});
  }

  Todo.findById(id).then(todo => {
    if (!todo) {
      return res.status(404).send({});
    }
    res.send({todo});
  }, err => res.status(404).send(err.message));
});

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(400).send({message: 'Object id is not valid'});
  }

  Todo.findByIdAndRemove(id).then((doc) => {
    if(!doc) {
      return res.status(404).send({message: `Document with id ${id} was not found`});
    }

    res.send(doc);
  }, (e) => res.status(404).send(e.message))
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

module.exports = app;