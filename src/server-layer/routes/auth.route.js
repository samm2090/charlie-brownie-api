const router = require('express').Router();
const userController = require('../../app-layer/controllers/user.controller');

module.exports.getRoutes = () => {
  router.route('/').post(userController.auth);
  return router;
};
