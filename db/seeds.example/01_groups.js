const TABLE_NAME = 'groups';

exports.seed = (knex, Promise) => {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          name: 'Potter',
          limit: 4
        },
        {
          name: 'Weasley',
          limit: 4
        },
        {
          name: 'Malfoy',
          limit: 5
        },
        {
          name: 'Longbottom',
          limit: 2
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`);
    });
};