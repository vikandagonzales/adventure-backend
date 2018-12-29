const TABLE_NAME = 'details';

exports.up = (knex, Promise) => {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments();
    table.string('mother').notNullable();
    table.string('father').notNullable();
    table.string('host').notNullable();
    table.string('host_contact').notNullable();
    table.string('date').notNullable();
    table.string('time').notNullable();
    table.string('location').notNullable();
    table.text('map').notNullable();
    table.string('rsvp_date').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};