const express = require('express');
const app = express();

require('dotenv').config();

const { usersController, commentsController } = require('./controllers');

const { 
  getUsers,
  postUser,
  putUser,
  deleteUser,
} = usersController;

const getIndex = (req, res) => {
  res.status(200).send('Naslovnica');
};

const getAllData = (req, res) => {
  res.status(200).json({ status: 'success' });
};

app.route('/')
  .get(getIndex);

app.route('/api')
  .get(getAllData);

app.route('/api/users')
  .get(getUsers)
  .post(postUser);

app.route('/api/users/:id')
  .put(putUser)
  .delete(deleteUser);

// MIDDLEWARE 
app.use((req, res) => {
  res.status(404).send('Page not found!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '127.0.0.1', () => {
  console.log(`Listening on port ${PORT}...`);
});