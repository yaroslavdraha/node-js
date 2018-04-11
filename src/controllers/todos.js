const Todo = require('../models/todo');
const ObjectID = require('mongodb').ObjectID;

exports.getAll = (req, res) => {
  Todo.find({})
    .then(todos => {
    console.log('asdas');
    res.send({todos});
  }, (e) => res.status(400).send(e));
};

exports.create = (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => res.status(400).send(e))
};

exports.getById = (req, res) => {
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
};

exports.delete = (req, res) => {
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
};