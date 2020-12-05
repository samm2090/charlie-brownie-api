const router = require('express').Router();
const httpStatus = require('http-status-codes');

module.exports.getRoutes = () => {
  router.route('/').get((req, res) => {
    res.status(httpStatus.OK).send('API DE PICHANGA');
  });
  return router;
};
