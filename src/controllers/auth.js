const model = require('../models/groups');
const jwt = require('jsonwebtoken');

const login = (req, res, next) => {
  if (!req.body.first_name || !req.body.last_name) return next({status: 400, message: 'Missing information'});
  model.login(req.body)
    .then(({first_name, last_name}) => {
      const token = jwt.sign({first_name, last_name}, process.env.SECRET);
      return res.status(200).send({token});
    })
    .catch(next);
};

const isAuthenticated = (req, res, next) => {
  if (!req.headers.authorization) return next({status: 401, message: 'Unauthorized'});
  const [scheme, credentials] = req.headers.authorization.split(' ');
  jwt.verify(credentials, process.env.SECRET, (err, payload) => {
    if (err) return next({status: 401, message: 'Unauthorized'});
    req.claim = payload;
    next();
  });
};

const getAuthStatus = (req, res, next) => {
  return res.status(200).send({...req.claim});
}

module.exports = {
  login,
  isAuthenticated,
  getAuthStatus
};