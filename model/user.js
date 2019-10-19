const user = (app, mongoose) => {
  const { Schema } = mongoose;
  const UserSchema = new Schema({
    name: {
      type: String,
    },
    email: {
      type: String,
    },
  });
  app.db.model('User', UserSchema);
};

module.exports = user;
exports = module.exports;
