const ingredientDao = require('../../data-layer/dao/ingredient.dao');

module.exports.getIngredients = async () => {
  return await ingredientDao.getIngredients();
};
