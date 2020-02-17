class CrudService {
  constructor(model) {
    this.model = model;
    this.limit = 3;
  }

  get(page) {
    const skip = (page - 1) * this.limit;
    const query = this.model.find().skip(skip).limit(this.limit).exec();

    return query;
  }

  getById(id) {
    // TODO: Get by Id
  }
  
  add(data) {
    const newModel = new this.model(data);
    return newModel.save();
  }

  update(id, data) {
    // TODO: Update by Id
  }

  delete(id) {
    // TODO: Delete by Id
  }
}

module.exports = CrudService;