'use strict';
const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
  const uri = process.env.DB_URI || "mongodb://localhost/myFirstDatabase";
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });
};

module.exports = dbConnect;