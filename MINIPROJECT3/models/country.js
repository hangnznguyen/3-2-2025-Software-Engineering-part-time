const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  flag: String,
  emblem: String,
}, { _id: false });

const CountrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  capital: String,
  population: Number,
  currency: String,
  phone: String,
  abbreviation: String,
  media: MediaSchema,
});

module.exports = mongoose.model('Country', CountrySchema);