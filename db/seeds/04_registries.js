const TABLE_NAME = 'registries';

exports.seed = (knex, Promise) => {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          store: 'Amazon',
          url: 'https://www.amazon.com/baby-reg/vikanda-gonzales-keeghan-obrien-march-2019-kirkland/2OOQMJNKSBFJW',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Amazon_logo_plain.svg'
        },
        {
          store: 'Target',
          url: 'http://www.target.com/gift-registry/gift/ba07f8140fda4a1ba54e5c106967e9af',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/864px-Target_logo.svg.png'
        },
        {
          store: 'Buy Buy Baby',
          url: 'https://www.buybuybaby.com/store/giftregistry/viewregistryguest/546933753?eventType=Baby',
          logo: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Buy_Buy_Baby_Logo.png'
        }
      ]);
    })
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`);
    });
};