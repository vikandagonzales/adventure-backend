const db = require('../../db');
const guestsModel = require('./guests');

const login = ({first_name, last_name}) => {
  return guestsModel.getOneByName(first_name, last_name)
    .then(response => {
      console.log(response);
    });
};
// function login (shop_username, email, password) {
//   let staff
//   return shopModel.getShopByName(shop_username)
//     .then(response => {
//       if (response.archived) throw {status: 400, message: "Bad Request"}
//       return shopModel.getStaffByEmail(email, response.id)
//         .then(data => {
//           if (!data || data.archived) throw {status: 400, message: "Bad Request"}
//           staff = data
//           return bcrypt.compare(password, data.password)
//         })
//         .catch(bcrypt.MISMATCH_ERROR, () => {
//           throw {status: 401, message: "Unauthorized"}
//         })
//         .then(() => {
//           delete staff.password
//           return staff
//         })
//     })
// }

// const getAll = () => {
//   return db('groups');
// };

// const getOne = id => {
//   return db('groups')
//     .where({id: id})
//     .first();
// };

// const create = ({name, limit}) => {
//   return db('groups')
//     .insert({name, limit})
//     .returning('*')
//     .then(([data]) => {
//       return data;
//     });
// };

// const update = (id, {name, limit}) => {
//   const updated = {};
//   name ? updated.name = name : null;
//   limit ? updated.limit = limit : null;
//   return db('groups')
//     .update(updated)
//     .where({id: id})
//     .returning('*')
//     .then(([data]) => {
//       return data;
//     });
// };

// const remove = id => {
//   return db('groups')
//     .del()
//     .where({id: id})
//     .returning('*')
//     .then(([data]) => {
//       delete data.id;
//       return data;
//     });
// };

module.exports = {
  login
};