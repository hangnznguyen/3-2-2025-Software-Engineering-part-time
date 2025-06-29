const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countriesController');  

router.get('/import', countryController.importCountries);

router.get('/', countryController.getAllCountries);
router.get('/:id', countryController.getCountryById);
router.post('/', countryController.createCountry);
router.put('/:id', countryController.updateCountry);
router.delete('/:id', countryController.deleteCountry);

module.exports = router;