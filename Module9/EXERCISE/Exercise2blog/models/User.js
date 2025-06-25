const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,  // no duplicate usernames
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,  // no duplicate emails
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true  // adds createdAt and updatedAt fields automatically
});

module.exports = mongoose.model('User', userSchema);