const TABLE_NAME = 'groups';

exports.seed = (knex, Promise) => {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          id: 1,
          name: 'Group1',
          limit: 2
        },
        {
          id: 2,
          name: 'Group2',
          limit: 3
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`);
    });
};