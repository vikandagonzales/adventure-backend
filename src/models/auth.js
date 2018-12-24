const db = require('../../db');
const guestsModel = require('./guests');

const login = ({first_name, last_name}) => {
  return guestsModel.getOneByName(first_name, last_name)
    .then(guest => {
      if (!guest) throw {status: 400, message: 'Guest not found'};
      return guest;
    });
};

module.exports = {
  login
};