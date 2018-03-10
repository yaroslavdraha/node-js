const mongoose = require('../src/services/mongoose');
const Todo = require('../src/models/todo');

let id = '6aa432cb17f3632440a70ca022';

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todods', todos);
// }/*, (err) => console.log(err)*/);
//
// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todods', todo);
// });

Todo.findById(id).then(todo => {
  console.log('Todods', todo);
}, (err) => console.log(err.message));

// mongoose.connection.close();