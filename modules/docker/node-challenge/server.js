const express = require('express');
const server = express();
const port = 3000;
const { conn } = require('./database')

const insertUser = `INSERT INTO people(name) VALUES('William');`;
conn.query(insertUser);
conn.end();


server.get('/', (request, response) => {
  const selectUser = `SELECT * FROM people`;
  conn.query(selectUser);
  conn.end();
  response.send(`<h1>Full Cycle ${selectUser} <h1/>`);
});

server.listen(port, () => {
  console.log(`server is running in port => ${port}`);
});