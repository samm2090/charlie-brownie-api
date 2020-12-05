const httpStatus = require('http-status-codes');
const userService = require('../../business-layer/services/user.service');

module.exports.auth = async (req, res) => {
  const { username, password } = req.body;

  const isLoggedIn = await userService.auth(username, password);
  
  res.status(httpStatus.OK).json(isLoggedIn);
};
