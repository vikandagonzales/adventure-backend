const TABLE_NAME = 'details';

exports.up = (knex, Promise) => {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments();
    table.string('mother').notNullable();
    table.string('father').notNullable();
    table.string('host').notNullable();
    table.string('date').notNullable();
    table.string('time').notNullable();
    table.string('location').notNullable();
    table.string('registry').notNullable();
    table.string('registry_link').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};