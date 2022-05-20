require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;

const config = require('./knexfile');
const knex = require('knex')(config)[process.env.NODE_ENV || 'development'];

app.get('/hello', (req, res) => {
    
    res.send('Hello world !');
    // knex.raw('SELECT VERSION()').then((data) => {
    //     console.log('🔥 version', data);
        
    // });
	
});

app.get('/items', (req, res) => {
	knex('items').orderBy('id', 'desc').returning('*').then((data) => {
		console.log("💜 data", data);
		res.send(data);
		
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
