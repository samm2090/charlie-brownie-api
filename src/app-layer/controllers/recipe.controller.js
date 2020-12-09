const httpStatus = require('http-status-codes');
const recipeService = require('../../business-layer/services/recipe.service');

module.exports.getRecipes = async (req, res) => {
  const recipes = await recipeService.getRecipes();
  res.status(httpStatus.OK).json(recipes);
};

module.exports.createRecipe = async (req, res) => {
  const recipe = req.body;

  const result = await recipeService.createRecipe(recipe);
  res.status(httpStatus.OK).json(result);
};
