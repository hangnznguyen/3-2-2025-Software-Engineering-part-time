const express = require("express");
const router = express.Router();
const Controllers = require("../controllers"); // index.js

// GET /users - Return all users
router.get("/", (req, res) => {
  Controllers.userController.getUsers(req, res);
});

// POST /users/create - Create a new user
router.post("/create", (req, res) => {
  Controllers.userController.createUser(req, res);
});

// PUT /users/update/:id - Update user by ID
router.put("/:id", (req, res) => {
  Controllers.userController.updateUser(req, res);
});

// DELETE /users/delete/:id - Delete user by ID
router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUser(req, res);
});

module.exports = router;