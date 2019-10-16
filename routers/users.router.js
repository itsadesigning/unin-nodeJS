const express = require('express');
const {
  getUsers,
  postUser,
  putUser,
  deleteUser
} = require('../controllers/users.controller');

const router = express.Router();

router
  .route('/')
  .get(getUsers)
  .post(postUser)

router
  .route('/:id')
  .put(putUser)
  .delete(deleteUser);

module.exports = router;