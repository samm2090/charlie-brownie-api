const ingredientDao = require('../../data-layer/dao/ingredient.dao');

module.exports.getIngredients = async () => {
  return await ingredientDao.getIngredients();
};

module.exports.createIngredient = async (ingredient) => {
  return await ingredientDao.insertIngredient(ingredient);
};

module.exports.getStock = async () => {
  return await ingredientDao.getStock();
};

module.exports.createStock = async (stock) => {
  return await ingredientDao.insertStock(stock);
};
