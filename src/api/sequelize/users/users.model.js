const {
  STRING,
  INTEGER
} = require('sequelize');

const { sequelize } = require(`../../../db`);

module.exports = sequelize.define('user', {
  _id: {
    type: INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    allowNull: false
  },
  firstName: {
    type: STRING,
    allowNull: false
  },
  lastName: {
    type: STRING,
    allowNull: false
  },
  vocation: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false
  }
});

