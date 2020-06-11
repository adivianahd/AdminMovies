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

  deleteOne(id) {
    const model = this.model.findOne({_id: id}).exec()
    if(!model) {
      return null;
    }
    return model.deleteOne({_id: id});
  };

  findByUsername(name){
    const query = this.model.findOne({name: name}).exec();
    return query;
  }
}

module.exports = CrudService;