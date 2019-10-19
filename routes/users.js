const express = require('express');

const users = (app) => {
  const router = express.Router();
  /* GET users listing. */
  router.get('/', (req, res) => {
    const User = new app.db.models.User({ name: 'Najam', email: 'najam@gmail.com' });
    User.save().then((data) => {
      res.send(data);
    });
  });
  app.use('/user', router);
};

module.exports = users;
exports = module.exports;
