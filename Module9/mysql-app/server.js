const express = require("express");
require("dotenv").config();
const db = require('./dbConnect'); // Sequelize connection
const userRoutes = require('./Routes/UserRoutes');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

// Test DB connection
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch(err => console.error("Connection error:", err));

// Sync Sequelize models (optional: force: true drops tables and recreates)
db.sync()
  .then(() => console.log("Models synced."))
  .catch(err => console.error("Sync error:", err));

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});