const db = require('../../db');

const get = () => {
  return db('details')
    .first();
};

const update = ({mother, father, host, host_contact, date, time, location, map, rsvp_date}) => {
  const updated = {};
  mother? updated.mother = mother : null;
  father ? updated.father = father : null;
  host ? updated.host = host : null;
  host_contact ? updated.host_contact = host_contact : null;
  date ? updated.date = date : null;
  time ? updated.time = time : null;
  location ? updated.location = location : null;
  map ? updated.map = map : null;
  rsvp_date ? updated.rsvp_date = rsvp_date : null;
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