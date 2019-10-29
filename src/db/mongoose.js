const mongoose = require('mongoose');

// USE TO CONNECT TO ATLAS
const DB = process.env.MONGODB_ATLAS.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(process.env.MONGODB_LOCAL, {
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