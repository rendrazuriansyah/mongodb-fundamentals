const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/movie_db')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
