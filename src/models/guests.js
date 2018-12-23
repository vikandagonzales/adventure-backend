const db = require('../../db');
const groupsModel = require('./groups');

const getAll = () => {
  return db('guests');
};

const getOne = id => {
  return db('guests')
    .where({id: id})
    .first();
};

const create = async ({group_id, first_name, last_name}) => {
  const allGuests = await getAll();
  const guests = await allGuests.filter(guest => guest.group_id == group_id);
  const group = await groupsModel.getOne(group_id);
  if (guests.length < group.limit) {
    return db('guests')
      .insert({group_id, first_name, last_name})
      .returning('*')
      .then(([data]) => {
        return data;
      });
  } else {
    throw {status: 400, message: 'Limit for group exceeded'};
  }
};

const update = (id, {first_name, last_name, rsvp, accepted}) => {
  const updated = {};
  first_name ? updated.first_name = first_name : null;
  last_name ? updated.last_name = last_name : null;
  rsvp ? updated.rsvp = rsvp : updated.rsvp = true;
  accepted ? updated.accepted = accepted : null;
  return db('guests')
    .update(updated)
    .where({id: id})
    .returning('*')
    .then(([data]) => {
      return data;
    });
};

const remove = id => {
  return db('guests')
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