const router = require('express').Router();
const userController = require('../../app-layer/controllers/match.controller');

module.exports.getRoutes = () => {
  router.route('/login').post(userController.login);
  return router;
};
