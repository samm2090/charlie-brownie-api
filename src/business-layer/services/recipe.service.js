const recipeDao = require('../../data-layer/dao/recipe.dao');

module.exports.getRecipes = async () => {
  return await recipeDao.getRecipes();
};

module.exports.createRecipe = async (recipe) => {
  const { ingredients } = recipe;
  delete recipe.ingredients;
  const result = await recipeDao.insertRecipe(recipe);

  if (result.insertId) {
    ingredients.forEach(async (ingredient) => {
      const recipeIngredient = {
        idRecipe: result.insertId,
        idIngredient: ingredient.id,
        quantity: ingredient.quantity,
      };
      await recipeDao.insertRecipeIngredient(recipeIngredient);
    });
  }

  return result;
};
