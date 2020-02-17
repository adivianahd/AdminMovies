var express = require('express');
var router = express.Router();

const ProductController = require('../controllers/ProductController');
//const ProductService = require('../service/ProductService');
const ProductService = require("../service/CrudService");
const ProductModel = require("../model/ProductModel");
const productInstance = new ProductController(new ProductService(ProductModel));

router.post('/',(req, res, next) => {
  productInstance.addNewProduct(req, res);
});

router.get('/',(req, res) => {
  productInstance.getProducts(req, res);
});

module.exports = router;
