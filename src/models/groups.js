const db = require('../../db');

const getAll = () => {
  return db('groups');
};

const getOne = id => {
  return db('groups')
    .where({id: id})
    .first();
};

module.exports = {
  getAll,
  getOne
};