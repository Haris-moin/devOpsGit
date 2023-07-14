const express = require('express');
const mysql = require('mysql2');
const cors = require('cors')
const app = express();
const port = 3001;
console.log("running");



const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'HarisMoin',
database: 'mydatabase'  
});

app.use(cors());
app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM mytable', (error, results) => {
    if (error) throw error;
console.log("resule",results);
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
