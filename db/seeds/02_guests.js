const TABLE_NAME = 'guests';

exports.seed = (knex, Promise) => {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          id: 1,
          group_id: 1,
          first_name: 'Guest1',
          last_name: 'Group1',
          rsvp: false,
          accepted: false,
          admin: true
        },
        {
          id: 2,
          group_id: 2,
          first_name: 'Guest2',
          last_name: 'Group2',
          rsvp: false,
          accepted: false,
          admin: false
        },
        {
          id: 3,
          group_id: 2,
          first_name: 'Guest3',
          last_name: 'Group2',
          rsvp: false,
          accepted: false,
          admin: false
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`);
    });
};