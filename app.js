// UNOS OSNOVNIH MODULA
const http = require('http');

// KREIRAMO BAZIČNI SERVER
const server = http.createServer((req, res) => {
  res.end('Zdravo svijete!');
});

// POSTAVLJAMO SERVER DA SLUŠA NA LOCALHOST PORTU 3000
server.listen(3000, '127.0.0.1', () => {
  console.log(`Slušamo na portu 3000!`);
});