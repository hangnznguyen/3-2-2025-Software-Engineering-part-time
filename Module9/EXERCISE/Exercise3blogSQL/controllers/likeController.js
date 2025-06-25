const { Like } = require('../models');

exports.likePost = async (req, res) => {
  try {
    const { UserId, PostId } = req.body;

    // Prevent duplicate likes
    const existing = await Like.findOne({ where: { UserId, PostId } });
    if (existing) return res.status(400).json({ message: 'Already liked' });

    const like = await Like.create({ UserId, PostId });
    res.status(201).json(like);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const { UserId, PostId } = req.body;
    const like = await Like.findOne({ where: { UserId, PostId } });
    if (!like) return res.status(404).json({ message: 'Like not found' });
    await like.destroy();
    res.json({ message: 'Unliked successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLikesByPost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const count = await Like.count({ where: { PostId: postId } });
    res.json({ postId, likes: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};