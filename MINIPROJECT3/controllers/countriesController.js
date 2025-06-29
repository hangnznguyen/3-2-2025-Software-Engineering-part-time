const Country = require('../models/country');
const axios = require('axios');

//  Import countries from external API and save to MongoDB
exports.importCountries = async (req, res) => {
  try {
    const { data } = await axios.get('https://api.sampleapis.com/countries/countries');

    if (!Array.isArray(data)) {
      return res.status(400).json({ message: 'Invalid data format from external API' });
    }

    await Country.deleteMany(); // Optional: clear old data
    await Country.insertMany(data);

    res.status(200).json({ message: ' Countries imported successfully', count: data.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Get all countries
exports.getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Get a single country by ID
exports.getCountryById = async (req, res) => {
  try {
    const country = await Country.findById(req.params.id);
    if (!country) {
      return res.status(404).json({ message: '❌ Country not found' });
    }
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ➕ Create a new country
exports.createCountry = async (req, res) => {
  try {
    const newCountry = new Country(req.body);
    const saved = await newCountry.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a country by ID
exports.updateCountry = async (req, res) => {
  try {
    const updated = await Country.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: '❌ Country not found' });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  Delete a country by ID
exports.deleteCountry = async (req, res) => {
  try {
    const deleted = await Country.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Country not found' });
    }
    res.status(200).json({ message: ' Country deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};