const CrudService = require("./CrudService");
const Product = require("./../model/ProductModel");

class ProductService extends CrudService {
  constructor() {
    super(Product);
  }
}

module.exports = ProductService;