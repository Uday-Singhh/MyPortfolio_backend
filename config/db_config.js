const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is loaded

// Debugging line to check the MongoDB URI


mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on('error', () => {
  console.log('Error connecting to the database');
});

connection.on('connected', () => {
  console.log('Connected to the database');
});

module.exports = connection;
