class ProductController {
  constructor(productService) {
    this.productService = productService;
  }
  async getProducts(req, res) {
    const page = req.query.page ? req.query.page : 1;
    const products = await this.productService.get(page);

    return res.json(products);
  }
  async addProduct(req, res) {
    const products = await this.productService.add(req.body);

    return res.json(products);
  }
  async getById(req, res) {
    const productById = await this.productService.getById(req.params.id);

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
    const updateProduct = await this.productService.delete(req.params.id);
    if(!updateProduct) {
      return res.sendStatus(404);
    }

    return res.sendStatus(200);
  }

};
module.exports = ProductController;