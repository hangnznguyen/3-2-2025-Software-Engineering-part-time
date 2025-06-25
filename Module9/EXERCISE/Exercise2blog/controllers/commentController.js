const Comment = require('../models/Comment');
const Post = require('../models/Post');

exports.createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    // Add comment reference to the Post
    await Post.findByIdAndUpdate(req.body.post, { $push: { comments: comment._id } });
    res.status(201).json(comment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
