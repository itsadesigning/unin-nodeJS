// IMPORTS
const express = require('express');
const morgan = require('morgan');

const api = require('./api');
const static = require('./static');

require('dotenv').config();

// APP
const app = express();

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

// STATIC
app.use('/', static);
app.use(express.static(`${__dirname}/public`));

// ROUTERS
app.use('/api/users', api.users);

app.use((req, res) => {
  res.status(404).send('Page not found!');
});

module.exports = app;