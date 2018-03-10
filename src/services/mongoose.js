const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

console.log(process.env);

const mongoUrl = process.env.NODE_ENV === 'production'
  ? 'mongodb://yaroslav:[eq[ekb123@ds135680.mlab.com:35680/mean-app-db'
  : 'mongodb://localhost:27017/TodoApp';

mongoose.connect(mongoUrl)
  .then(() => {}, (err) => {console.log(err)});

module.exports = mongoose;