const {
  getObject,
  getList,
} = require('../connectors/mysql.connector');

module.exports.getUserByCredentials = (username, password) => {
  const query = `select * from user where username=? and password=?`;

  const options = {
    sql: query,
    values: [username, password],
  };

  return getObject(options);
};
