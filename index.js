const express = require('express');
const app = express();
const port = 6060;

app.get('/hello', (req, res) => {
	res.send('Hello world !');
});

app.get('/', (req, res) => {
	res.send('Hi there! You have reached / !');
});

app.get('/*', (req, res) => {
	res.send('Hi there! That endpoint does not exist !');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
