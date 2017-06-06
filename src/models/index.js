const mongoose = require('mongoose');

module.exports = {
  User: mongoose.model('User', require('./user')),
  Blog: mongoose.model('Blog', require('./blog')),
};