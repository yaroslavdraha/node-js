
require('../config/config');

const express = require('express');
const mongoose = require('./services/mongoose');
const bodyParser = require('body-parser');

const todosRoutes = require('./routes/todos');
const usersRoutes = require('./routes/users');

const app = new express();
app.use(bodyParser.json());

app.use('/todos', todosRoutes);
app.use('/users', usersRoutes);


app.listen(process.env.PORT, (error) => {
  console.log(`Server is up on ${process.env.PORT}`);
});

module.exports = app;