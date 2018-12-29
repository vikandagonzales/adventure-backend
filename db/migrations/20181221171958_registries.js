const TABLE_NAME = 'registries';

exports.up = (knex, Promise) => {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments();
    table.string('store').notNullable();
    table.text('url').notNullable();
    table.text('logo').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};