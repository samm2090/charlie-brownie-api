const router = require('express').Router();
const recipeController = require('../../app-layer/controllers/ingredient.controller');

module.exports.getRoutes = () => {
  router.route('/').get(recipeController.getIngredients);
  router.route('/').post(recipeController.createIngredient);

  return router;
};
