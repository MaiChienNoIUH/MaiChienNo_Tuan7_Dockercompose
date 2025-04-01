const express = require('express');
const mysql = require('mysql2');

const app = express();

const db = mysql.createConnection({
    host: 'mysql',
    user: 'user',
    password: 'password',
    database: 'mydb'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

app.get('/', (req, res) => {
    res.send('Node.js connected to MySQL!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
