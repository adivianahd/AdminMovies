class ProductController {
  constructor(productService) {
    this.productService = productService;
  }

  async getProduct(req, res) {
    const page = req.query.page ? req.query.page : 1;
    const products = await this.productService.get(page);

    return res.json(products);
  }

  async addProduct(req, res) {
    const body = req.body;
    const newProduct = this.productService.add(body);

    return res.json({productAdd: newProduct  })

  }

  async getById(req, res) {
    const id = req.params.id
    const productById = await this.productService.getById(id);

    if(!productById) {
      return res.sendStatus(404);
    }
    
    return res.json(productById);
  }

  async updateProduct(req, res) {
    const updateProduct = await this.productService.update(req.params.id, req.body);

    return res.json(updateProduct);
  }
  
  async deleteProduct(req, res) {
    const id = req.params.id
    const updateProduct = await this.productService.delete(id);
    if(!updateProduct) {
      return res.sendStatus(404);
    }

    return res.sendStatus(200);
  }

};
module.exports = ProductController;