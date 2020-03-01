var express = require('express');
var router = express.Router();

const UserController = require('../controllers/UserController');
const UserService = require('../service/UserService');
const UserInstance = new UserController(new UserService);
const passport = require("../Middleware");


router.post("/login", passport.authenticate("local"),(_, res) => {
  return res.json("Acceso Permitido");
});

router.get('/:name', (req, res) => {
  UserInstance.findByUserName(req, res);
});

router.get('/', (req, res) => {
  UserInstance.getUser(req, res);
});

router.get('/:id', (req, res) => {
  UserInstance.getById(req, res);
});

router.post('/', (req, res) => {
  UserInstance.addUser(req, res);
});

router.put('/', (req, res) => {
  UserInstance.updateUser(req, res);
});

router.delete('/:id', (req, res) => {
  UserInstance.deleteUser(req, res);
});

module.exports = router;
