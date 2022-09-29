const path = require('path');

const express = require('express');

const productsController = require('../controllers/products')

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',productsController.postAddProduct);

//이걸 불러오는 app.js 파일을 조정해주어야한다. 
module.exports = router;
