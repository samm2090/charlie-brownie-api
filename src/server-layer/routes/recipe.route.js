const router = require('express').Router();
const recipeController = require('../../app-layer/controllers/recipe.controller');

module.exports.getRoutes = () => {
  router.route('/').get(recipeController.getRecipes);
  router.route('/').post(recipeController.createRecipe);
  return router;
};
