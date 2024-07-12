const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'contact_form',
  port:3307,
  schema:'contact_form'
});

module.exports = pool.promise();