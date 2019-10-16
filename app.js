// OSNOVNI MODULI
const http = require('http');
const url = require('url');
const querystring = require('querystring');

// THIRD-PARTY MODULI
const dotenv = require('dotenv').config();

const server = http.createServer((req, res) => {
  // PARSIRAMO URL I IZ NJEGA IZVLAČIMO POTREBNE PODATKE
  const { pathname, query } = url.parse(req.url);
  const { id } = querystring.parse(query);

  // ODGOVOR ŠALJEMO OVISNO O IZLAZNOJ TOČKI
  if ( pathname === '/' ) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<h1>Naslovnica</h1>')
  } else if ( pathname === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end({ ime: 'Ivan', prezime: 'Bogdan' });
  } else {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<h1>Naslovnica</h1>')
  }
});

const PORT = process.env.PORT;
server.listen(PORT, '127.0.0.1', () => {
  console.log(`Slušamo na portu ${PORT}!`);
});