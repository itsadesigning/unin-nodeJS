const Sequelize = require('sequelize');

module.exports = new Sequelize('unin', 'ibogdan', 'password', {
  host: 'localhost',
  dialect: 'mariadb'
});

