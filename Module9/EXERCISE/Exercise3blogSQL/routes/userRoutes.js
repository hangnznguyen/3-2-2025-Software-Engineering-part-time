const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/', userController.createUser);

// (Optional) Get all users
router.get('/', userController.getAllUsers);

// (Optional) Get a single user by ID
router.get('/:id', userController.getUserById);

module.exports = router;