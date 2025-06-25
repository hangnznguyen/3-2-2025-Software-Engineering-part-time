const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create a comment
router.post('/', commentController.createComment);

// Get all comments for a post
router.get('/post/:postId', commentController.getCommentsByPost);

// (Optional) Delete a comment
router.delete('/:id', commentController.deleteComment);

module.exports = router;
