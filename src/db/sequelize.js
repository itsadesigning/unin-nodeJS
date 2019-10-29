const Sequelize = require('sequelize');

const sequelize = new Sequelize('unin', 'ibogdan', process.env.MARIADB_LOCAL_PASS, {
  host: 'localhost',
  dialect: 'mariadb'
});

module.exports = sequelize;