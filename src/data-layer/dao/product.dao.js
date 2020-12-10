const { getObject, getList } = require('../connectors/mysql.connector');
const { generateQuery } = require('../utils/sql.util');

module.exports.getProducts = () => {
  const query = `select * from product`;
  const options = {
    sql: query,
  };
  return getList(options);
};

module.exports.insertProducts = (product) => {
  const options = {
    entity: product,
  };
  const query = generateQuery('insert', 'product', options);
  return getObject(query);
};
