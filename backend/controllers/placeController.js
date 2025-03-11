const Place = require('../models/Place');

exports.getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (error) {
    console.error("Error fetching places:", error);  // 👀 Log error
    res.status(500).json({ message: "Error fetching places", error: error.message });
  }
};

exports.addPlace = async (req, res) => {
  try {
    const place = new Place(req.body);
    await place.save();
    res.json({ message: "Place added", place });
  } catch (error) {
    console.error("Error adding place:", error);  // 👀 Log error
    res.status(500).json({ message: "Error adding place", error: error.message });
  }
};
