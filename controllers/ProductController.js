const bcrypt = require("bcrypt-nodejs");

class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  async login(req, res) {
    const product = await this.ProductService.getById(req.body.id);
    const compare = bcrypt.compareSync(req.body.password, user.password);

    return res.send(compare);
  }

  async getProduct(req, res) {
    const page = req.query.page ? req.query.page : 1;
    const products = await this.productService.get(page);

    return res.json(products);
  }

  async addProduct(req, res) {
    const body = req.body;

    const newBody = {
      ...body,
      password: bcrypt.hashSync(body.password)
    };

    if (body) {
      await this.ProductService.addProduct(newBody);
      return res.sendStatus(200);
    } else {
      return res.sendStatus(400);
    }
  }

  async getById(req, res) {
    const productById = await this.productService.getById(req.params.id);

    if(!productById) {
      return res.sendStatus(404);
    }
    
    return res.json(productById);
  }

  async findByName(username) {
    const user = await Products.find({ name: username }).limit(1).exec();
    if (user.length) {
      return user[0];
    }
    return null;
  }

  async updateProduct(req, res) {
    const updateProduct = await this.productService.update(req.params.id, req.body);

    return res.json(updateProduct);
  }
  
  async deleteProduct(req, res) {
    const updateProduct = await this.productService.delete(req.params.id);
    if(!updateProduct) {
      return res.sendStatus(404);
    }

    return res.sendStatus(200);
  }

};
module.exports = ProductController;