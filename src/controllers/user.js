const models = require('../models');

const getUsers = (req, res) => {
  models.User.find({}, (err, users) => {
    if (err) return res.send(err);
    res.send(users);
  });
};

const newUser = (req, res) => {
  const user = models.User(req.body);
  user.save((err, user) => {
    if (err) return res.send(err);
    res.send(user);
  });
};

const deleteUsers = (req, res) => {
  models.User.findById(req.params.id).remove((err, user) => {
    if (err) return res.send(err);
    res.send(user);
  });
};


module.exports = (app) => {
  app.get('/users', getUsers);
  app.post('/users', newUser);
  app.delete('/users/:id', deleteUsers);
};