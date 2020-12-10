const productDao = require('../../data-layer/dao/product.dao');

module.exports.getProducts = async () => {
  return await productDao.getProducts();
};

module.exports.createProduct = async (product) => {
  return await productDao.insertProducts(product);
};

module.exports.updateProduct = async (product) => {
  return await productDao.updateProduct(product);
};
