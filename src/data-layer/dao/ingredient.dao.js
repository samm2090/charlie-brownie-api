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

module.exports.getStock = (ingredient) => {
  const query = `select i.*,
                  IFNULL((select sum(quantity) from stock 
                  where idIngredient = i.id 
                  group by idIngredient),0) as stock
                from ingredient i`;

  const options = {
    sql: query,
  };
  return getList(options);
};

module.exports.insertStock = (stock) => {
  const options = {
    entity: stock,
  };

  const query = generateQuery('insert', 'stock', options);
  return getObject(query);
};
