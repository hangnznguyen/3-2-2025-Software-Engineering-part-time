"use strict";
const Models = require("../models");

// GET: Return all users
const getUsers = (req, res) => {
  Models.User.findAll({})
    .then(data => {
      res.send({ result: 200, data: data });
    })
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// POST: Create a new user
const createUser = (req, res) => {
  Models.User.create(req.body)
    .then(data => {
      res.send({ result: 200, data: data });
    })
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUsers,
  createUser,
};