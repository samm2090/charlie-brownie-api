const router = require('express').Router();
const ingredientController = require('../../app-layer/controllers/ingredient.controller');

module.exports.getRoutes = () => {
  router.route('/').get(ingredientController.getIngredients);
  router.route('/').post(ingredientController.createIngredient);

  router.route('/stock').get(ingredientController.getStock);
  router.route('/stock').post(ingredientController.createStock);

  return router;
};
