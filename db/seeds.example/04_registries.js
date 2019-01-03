const TABLE_NAME = 'registries';

exports.seed = (knex, Promise) => {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          store: 'Amazon',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Amazon_logo_plain.svg',
          url: 'https://www.amazon.com/ideas/amzn1.account.AH3YOV4MEEDYQ5PYMT3ZCIBTBT7Q/3NW0QMJ3KZ8DX'
        },
        {
          store: 'Target',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/432px-Target_logo.svg.png',
          url: 'https://www.target.com/gift-registry/baby-registry'
        },
        {
          store: 'Buy Buy Baby',
          logo: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Buy_Buy_Baby_Logo.png',
          url: 'https://www.buybuybaby.com/store/page/BabyRegistry'
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`);
    });
};