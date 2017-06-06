const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Blog = require('./blog');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    validate: {
      validator: (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  firstName: String,
  blogPosts: [Blog]
});

module.exports = UserSchema;
