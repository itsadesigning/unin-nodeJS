const express = require('express');
const app = express();

require('dotenv').config();

const { usersRouter } = require('./routers');

const getIndex = (req, res) => {
  res.status(200).send('Naslovnica');
};

app.route('/')
  .get(getIndex);

app.use('/api/users', usersRouter);

// MIDDLEWARE 
app.use((req, res) => {
  res.status(404).send('Page not found!');
});

module.exports = app;