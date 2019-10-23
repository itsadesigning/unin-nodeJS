const mongoose = require('mongoose');

require('dotenv-flow').config();

// USE TO CONNECT TO ATLAS
const DB = process.env.DB_ATLAS.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(process.env.DB_LOCAL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(con => {
  console.log('Connected to MongoDB!');
}).catch(err => {
  console.log(err);
});

module.exports = mongoose;