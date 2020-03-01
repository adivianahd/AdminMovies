const CrudService = require("./CrudService");
const User = require('../model/UserModel');

class UserService  extends CrudService {
  constructor() {
    super(User);
  }

  async get(page) {
    const users = await super.get(page);
    return users.map(({ user, isAdmin }) =>  ({ user, isAdmin }));
  }

  async findByUserName(name){
    const userFind = await User.findOne({user: name}).exec();
    return userFind; 
  };


};

module.exports = UserService;