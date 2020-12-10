const router = require('express').Router();
const productController = require('../../app-layer/controllers/product.controller');

module.exports.getRoutes = () => {
  router.route('/').get(productController.getProducts);
  router.route('/').post(productController.createProduct);
  router.route('/').patch(productController.createProduct);


  return router;
};
