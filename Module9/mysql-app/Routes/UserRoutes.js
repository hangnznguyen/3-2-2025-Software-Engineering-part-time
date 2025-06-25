const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");

router.get("/", userController.getUsers);         // GET all users
router.post("/create", userController.createUser); // POST new user

module.exports = router;