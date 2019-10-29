const { Schema, model } = require('mongoose');

module.exports = model('User', new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  vocation: {
    type: String,
    required: true,
  }
}));