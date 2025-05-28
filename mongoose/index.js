const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/movie_db')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// membuat schema
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  director: String,
});

// membuat model
const Movie = mongoose.model('Movie', movieSchema);

// menggunakan model untuk membuat stage data
const movie = new Movie({
  title: 'Parasite',
  year: 2019,
  score: 9.5,
  director: 'Bong Joon Ho',
});
// menampilkan stage data di console
console.log(movie);

// menyimpan data ke database
movie.save();
