const mainRoute = require('./../routes/main.route');
const userRoute = require('./../routes/user.route');
const recipeRoute = require('./../routes/recipe.route');
const ingredientRoute = require('./../routes/ingredient.route');

module.exports.loadRoutes = (app) => {
  app.use(mainRoute.getRoutes());
  app.use('/user', userRoute.getRoutes());
  app.use('/recipe', recipeRoute.getRoutes());
  app.use('/ingredient', ingredientRoute.getRoutes());
};
