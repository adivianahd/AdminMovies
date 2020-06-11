const CrudService = require("./CrudService");
const User = require('../model/UserModel');

class UserService  extends CrudService {
  constructor() {
    super(User);
  }

  async get(page) {
    const users = await super.get(page);
    return users.map(this.userFilter);
  }

  async findByUserName(name){
    const userFind = await User.findOne({user: name}).exec();
    return userFind; 
  };

  userFilter({_id, user, isAdmin }) {
    return ({
      _id,
      user,
      isAdmin
    });
  }  

};

module.exports = UserService;