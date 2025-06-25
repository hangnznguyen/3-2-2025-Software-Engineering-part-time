require("dotenv").config();
const { Sequelize } = require("sequelize");


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,  // ✅ Using the password from .env
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || "mysql",
  }
);

module.exports = sequelize;