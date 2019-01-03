const TABLE_NAME = 'guests';

exports.seed = (knex, Promise) => {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          group_id: 1,
          first_name: 'Harry',
          last_name: 'Potter',
          admin: true
        },
        {
          group_id: 1,
          first_name: 'Ginevra',
          last_name: 'Potter',
          admin: true
        },
        {
          group_id: 1,
          first_name: 'James',
          last_name: 'Potter'
        },
        {
          group_id: 1,
          first_name: 'Albus',
          last_name: 'Potter'
        },
        {
          group_id: 2,
          first_name: 'Ronald',
          last_name: 'Weasley'
        },
        {
          group_id: 2,
          first_name: 'Hermione',
          last_name: 'Weasley',
          admin: true
        },
        {
          group_id: 2,
          first_name: 'Rose',
          last_name: 'Weasley'
        },
        {
          group_id: 2,
          first_name: 'Hugo',
          last_name: 'Weasley'
        },
        {
          group_id: 3,
          first_name: 'Draco',
          last_name: 'Malfoy',
          admin: true
        },
        {
          group_id: 3,
          first_name: 'Astoria',
          last_name: 'Malfoy'
        },
        {
          group_id: 3,
          first_name: 'Scorpius',
          last_name: 'Malfoy'
        },
        {
          group_id: 4,
          first_name: 'Neville',
          last_name: 'Longbottom'
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`);
    });
};