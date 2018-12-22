const TABLE_NAME = 'guests';

exports.up = (knex, Promise) => {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments();
    table.integer('group_id').notNullable().references('groups.id');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.boolean('rsvp').defaultsTo(false);
    table.boolean('accepted').defaultsTo(null);
    table.boolean('admin').defaultsTo(false);
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};