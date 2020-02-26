const CrudService = require("./CrudService");
const User = require('../model/UserModel');

class UserService  extends CrudService {
    constructor() {
        super(User);
      }

};

module.exports = UserService;