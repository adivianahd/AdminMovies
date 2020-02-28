var express = require('express');
var router = express.Router();

const ProductController = require('../controllers/ProductController');
const ProductService = require('../service/ProductService');
const productInstance = new ProductController(new ProductService());
const passport = require("../Middleware");
 
router.post("/login", passport.authenticate("local"),(req, res) =>{
  return res.json(req.product);
});

router.post('/',(req, res) => {
  productInstance.addProduct(req, res);
});

router.get('/',(req, res) => {
  productInstance.getProduct(req, res);
});

router.get('/:id',(req, res) => {
  productInstance.getById(req, res);
});

router.put('/:id',(req, res) => {
  productInstance.updateProduct(req, res);
});

router.delete('/:id',(req, res) => {
  productInstance.deleteProduct(req, res);
});

module.exports = router;
