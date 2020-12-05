const httpStatus = require('http-status-codes');
const ingredientService = require('../../business-layer/services/recipe.service');

module.exports.getIngredients = async (req, res) => {
  const ingredients = await ingredientService.getIngredients();
  res.status(httpStatus.OK).json(ingredients);
};

module.exports.createIngredient = async (req, res) => {
  const ingredient = req.body;
  const result = await ingredientService.createIngredient(ingredient);
  res.status(httpStatus.OK).json(result);
};
