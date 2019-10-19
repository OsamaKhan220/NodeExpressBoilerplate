const user = require('./user');

const models = (app, mongoose) => {
  user(app, mongoose);
};

module.exports = models;
exports = module.exports;
