const express = require('express');
const app = express();

require('dotenv').config();

const { usersRouter } = require('./routers');


app.get('/', (req, res) => {
  res.status(200).send('Naslovnica');
});

app.use('/api/users', usersRouter);

// MIDDLEWARE 
app.use((req, res) => {
  res.status(404).send('Page not found!');
});

module.exports = app;