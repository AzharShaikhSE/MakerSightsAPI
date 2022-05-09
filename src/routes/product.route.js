const express = require('express');
const router = express.Router();
const { getProductList, getProductById, getProductByBrand } = require('../services/product.service');

// Define Product routes below are few defined we can have addition api's for adding prodcuts, deleting products, filtering products, etc.

// get all products
router.get('/', async (req, res) => {
    try {
        const products = await getProductList();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// get product by id
router.get('/:id', async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});

// get products by brand
router.get('/brand/:brand', async (req, res) => {
    try {
        const products = await getProductByBrand(req.params.brand);
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});


module.exports = router;
