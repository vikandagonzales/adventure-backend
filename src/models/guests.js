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

const update = (id, {accepted}) => {
  return db('guests')
    .update({rsvp: true, accepted})
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