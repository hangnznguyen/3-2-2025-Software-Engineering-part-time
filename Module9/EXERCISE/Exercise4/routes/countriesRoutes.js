const express = require('express');
const router = express.Router();
const {
  getAllCountries,
  getCountryByName,
  updateCountry
} = require('../controllers/countriesController');

router.get('/', getAllCountries);             // GET /api/countries
router.get('/name/:name', getCountryByName);  // GET /api/countries/name/:name
router.put('/:name', updateCountry);          // PUT /api/countries/:name

module.exports = router;