const dotenv = require('dotenv');
const { loadRoutes } = require('./routes.config');
const { loadMiddlewares } = require('./middleware.config');
const mongoConnector = require('../../data-layer/connectors/mongo.connector');

module.exports.loadConfig = (app) => {
  dotenv.config();
  loadMiddlewares(app);
  loadRoutes(app);
  mongoConnector.connect()
};
