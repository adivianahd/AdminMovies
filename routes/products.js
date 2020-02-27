var express = require('express');
var router = express.Router();

const ProductController = require('../controllers/ProductController');
const ProductService = require('../service/ProductService');
const productInstance = new ProductController(new ProductService());
const bcrypt = require("bcrypt-nodejs");
const passport = require("../Middleware");


router.post("/login", passport.authenticate("local"),(req, res) =>{
  return res.json(req.product);
});

router.get("/password", (req, res) => {
  const password = 123;
  const hashedPassword = bcrypt.hashSync(password);

  return res.json(
    password,
    hashedPassword
    //test
  );
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
