const express = require("express");
const userRoutes = require("./routes/userRoutes"); // Import user routes
const dbConnect = require("./dbConnect"); // Import DB connection function
require("dotenv").config();

const app = express();

// Connect to MongoDB
dbConnect();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use user routes, mounted at /api/users
app.use("/api/users", userRoutes);

// Test route at root
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});