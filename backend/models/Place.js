const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
  name: String,
  category: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number], // [longitude, latitude]
  },
  rating: Number,
});

module.exports = mongoose.model('Place', PlaceSchema);
