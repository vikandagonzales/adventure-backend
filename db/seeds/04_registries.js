const TABLE_NAME = 'registries';

exports.seed = (knex, Promise) => {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          store: 'Babylist',
          url: 'https://www.babylist.com/vika-keeghan',
          logo: 'https://www.babylist.com/assets/pages/pros_cons/babylist.svg'
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`);
    });
};