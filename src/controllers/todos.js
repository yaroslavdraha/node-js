const Todo = require('../models/todo');
const ObjectID = require('mongodb').ObjectID;

// TODO: create method-generators for it

exports.create = (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => res.status(400).send(e))
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