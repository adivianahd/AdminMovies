const bcrypt = require("bcrypt-nodejs");

class UserController {
    constructor(userService) {
      this.userService = userService;
    }
    async getUser(req, res) {
      const page = req.query.page ? req.query.page : 1;
      const user = await this.userService.get(page);
  
      return res.json(user);
    };

    async addUser(req, res) {
      const body = req.body;
      const newBody = {
        ...body,
        password: bcrypt.hashSync(body.password)
      };
  
      if (body) {
        await this.userService.add(newBody);
        return res.sendStatus(200);
      } else {
        return res.sendStatus(400);
      }
    };

    async findByUserName(req, res) {
      const name = req.params.name;
      const userFound = await this.userService.findByUserName(name)
      
      if(!userFound){
        return res.sendStatus(404);
      }
      return res.json(userFound);
    };
      
    async login(req, res) {
      const user = await this.UserService.getById(req.body.id);
      const compare = bcrypt.compareSync(req.body.password, user.password);
  
      return res.send(compare);
    };

    async getById(req, res) {
      const userById = await this.userService.getById(req.params.id);
  
      if(!userById) {
        return res.sendStatus(404);
      }
      
      return res.json(userById);
    };

    async updateUser(req, res) {
      const updateUser = await this.userService.update(req.params.id, req.body);
  
      return res.json(updateUser);
    };
    
    async deleteUser(req, res) {
      const updateUser = await this.userService.delete(req.params.id);
      if(!updateUser) {
        return res.sendStatus(404);
      }
  
      return res.sendStatus(200);
    };
  
  };
  module.exports = UserController;