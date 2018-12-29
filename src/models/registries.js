const db = require('../../db');

const getAll = () => {
  return db('registries');
};

const getOne = id => {
  return db('registries')
    .where({id: id})
    .first();
};

const create = ({store, url, logo}) => {
  return db('registries')
    .insert({store, url, logo})
    .returning('*')
    .then(([data]) => {
      return data;
    });
};

const update = (id, {store, url, logo}) => {
  const updated = {};
  store ? updated.store = store : null;
  url ? updated.url = url : null;
  logo ? updated.logo = logo : null;
  return db('registries')
    .update(updated)
    .where({id: id})
    .returning('*')
    .then(([data]) => {
      return data;
    });
};

const remove = id => {
  return db('registries')
    .del()
    .where({id: id})
    .returning('*')
    .then(([data]) => {
      delete data.id;
      return data;
    });
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
};