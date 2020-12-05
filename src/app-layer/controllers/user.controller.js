const httpStatus = require('http-status-codes');
const userService = require('../../business-layer/services/user.service');

module.exports.login = async (req, res) => {
  const { username, password } = req.body;

  const isLoggedIn = await userService.login(username, password);
  res.status(httpStatus.OK).json(isLoggedIn);
};
