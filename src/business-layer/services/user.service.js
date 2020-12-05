const userDao = require('../../data-layer/dao/user.dao');

module.exports.login = async (username, password) => {
  const user = await userDao.getUserByCredentials(username, password);
  return user ? true : false;
};
