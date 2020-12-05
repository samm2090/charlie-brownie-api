const mainRoute = require('./../routes/main.route');
const authRoute = require('./../routes/auth.route');
const recipeRoute = require('./../routes/recipe.route');
const ingredientRoute = require('./../routes/ingredient.route');

module.exports.loadRoutes = (app) => {
  app.use(mainRoute.getRoutes());
  app.use('/auth', authRoute.getRoutes());
  app.use('/recipe', recipeRoute.getRoutes());
  app.use('/ingredient', ingredientRoute.getRoutes());
};
