const mongoose = require('mongoose');

//Create schema for CRUD operations
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, 'post must have a title'],
    trim: true
  },
  author: {
    type: String,
    require: [true, 'post must have a author'],
    trim: true
  },
  postDescription: {
    type: String,
    require: true,
    trim: true
  }
});

//craete model
const Post = mongoose.model('Post', postSchema);

//export User
module.exports = Post;
