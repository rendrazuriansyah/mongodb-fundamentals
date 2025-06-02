const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/movie_db')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  color: {
    type: String,
    required: true,
  },
  size: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 150,
  },
  condition: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  availability: {
    online: {
      type: Boolean,
      required: true,
    },
    offline: {
      type: Boolean,
      required: true,
    },
  },
});

const Product = mongoose.model('Product', productSchema);

const tshirt = new Product({
  name: 'T-Shirt cba',
  price: 123456789,
  rating: 4.5,
});

tshirt
  .save()
  .then((result) => {
    console.log('Data saved successfully');
    console.log(result);
  })
  .catch((error) => {
    console.error('Error saving data:', error);
  });
