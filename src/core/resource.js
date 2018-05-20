const ObjectID = require('mongodb').ObjectID;
const trimChar = require('../utils/trim-char');

/**
 * Class for manipulations with default CRUD methods
 */
class Resource {
  /**
   * @param model Mongoose schema
   */
  constructor(model) {
    this.model = model;
  }

  findAll(req, res) {
    this.model.find(this._buildQuery(req))
      .then(items => this._handleSuccess(res, items))
      .catch(e => this._handleError(res, e.message));
  }

  findById(req, res) {
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
      return this._handleError(res, "Entity ID isn't correct");
    }

    this.model.findById(id)
      .then(item => {
        if (!item) {
          return this._handleError(res, `Entity with ID ${id} wasn't found`);
        }
        this._handleSuccess(res, [item]);
      })
      .catch(e => this._handleError(res, e.message));
  }

  create() {
    // TODO: implement
  }

  update() {
    // TODO: implement
  }

  delete() {
    // TODO: implement
  }

  _buildQuery(req) {
    if (!req.query) {
      return {};
    }

    Object.keys(req.query).forEach(key => {
      if (typeof req.query[key] === 'string') {
        req.query[key] = trimChar(req.query[key], '"');
      }
    });

    return req.query;
  }

  _handleSuccess(res, data) {
    res.send({
      success: true,
      data
    });
  }

  _handleError(res, err) {
    res.status(400).send({
      success: false,
      error: err
    });
  }
}

module.exports = Resource;
