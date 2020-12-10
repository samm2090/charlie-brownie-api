const httpStatus = require('http-status-codes');
const productService = require('../../business-layer/services/product.service');

module.exports.getProducts = async (req, res) => {
  const products = await productService.getProducts();
  res.status(httpStatus.OK).json(products);
};

module.exports.createProduct = async (req, res) => {
  const product = req.body;
  const result = await productService.createProduct(product);
  res.status(httpStatus.OK).json(result);
};

module.exports.updateProduct = async (req, res) => {
  const product = req.body;
  const result = await productService.updateProduct(product);
  res.status(httpStatus.OK).json(result);
};