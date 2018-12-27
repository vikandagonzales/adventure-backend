const db = require('../../db');

const get = () => {
  return db('details')
    .first();
};

const update = ({mother, father, host, date, time, location, registry, registry_link}) => {
  const updated = {};
  mother? updated.mother = mother : null;
  father ? updated.father = father : null;
  host ? updated.host = host : null;
  date ? updated.date = date : null;
  time ? updated.time = time : null;
  location ? updated.location = location : null;
  registry ? updated.registry = registry : null;
  registry_link ? updated.registry_link = registry_link : null;
  return db('details')
    .update(updated)
    .returning('*')
    .then(([data]) => {
      return data;
    });
};

module.exports = {
  get,
  update
};