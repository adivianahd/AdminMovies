const CrudService = require("./CrudService");
const User = require('../model/UserModel');

class UserService  extends CrudService {
  constructor() {
    super(User);
  }

  async findByUserName(name){
    const userFind = await User.findOne({user: name}).exec();
    return userFind; 
  };


};

module.exports = UserService;