require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;

const config = require('./knexfile');
const knex = require('knex')(config)[process.env.NODE_ENV || 'development'];

app.get('/hello', (req, res) => {
    knex.raw('SELECT VERSION()').then((data) => {
        console.log('🔥 version', data);
        res.send('Hello world !');
    });
	
});

app.get('/', (req, res) => {
	res.send('Hi there! You have reached / !');
});

app.get('/*', (req, res) => {
	res.send('Hi there! That endpoint does not exist !');
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
