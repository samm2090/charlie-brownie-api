const { getObject, getList } = require('../connectors/mysql.connector');
const { generateQuery } = require('./../utils/sql.util');

module.exports.getUserByCredentials = (username, password) => {
  const options = {
    conditions: {
      username,
      password,
    },
  };

  const query = generateQuery('select', 'user', options);

  return getObject(query);
};
