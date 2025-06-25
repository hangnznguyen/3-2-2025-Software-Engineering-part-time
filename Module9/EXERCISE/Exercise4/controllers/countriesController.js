const axios = require('axios');

// In-memory storage (not permanent)
let cachedCountries = [];

// Load countries from API if not loaded
const loadCountries = async () => {
  if (cachedCountries.length === 0) {
    const response = await axios.get('https://api.sampleapis.com/countries/countries');
    cachedCountries = response.data;
  }
};

// GET /api/countries
const getAllCountries = async (req, res) => {
  try {
    await loadCountries();
    res.status(200).json(cachedCountries);
  } catch (error) {
    res.status(500).json({ message: 'Error loading countries', error: error.message });
  }
};

// GET /api/countries/name/:name
const getCountryByName = async (req, res) => {
  try {
    await loadCountries();
    const { name } = req.params;
    const country = cachedCountries.find(
      c => c.name?.toLowerCase() === name.toLowerCase()
    );

    if (!country) {
      return res.status(404).json({ message: 'Country not found' });
    }

    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ message: 'Error getting country', error: error.message });
  }
};

// PUT /api/countries/:name
const updateCountry = async (req, res) => {
  try {
    await loadCountries();
    const { name } = req.params;
    const { capital, population, area } = req.body;

    const country = cachedCountries.find(
      c => c.name?.toLowerCase() === name.toLowerCase()
    );

    if (!country) {
      return res.status(404).json({ message: 'Country not found' });
    }

    // Update fields if provided
    if (capital) country.capital = capital;
    if (population) country.population = population;
    if (area) country.area = area;

    res.status(200).json({ message: 'Country updated', country });
  } catch (error) {
    res.status(500).json({ message: 'Error updating country', error: error.message });
  }
};

module.exports = {
  getAllCountries,
  getCountryByName,
  updateCountry
};