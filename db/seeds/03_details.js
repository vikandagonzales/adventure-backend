const TABLE_NAME = 'details';

exports.seed = (knex, Promise) => {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          mother: 'Vika',
          father: 'Keeghan',
          host: 'Claudia',
          host_contact: '(480) 299-1141',
          date: 'Saturday, February 16, 2019',
          time: '3:00 PM',
          location: '1535 Bellevue Ave, Seattle, WA 98122',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.5703146596375!2d-122.32926808436923!3d47.61504417918529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906acb2e45b2f7%3A0x9d7ec92e9d872503!2s1535+Bellevue+Ave%2C+Seattle%2C+WA+98122!5e0!3m2!1sen!2sus!4v1545990771455',
          rsvp_date: 'February 1, 2019'
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`);
    });
};