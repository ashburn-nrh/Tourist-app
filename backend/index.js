const express = require('express');
const connectDB = require('./config/db');
const placeRoutes = require('./routes/placeRoutes');
require('dotenv').config();

const cors = require("cors");
app.use(cors());


const app = express();
connectDB();

app.use(express.json());
app.use(cors());



app.use('/api/places', placeRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
