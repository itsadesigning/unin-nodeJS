const fs = require('fs');
const express = require('express');
const router = express.Router();
// fs.readFileSync();

const getIndex = (req, res) => {
  res.status(200).send('Naslovnica');
}

router
  .route('/')
  .get(getIndex);

module.exports = router;