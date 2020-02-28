var express = require('express');
var router = express.Router();

const ProductController = require('../controllers/ProductController');
const ProductService = require('../service/ProductService');
const productInstance = new ProductController(new ProductService());

function isAdmin(req, res, next) {
  if (req.originalUrl == "/users/login") {
    return next();
  }

  if (!req.user || !req.user.isAdmin) {
    return res.sendStatus(401);
  }

  return next();
}

router.post('/', isAdmin, (req, res) => {
  productInstance.addProduct(req, res);
});

router.get('/', isAdmin,(req, res) => {
  productInstance.getProduct(req, res);
});

router.get('/:id', isAdmin, (req, res) => {
  productInstance.getById(req, res);
});

router.put('/:id',(req, res) => {
  productInstance.updateProduct(req, res);
});

router.delete('/:id',(req, res) => {
  productInstance.deleteProduct(req, res);
});

module.exports = router;
