const model = require('../models/registries');

const getAll = (req, res, next) => {
  model.getAll()
    .then(data => res.status(200).send({data}))
    .catch(next);
};

const getOne = (req, res, next) => {
  model.getOne(parseInt(req.params.id))
    .then(data => {
      if (data) return res.status(200).send({data});
      else throw {status: 404, message: 'Registry not found'};
    })
    .catch(next);
};

const create = (req, res, next) => {
  if (!req.body.store || !req.body.url || !req.body.logo) return next({status: 400, message: 'Missing information'});
  model.create(req.body)
    .then(data => res.status(201).send({data}))
    .catch(next);
};

const update = (req, res, next) => {
  if (!req.body.store && !req.body.url && !req.body.logo) return next({status: 400, message: 'No changes to make'});
  model.update(parseInt(req.params.id), req.body)
    .then(data => res.status(200).send({data}))
    .catch(next);
};

const remove = (req, res, next) => {
  model.remove(parseInt(req.params.id))
    .then(data => res.status(200).send({data}))
    .catch(next);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
};