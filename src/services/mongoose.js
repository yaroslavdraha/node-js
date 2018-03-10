const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const mongoUrl = process.env.NODE_ENV === 'production'
  ? 'mongodb://yaroslav:qweasd123@ds135680.mlab.com:35680/mean-app-db'
  : 'mongodb://localhost:27017/TodoApp';

mongoose.connect(mongoUrl)
  .then(() => {}, (err) => {console.log(err)});

module.exports = mongoose;