const mainRoute = require('./../routes/main.route');
const matchRoute = require('./../routes/match.route');

module.exports.loadRoutes = (app) => {
  app.use(mainRoute.getRoutes());
  app.use('/match', matchRoute.getRoutes());
};
