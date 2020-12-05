const router = require('express').Router();
const matchController = require('./../../app-layer/controllers/match.controller');

module.exports.getRoutes = () => {
  router.route('/').get(matchController.listMatches);
  router.route('/').post(matchController.createMatch);

  router.route('/:matchId/player').post(matchController.addPlayer);
  return router;
};
