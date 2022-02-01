const express = require('express');
const server = express();
const port = 3001;
const mysql = require('mysql');

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const conn = mysql.createConnection(config);

const insertUser = `INSERT INTO people(name) VALUES('William');`;
conn.query(insertUser);
conn.end();


server.get('/', (request, response) => {
  const conn = mysql.createConnection(config);
  const selectUser = `SELECT * FROM people`;
  conn.query(selectUser, (error, rows) => {
    
    Object.keys(rows).forEach((key) => {
      let row = rows[key]
      console.log(row.name)
      response.send(`<h1>Full Cycle ${row.name}<h1/>`);
    })
    
  });
});

server.listen(port, () => {
  console.log(`server is running in port => ${port}`);
});