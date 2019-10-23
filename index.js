const express = require('express');
const connectDB = require('./config/db')

const app = express();

// Connect to da database
connectDB();

app.use(express.json({ extended: false }));

const PORT = 5000;

app.listen(PORT, () => console.log(`Uh oh! Here come dat Boi on port ${PORT}`));