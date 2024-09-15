const express = require('express');

const path = require('path');

const router = express.Router();
// const rootDir = require('../util/path');

const productController = require('../controllers/products');

// GET=> /admin/add-product
router.get('/add-product', productController.getAddProduct);

//POST=> /admin/add-product
router.post('/add-product', productController.postAddProduct);

module.exports = router;
//exports.routes = router;
