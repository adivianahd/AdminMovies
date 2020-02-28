const CrudService = require("./CrudService");
const User = require('../model/UserModel');

class UserService  extends CrudService {
  constructor() {
    super(User);
  }

  async findByUserName(name){
    const user = await User.find({name: true}).exec();
    console.log(user)
    return user; 
  };


};

module.exports = UserService;