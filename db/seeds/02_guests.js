const TABLE_NAME = 'guests';

exports.seed = (knex, Promise) => {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          group_id: 1,
          first_name: 'Vikanda',
          last_name: 'O\'Brien',
          admin: true
        },
        {
          group_id: 1,
          first_name: 'Keeghan',
          last_name: 'O\'Brien',
          admin: true
        },
        {
          group_id: 2,
          first_name: 'Claudia',
          last_name: 'Ligidakis',
          admin: true
        },
        {
          group_id: 3,
          first_name: 'Noi',
          last_name: 'Gonzales'
        },
        {
          group_id: 4,
          first_name: 'Nino',
          last_name: 'Gonzales'
        },
        {
          group_id: 4,
          first_name: 'Vanessa',
          last_name: 'Gonzales'
        },
        {
          group_id: 5,
          first_name: 'Samantha',
          last_name: 'Carate'
        },
        {
          group_id: 5,
          first_name: 'Devin',
          last_name: 'Seeley'
        },
        {
          group_id: 6,
          first_name: 'Niquee',
          last_name: 'Branca'
        },
        {
          group_id: 6,
          first_name: 'Chris',
          last_name: 'Branca'
        },
        {
          group_id: 7,
          first_name: 'Katrina',
          last_name: 'Agustin'
        },
        {
          group_id: 8,
          first_name: 'Tony',
          last_name: 'Agustin'
        },
        {
          group_id: 8,
          first_name: 'Monica',
          last_name: 'Darby-Agustin'
        },
        {
          group_id: 9,
          first_name: 'Yuriy',
          last_name: 'Golovko'
        },
        {
          group_id: 10,
          first_name: 'Jeff',
          last_name: 'McDowell'
        },
        {
          group_id: 10,
          first_name: 'Sara',
          last_name: 'McDowell'
        },
        {
          group_id: 11,
          first_name: 'Corey',
          last_name: 'Roussel'
        },
        {
          group_id: 11,
          first_name: 'Lauren',
          last_name: 'Roussel'
        },
        {
          group_id: 12,
          first_name: 'Nathaniel',
          last_name: 'Dees'
        },
        {
          group_id: 12,
          first_name: 'Rina',
          last_name: 'Rodriguez'
        },
        {
          group_id: 13,
          first_name: 'Mark',
          last_name: 'Pavlovski'
        },
        {
          group_id: 14,
          first_name: 'Daniel',
          last_name: 'Shikoff'
        },
        {
          group_id: 15,
          first_name: 'Dustin',
          last_name: 'Ruskell'
        },
        {
          group_id: 16,
          first_name: 'Gavin',
          last_name: 'Look'
        },
        {
          group_id: 17,
          first_name: 'Roger',
          last_name: 'Schmidt'
        },
        {
          group_id: 18,
          first_name: 'Wendy',
          last_name: 'Parsons'
        },
        {
          group_id: 19,
          first_name: 'Tyrone',
          last_name: 'Kleim'
        },
        {
          group_id: 20,
          first_name: 'Madeleine',
          last_name: 'Arends'
        },
        {
          group_id: 21,
          first_name: 'Kenzie',
          last_name: 'Bartles'
        },
        {
          group_id: 22,
          first_name: 'Sam',
          last_name: 'Fischer'
        },
        {
          group_id: 23,
          first_name: 'Melinda',
          last_name: 'Carr'
        },
        {
          group_id: 24,
          first_name: 'James',
          last_name: 'Gomez'
        },
        {
          group_id: 25,
          first_name: 'Chris',
          last_name: 'Miller'
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`);
    });
};