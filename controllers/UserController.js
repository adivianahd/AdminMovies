class UserController {
    constructor(userService) {
      this.userService = userService;
    }
    async getUser(req, res) {
      const page = req.query.page ? req.query.page : 1;
      const user = await this.userService.get(page);
  
      return res.json(user);
    }
    async addUser(req, res) {
      const user = await this.userService.add(req.body);
  
      return res.json(user);
    }
    async getById(req, res) {
      const userById = await this.userService.getById(req.params.id);
  
      if(!userById) {
        return res.sendStatus(404);
      }
      
      return res.json(userById);
    }
    async updateUser(req, res) {
      const updateUser = await this.userService.update(req.params.id, req.body);
  
      return res.json(updateUser);
    }
    
    async deleteUser(req, res) {
      const updateUser = await this.userService.delete(req.params.id);
      if(!updateUser) {
        return res.sendStatus(404);
      }
  
      return res.sendStatus(200);
    }
  
  };
  module.exports = UserController;