const mongoose = require('mongoose');

const PlaceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' }, // Ensure type is always 'Point'
    coordinates: { type: [Number], required: true }, // Longitude and latitude
  },
  rating: { type: Number, default: 0 }, // Optional rating
});

PlaceSchema.index({ location: '2dsphere' }); // Enable geospatial indexing

module.exports = mongoose.model('Place', PlaceSchema);
