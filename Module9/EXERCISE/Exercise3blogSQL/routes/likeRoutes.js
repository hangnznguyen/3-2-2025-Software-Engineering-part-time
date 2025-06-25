const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likeController');

// Like a post
router.post('/', likeController.likePost);

// Unlike a post (delete like)
router.delete('/', likeController.unlikePost);

// Get number of likes for a post
router.get('/post/:postId', likeController.getLikesByPost);

module.exports = router;