const express = require('express');
const { getPlaces, addPlace,  } = require('../controllers/placeController');

const router = express.Router();

router.get('/', getPlaces);
router.post('/add', addPlace);

module.exports = router;
