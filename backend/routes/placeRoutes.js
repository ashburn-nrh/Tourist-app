const express = require('express');
const { getPlaces, addPlace, getPlaceById } = require('../controllers/placeController');

const router = express.Router();

router.get('/', getPlaces);
router.get('/:id', getPlaceById); // ✅ Added missing route
router.post('/add', addPlace);

module.exports = router;
