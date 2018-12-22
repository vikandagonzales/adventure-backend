const model = require('../models/guests');

getAll = (req, res, next) => {
  model.getAll()
    .then(data => {
      res.status(200).send({data});
    })
    .catch(next);
};

getOne = (req, res, next) => {
  if (!req.params.id) return next({status: 404, message: 'Guest not found'});
  model.getOne(parseInt(req.params.id))
    .then(data => {
      res.status(200).send({data});
    })
    .catch(next);
};

create = (req, res, next) => {
  if (!req.body.first_name || !req.body.last_name) return next({status: 400, message: 'Missing information'});
  model.create(req.body)
    .then(data => {
      res.status(201).send({data});
    })
    .catch(next);
};

update = (req, res, next) => {
  model.update(parseInt(req.params.id), req.body)
    .then(data => {
      res.status(200).send({data});
    })
    .catch(next);
};

remove = (req, res, next) => {
  model.remove(parseInt(req.params.id))
    .then(data => {
      res.status(200).send({data});
    })
    .catch(next);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
};