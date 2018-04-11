require('../config/config');

const express = require('express');
const mongoose = require('./services/mongoose');
const bodyParser = require('body-parser');

const todosRoutes = require('./routes/todos');

const app = new express();
app.use(bodyParser.json());


app.use('/todos', todosRoutes);


app.listen(process.env.PORT, () => {
  console.log(`Server is up on ${process.env.PORT}`);
});

module.exports = app;