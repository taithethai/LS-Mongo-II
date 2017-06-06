const model = require('../models');

const newBlog = (req, res) => {
  model.User.findById(req.body.userId, (err, user) => {
    if (err) return res.send(err);
    const blog = new model.Blog(req.body.blogData);
    user.blogPosts.push(blog);
    user.save((err, user) => {
      if (err) return res.send(err);
      res.send(user);
    });
  });
};

const getBlog = (req, res) => {
  model.User.find({ 'pets._id': ObjectId(req.params.id) }, (err, blog) => {
    if (err) return res.send(err);
    res.send(blog);
  });
}

module.exports = (app) => {
  app.post('/blog', newBlog);
  app.get('/blog/:blogId', getUsers);
};
  // app.delete('/blog/:blogId', deleteUsers);