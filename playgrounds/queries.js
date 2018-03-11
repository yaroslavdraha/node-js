const mongoose = require('../src/services/mongoose');
const Todo = require('../src/models/todo');

let id = '5aa440e8c31dfc38748dff08';

// Todo.remove().then(result => {
//   console.log(result.result);
// });


Todo.findByIdAndRemove({text: 'First test todo'}).then((doc) => {
  console.log(doc);
});


// Todo.findByIdAndRemove