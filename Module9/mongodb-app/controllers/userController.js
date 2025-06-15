"use strict";

const Models = require("../models"); // index.js

// GET /users - get all users
const getUsers = (req, res) => {
  Models.User.find({})
    .then(data => res.status(200).send({ result: 200, data }))
    .catch(err => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

// POST /users/create - create a new user
const createUser = (req, res) => {
  const userData = req.body;
  console.log("Creating user:", userData);

  new Models.User(userData).save()
    .then(data => res.status(201).send({ result: 201, data }))
    .catch(err => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

// PUT /users/:id - update a user by ID
const updateUser = (req, res) => {
  // Updates the user matching the ID from the param using JSON data POSTed in request body
  console.log("Updating user:", req.body);

  Models.User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => res.status(200).send({ result: 200, data }))
    .catch(err => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

// DELETE /users/:id - delete a user by ID
const deleteUser = (req, res) => {
  Models.User.findByIdAndDelete(req.params.id)
    .then(data => res.status(200).send({ result: 200, data }))
    .catch(err => {
      console.error(err);
      res.status(500).send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};