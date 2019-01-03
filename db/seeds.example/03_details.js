const TABLE_NAME = 'details';

exports.seed = (knex, Promise) => {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          mother: 'Ginny',
          father: 'Harry',
          host: 'Hermione',
          host_contact: '(512) 432-4399',
          date: 'Thursday, February 14, 2019',
          time: '12:00 PM',
          location: '4123 Rosewater Rd, LONDON SW1A 2AA',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47339407503!2d-0.24167977408525823!3d51.52855824335485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2sus!4v1546541878720',
          rsvp_date: 'January 28, 2019'
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`);
    });
};