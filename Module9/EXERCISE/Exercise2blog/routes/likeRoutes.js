const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/:postId', async (req, res) => {
  const { postId } = req.params;
  const { userId } = req.body;
  const post = await Post.findById(postId);
  if (!post.likes.includes(userId)) {
    post.likes.push(userId);
    await post.save();
  }
  res.json(post);
});

module.exports = router;