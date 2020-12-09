const { getObject, getList } = require('../connectors/mysql.connector');
const { generateQuery } = require('../utils/sql.util');

module.exports.getRecipes = () => {
  // const query = generateQuery('select', 'recipe');

  const query = `select r.*, GROUP_CONCAT(distinct i.name SEPARATOR ', ') as ingredients
                  from recipe r inner join recipe_ingredient ri
                  on r.id = ri.idRecipe inner join ingredient i
                  on i.id = ri.idIngredient
                  where idIngredient = i.id 
                  group by r.id`;
  const options = { sql: query };

  return getList(options);
};

module.exports.insertRecipe = (recipe) => {
  const options = {
    entity: recipe,
  };
  const query = generateQuery('insert', 'recipe', options);
  return getObject(query);
};

module.exports.insertRecipeIngredient = (recipeIngredient) => {
  const options = {
    entity: recipeIngredient,
  };
  const query = generateQuery('insert', 'recipe_ingredient', options);
  return getObject(query);
};
