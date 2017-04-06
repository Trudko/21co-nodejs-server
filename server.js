const http = require('http');
const url = require('url');
const port = 3000;
const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use('/libs/', express.static(__dirname + '/node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/register', (req, res) => {
	console.log('Register router called on nodejs server with param foo', req.body.foo);
	// db.run(`INSERT INTO users VALUES ('${req.body.address}')`);
    res.end('ok');
});


app.listen(port, () => {
   console.log('nodejs server is running in port ' + port);
});
