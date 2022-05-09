// here we can call db and validate schema and return data
// however given the time constraints we will just return the stub data as below
const products = require('../enums/products.enum')

// get all products
const getProductList = () => {
  return products;
};

// get product by id
const getProductById = (id) => {
  const product = products.find((product) => product._id === id);
  if (!product) {
    throw new Error(`Product with id ${id} not found`);
  }
  return product;
};

// get products by brand
const getProductByBrand = (brand) => {
  const result = products.filter((product) => product.brand === brand);
  if (!result) {
    throw new Error(`Products with brand ${brand} not found`);
  }
  return result;
};

module.exports = {
  getProductList,
  getProductById,
  getProductByBrand,
};
