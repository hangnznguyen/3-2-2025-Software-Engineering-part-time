const express = require('express');
const app = express();
const countriesRoutes = require('./routes/countriesRoutes');

app.use(express.json());
app.use('/api/countries', countriesRoutes);

app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});