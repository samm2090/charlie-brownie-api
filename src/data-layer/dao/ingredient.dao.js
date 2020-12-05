const { getObject, getList } = require('../connectors/mysql.connector');
const { generateQuery } = require('./../utils/sql.util');

module.exports.getIngredients = () => {
  const query = `select * from ingredient`;
  const options = {
    sql: query,
  };
  return getList(options);
};

module.exports.insertIngredient = (ingredient) => {
  const options = {
    entity: ingredient,
  };
  const query = generateQuery('insert', 'ingredient', options);
  return getObject(query);
};
