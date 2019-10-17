const express = require('express');
const {
  getUsers,
  getUser,
  postUser,
  putUser,
  deleteUser,
  getId
} = require('./comments.controller');

const router = express.Router();

router.param('id', getId);

router
  .route('/')
  .get(getUsers)
  .post(postUser)

router
  .route('/:id')
  .get(getUser)
  .put(putUser)
  .delete(deleteUser);

module.exports = router;