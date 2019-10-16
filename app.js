const express = require('express');
const app = express();

require('dotenv').config();

const getIndex = (req, res) => {
  res.status(200).send('Naslovnica');
};

const getAllData = (req, res) => {
  res.status(200).json({ status: 'success' });
};

const getUsers = (req, res) => {
  res.status(200).json({ status: 'success' });
};

const postUser = (req, res) => {
  res.status(200).json({ status: 'success' });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ status: 'success' });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
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
  .put(updateUser)
  .delete(deleteUser);

// MIDDLEWARE 
app.use((req, res) => {
  res.status(404).send('Page not found!');
});

const PORT = process.env.PORT;
app.listen(PORT, '127.0.0.1', () => {
  console.log(`Listening on port ${PORT}!`);
});