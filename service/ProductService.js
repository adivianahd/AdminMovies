const Product = require("./../model/ProductModel");

class ProductService {

  constructor() {
    this.limit = 3;
  }

  getProducts(page) {
    const skip = (page - 1) * this.limit;
    const query = Product.find().skip(skip).limit(this.limit).exec();

    return query;
  }
  
  addNewProduct(newProduct) {
    const product = new Product(newProduct);
    return product.save();
  }
}

module.exports = ProductService;