// IMPORTS
const express = require('express');
const morgan = require('morgan');

const api = require('./api');
const static = require('./static');
const db = require('./db');

// APP
const app = express();

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());

// STATIC
app.use(express.static(`${__dirname}/public`));
app.use('/', static);

// ROUTERS
app.use('/api/users', api.users);

app.use((req, res) => {
  res.status(404).send('Page not found!');
});

module.exports = app;