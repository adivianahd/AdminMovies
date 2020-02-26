class CrudService {
  constructor(model) {
    this.model = model;
    this.limit = 15;
  };

  get(page) {
    const skip = (page - 1) * this.limit;
    const query = this.model.find().skip(skip).limit(this.limit).exec();

    return query;
  };

  getById(id) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return null;
    }
    
    const query = this.model.findOne({_id: id}).exec()
  
    return query 
  };
  
  add(data) {
    const newModel = new this.model(data);
    return newModel.save();
  };

  update(id, data) {
    const newModel = this.model.findOneAndUpdate({_id: id}, data).exec();
    return newModel;
  
  };

 async delete(id) {
    const model = await this.getById(id);
    if(!model) {
      return null;
    }

    return model.deleteOne();
  };
}

module.exports = CrudService;