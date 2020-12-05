const { getObject, getList } = require('../connectors/mysql.connector');

module.exports.getIngredients = () => {
  const query = `select * from ingredient`;

  const options = {
    sql: query,
  };

  return getList(options);
};
