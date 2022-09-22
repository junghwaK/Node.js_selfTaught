const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

//상수이긴하나, 배열자체는 같은 객체이기에 새로운 요소를 받을 수 있다. 
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product',{pageTitle: 'Add Product', path: '/admin/add-product', formCSS: true, productCSS:true, activeAddProduct: true});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
