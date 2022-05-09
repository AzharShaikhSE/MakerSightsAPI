const assert = require('assert');
// import product service
const productService = require('../../src/services/product.service');

describe('Product Service', () => {

    it('should return all products', async () => {
        const products = await productService.getProductList();
        assert.equal(products.length, 5);
    });

    it('should return product by id', async () => {
        const product = await productService.getProductById(1);
        assert.equal(product._id, 1);
    });

    it('should return products by brand', async () => {
        const products = await productService.getProductByBrand('Adidas');
        assert.equal(products.length, 1);
    });

});