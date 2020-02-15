var express = require('express');
var router = express.Router();

const ProductController = require('../controllers/ProductController');
const ProductService = require('../service/ProductService');
const productInstance = new ProductController(new ProductService);

router.get('/',(req, res, next) => {
  res.render('product', { title: 'Express' });
});

router.get('/product',(req, res) => {
  productInstance.getProduct(req, res);
});

module.exports = router;
