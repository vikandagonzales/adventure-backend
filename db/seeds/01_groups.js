const TABLE_NAME = 'groups';

exports.seed = (knex, Promise) => {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          id: 1,
          name: 'O\'Brien',
          limit: 2
        },
        {
          id: 2,
          name: 'Ligidakis',
          limit: 3
        },
        {
          id: 3,
          name: 'Gonzales',
          limit: 1
        },
        {
          id: 4,
          name: 'Gonzales',
          limit: 4
        },
        {
          id: 5,
          name: 'Seeley',
          limit: 3
        },
        {
          id: 6,
          name: 'Branca',
          limit: 2
        },
        {
          id: 7,
          name: 'Agustin',
          limit: 2
        },
        {
          id: 8,
          name: 'Agustin',
          limit: 5
        },
        {
          id: 9,
          name: 'Golovko',
          limit: 2
        },
        {
          id: 10,
          name: 'McDowell',
          limit: 3
        },
        {
          id: 11,
          name: 'Roussel',
          limit: 4
        },
        {
          id: 12,
          name: 'Dees',
          limit: 4
        },
        {
          id: 13,
          name: 'Pavlovski',
          limit: 2
        },
        {
          id: 14,
          name: 'Shikoff',
          limit: 2
        },
        {
          id: 15,
          name: 'Ruskell',
          limit: 2
        },
        {
          id: 16,
          name: 'Look',
          limit: 2
        },
        {
          id: 17,
          name: 'Schmidt',
          limit: 2
        },
        {
          id: 18,
          name: 'Parsons',
          limit: 2
        },
        {
          id: 19,
          name: 'Kleim',
          limit: 1
        },
        {
          id: 20,
          name: 'Arends',
          limit: 1
        },
        {
          id: 21,
          name: 'Bartles',
          limit: 2
        },
        {
          id: 22,
          name: 'Fischer',
          limit: 1
        },
        {
          id: 23,
          name: 'Carr',
          limit: 1
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`);
    });
};