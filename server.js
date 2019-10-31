const dotenv = require('dotenv');
const app = require('./app');
const { mongoose, sequelize } = require('./src/db');

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(res => {
    console.log('Connected to MariaDB!');
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  })
  .catch(err => {
    console.log('SEQUELIZE SYNC ERR:', err);
  });