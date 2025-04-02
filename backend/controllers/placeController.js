const Place = require('../models/Place');

// ✅ Ensure all functions exist
exports.getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: "Error fetching places", error: error.message });
  }
};

exports.getPlaceById = async (req, res) => { // ✅ Ensure this function exists!
  try {
    const place = await Place.findById(req.params.id);
    if (!place) return res.status(404).json({ message: "Place not found" });

    res.json(place);
  } catch (error) {
    res.status(500).json({ message: "Error fetching place", error: error.message });
  }
};

exports.addPlace = async (req, res) => {
  try {
    const { name, category, location } = req.body;

    if (!name || !category || !location?.coordinates) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const place = new Place({ name, category, location });
    await place.save();
    res.json({ message: "Place added", place });
  } catch (error) {
    res.status(500).json({ message: "Error adding place", error: error.message });
  }
};
