const users = require('./users');
const home = require('./home');

const routes = (app, mongoose) => {
  users(app, mongoose);
  home(app, mongoose);
};

module.exports = routes;
exports = module.exports;
