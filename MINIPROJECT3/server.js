require('dotenv').config();
const express = require('express');
const connectDB = require('./dbconnect');
const countriesRoutes = require('./routes/countriesRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/countries', countriesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});