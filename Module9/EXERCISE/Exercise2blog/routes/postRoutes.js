const express = require('express');
const router = express.Router();
const { createPost, likePost } = require('../controllers/postController');

router.post('/', createPost);
router.post('/:id/like', likePost);

module.exports = router;