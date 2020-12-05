const userDao = require('../../data-layer/dao/user.dao');

module.exports.auth = async (username, password) => {
  const user = await userDao.getUserByCredentials(username, password);
  return user ? true : false;
};
