const User = require('../models/user');
const CG = require('../core/crud-generator');

// TODO: need to improve client code of CG
const cg = new CG(User);
cg.all();

module.exports = cg.getExport();