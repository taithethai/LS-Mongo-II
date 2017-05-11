# LS-Mongo-II

## Topics

*	File structure 
* Controllers 
* Models 
* mongoose.model 
* Schema.methods 
* Schema.statics 
* Schema.pre('save', cb); 
* required: true
* validate: {}
* Nested Schema 
* module.exports

## Assignment

Create a new folder and run `npm init` to create your `package.json` file.
Install npm packages: `npm i --save express body-parser mongoose`
Start your MongoDB server by running `mongod` from the command line.
Implement the following routes but have them utilize a database to achieve data persistence.
* [POST] `/users` This route should save a new user to the server. (This is just in memory and will not persist if you restart the server.)
* [GET] `/users` This route will return an array of all users.
* [GET] `/users/:id` This route will return the user with the matching `id` (`_id` on the db document) property.
* [DELETE] `/users/:id` This route should delete the specified user.

Each `user` in the database should have the properties: `email`, `password`, `firstName`, and `blogPosts`.  
`email` should be unique, required, and have a validation function.  
`password` should be required.
`blogPosts` should be an array of blogPosts.

Implement a second model called `BlogPosts`.  Implement the following routes:
* [POST] `/posts/:userId` This route should save a new blog post to the corresponding user document.
* [GET] `/user/posts/:userId` This route will return an array of all blog posts associated with the specified user.
* [GET] `/posts/:id` This route will return the blog post with the matching `id` property.
* [DELETE] `/posts/:id` This route should delete the specified blog post.
