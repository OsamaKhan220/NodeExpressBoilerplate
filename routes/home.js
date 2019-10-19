const express = require('express');

const home = (app) => {
  const router = express.Router();

  router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
  });

  app.use('/', router);
};
module.exports = home;
exports = module.exports;
