// IMPORTS
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const api = require('./api');
const static = require('./static');

require('dotenv-flow').config();

const DB = process.env.DB_ATLAS.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(con => {
  console.log(con.connections);
});

// APP
const app = express();

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