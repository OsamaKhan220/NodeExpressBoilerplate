const repository = (app, moongose) => {
  app.db = moongose.createConnection(app.get('mongodb-url'), { useNewUrlParser: true });
  app.db.on('error', console.error.bind(console, 'mongoose connection error: '));
  app.db.once('open', () => {
    console.log('mongoose open for business');
  });
};

module.exports = repository;
exports = module.exports;
