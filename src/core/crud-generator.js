const Router = require('express').Router;
const Resource = require('./resource');

/**
 * Class for default CRUD methods generation
 */
class CrudGenerator {
  /**
   * @param model Mongoose schema
   */
  constructor(model) {
    this.router = new Router();
    this.resource = new Resource(model);
  }

  all() {
    this.get();
    this.getById();
    this.post();
    this.delete();
  }

  get() {
    this.router.get('/', this.resource.findAll.bind(this.resource));
  }

  getById() {
    this.router.get('/:id', this.resource.findById.bind(this.resource));
  }

  post() {
    this.router.post('/', this.resource.create.bind(this.resource));
  }

  put() {
    this.router.post('/', this.resource.update.bind(this.resource));
  }

  delete() {
    this.router.delete('/:id', this.resource.delete.bind(this.resource));
  }

  getExport() {
    return this.router;
  }
}

module.exports = CrudGenerator;