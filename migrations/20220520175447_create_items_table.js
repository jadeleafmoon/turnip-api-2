/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.createTable('items', function(table) {
		table.increments('id').primary();
		table.string('name').notNullable();
		table.decimal('price', 8, 2).notNullable();
		table.string('owner').defaultTo('').notNullable();
		table.text('description').defaultTo('').notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
	return knex.schema.dropTable('items');
};
