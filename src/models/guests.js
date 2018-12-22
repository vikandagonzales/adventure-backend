const db = require('../../db');
const groups = require('./groups');

const getAll = () => {
  return db('guests');
};

const getOne = id => {
  return db('guests')
    .where({id: id})
    .first();
};

const create = async ({group_id, first_name, last_name}) => {
  const guests = await getAll();
  console.log(guests);
  // return db('guests')
  //   .insert({group_id, first_name, last_name})
  //   .returning('*')
  //   .then(([data]) => {
  //     return data;
  //   });
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