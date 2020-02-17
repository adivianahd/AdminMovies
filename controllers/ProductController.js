class ProductController {
    constructor(productService) {
      this.productService = productService;
    }
    async getProducts(req, res) {
      const page = req.query.page ? req.query.page : 1;
      const products = await this.productService.get(page);
    
        return res.json(products);
    }
    async addNewProduct(req, res) {
        const products = await this.productService.add(req.body);
    
        return res.json(products);
      }
      
};
module.exports = ProductController;