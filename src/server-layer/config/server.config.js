const dotenv = require('dotenv');
const { loadRoutes } = require('./routes.config');
const { loadMiddlewares } = require('./middleware.config');
const mysqlConnector = require('../../data-layer/connectors/mysql.connector');

module.exports.loadConfig = (app) => {
  dotenv.config();
  loadMiddlewares(app);
  loadRoutes(app);
  mysqlConnector.connect();
};
