const mainRoute = require('./../routes/main.route');
const userRoute = require('./../routes/user.route');

module.exports.loadRoutes = (app) => {
  app.use(mainRoute.getRoutes());
  app.use('/user', userRoute.getRoutes());
};
