const db = require('../../db');

getAll = () => {
  return db('guests');
};

getOne = id => {
  return db('guests')
    .where({id: id})
    .first();
};

create = ({group_id, first_name, last_name}) => {
  return db('guests')
    .insert({group_id, first_name, last_name})
    .returning('*')
    .then(([data]) => {
      return data;
    });
};

update = (id, {accepted}) => {
  return db('guests')
    .update({rsvp: true, accepted})
    .where({id: id})
    .returning('*')
    .then(([data]) => {
      return data;
    });
};

remove = id => {
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