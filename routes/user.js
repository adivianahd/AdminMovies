var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController');
const UserService = require('../service/UserService');
const UserInstance = new UserController(new UserService);


router.get('/user', function(req, res, next) {
  res.send('esto es una prueba');
});

module.exports = router;
