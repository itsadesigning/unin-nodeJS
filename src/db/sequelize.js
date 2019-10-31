const Sequelize = require('sequelize');

module.exports = new Sequelize('unin', 'ibogdan', 'password', {
  logging: false,
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT0'
  },
});

