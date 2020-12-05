const router = require('express').Router();
const recipeController = require('../../app-layer/controllers/recipe.controller');

module.exports.getRoutes = () => {
  router.route('/ingredients').get(recipeController.getIngredients);
  return router;
};
