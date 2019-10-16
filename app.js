const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
  res.status(200).send('Naslovnica');
});

//
app.get('/api', (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { ime: 'Ivan', prezime: 'Bogdan' }
  });
});

// MIDDLEWARE 
app.use((req, res) => {
  res.status(404).send('Page not found!');
});

const PORT = process.env.PORT;
app.listen(PORT, '127.0.0.1', () => {
  console.log(`Listening on port ${PORT}!`);
});