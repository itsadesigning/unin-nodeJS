// IMPORTS
const express = require('express');
const morgan = require('morgan');

require('dotenv-flow').config();

const api = require('./src/api');
const static = require('./src/static');
const db = require('./src/db');

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

// ROUTERS
app.use('/api/mongodb/users', api.mongoose.users);
app.use('/api/mariadb/users', api.sequelize.users);

app.use((req, res) => {
  res.status(404).send('Page not found!');
});

module.exports = app;