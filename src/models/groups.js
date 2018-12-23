const db = require('../../db');

const getAll = () => {
  return db('groups');
};

const getOne = id => {
  return db('groups')
    .where({id: id})
    .first();
};

const create = ({name, limit}) => {
  return db('groups')
    .insert({name, limit})
    .returning('*')
    .then(([data]) => {
      return data;
    });
};

const update = (id, {name, limit}) => {
  return db('groups')
    .update({name, limit})
    .where({id: id})
    .returning('*')
    .then(([data]) => {
      return data;
    });
};

const remove = id => {
  return db('groups')
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