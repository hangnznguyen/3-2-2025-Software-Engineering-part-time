const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {  // Optional: reference to the User who wrote the comment
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  post: {  // Reference to the Post this comment belongs to
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  }
}, {
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Comment', commentSchema);