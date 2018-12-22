const db = require('../../db');

getAll = () => {
  return db('groups');
};

getOne = id => {
  return db('groups')
    .where({id: id})
    .first();
};

module.exports = {
  getAll,
  getOne
};