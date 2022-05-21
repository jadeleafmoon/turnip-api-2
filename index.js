require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;

const cors = require('cors');

(async () => {
	try {
		app.use(
			cors({
				origin      : '*',
				methods     : [ 'GET', 'POST', 'PUT', 'DELETE', 'PATCH' ],
				credentials : true
			})
		);
		app.use(express.json());

		const config = require('./knexfile');
		const knex = require('knex')(config);

		app.get('/hello', (req, res) => {
			res.send('Hello world from TURNIP API 2!');
		});

		app.get('/items', (req, res) => {
			knex('items').orderBy('id', 'desc').returning('*').then((data) => {
				console.log('💜 data', data);
				res.send(data);
			});
		});

		app.post('/items', (req, res) => {
			const newItem = req.body;
			console.log('🔥 POST /items req', newItem);

			knex('items').insert(newItem).returning('*').then((result) => {
				res.status(201).send(`The product ${result[0].name} has been added`);
			});
		});

		app.patch('/items/:id', (req, res) => {
			const id = parseInt(req.params.id);
			const itemUpdates = req.body;

			knex('items')
				.where('id', '=', id)
				.update(itemUpdates)
				.returning('*')
				.then((result) => {
					res
						.status(200)
						.send(
							`The product ${itemUpdates.name} with id ${id} has been updated`
						);
				});
		});

		app.delete('/items/:id', (req, res) => {
			const id = parseInt(req.params.id);

			knex('items').where('id', '=', id).del().returning('*').then((result) => {
				res
					.status(200)
					.send(`The product ${result[0].name} with id ${id} has been deleted`);
			});
		});

		app.get('/', (req, res) => {
			res.send('Hi there! You have reached / !');
		});

		app.get('/*', (req, res) => {
			res.send('Hi there! That endpoint does not exist !');
		});

		// app.listen(PORT, () => {
		// 	console.log(`Example app listening on port ${PORT}`);
		// });

		console.log('Running migrations');
		await db.migrate.latest();

		console.log('Seeding data');
		await db.seed.run();

		const server = new ApolloServer({ typeDefs, resolvers });
		console.log('Starting server');
		await server.start();

		//   server.applyMiddleware({ app, path: "/" });
		app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
	} catch (err) {
		console.error('Error starting app!', err);
		process.exit(-1);
	}
})();
