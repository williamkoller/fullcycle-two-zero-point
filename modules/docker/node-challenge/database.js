const mysql = require('mysql');

const config = {
  host: 'dbmysql',
  user: 'root',
  passord: 'root',
  database: 'nodedb',
  port: 3306
};

export const conn = mysql.createConnection(config);

