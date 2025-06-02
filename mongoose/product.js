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
    enum: ['baru', 'bekas'],
    default: 'baru',
  },
  stock: {
    type: Number,
    required: true,
    min: [0, 'Stock cannot be negative'],
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

// methods cocoknya untuk per-object
productSchema.methods.outStock = function () {
  // this dsini ngarahnya 1 dokumenn
  this.stock = 0;
  this.availability.online = false;
  this.availability.offline = false;
  return this.save();
};

// statics cocoknya uuntuk per-collection
productSchema.statics.closeStore = function () {
  // this dsini ngarahnya ke model/collection
  return this.updateMany(
    {},
    {
      stock: 0,
      availability: {
        online: false,
        offline: false,
      },
    }
  );
};

const Product = mongoose.model('Product', productSchema);

const changeStock = async (id) => {
  const foundProduct = await Product.findById(id);
  await foundProduct.outStock();
  console.log('Stock updated');
};

// changeStock('683d0e588670ce40ea040a7a');

Product.closeStore()
  .then(() => {
    console.log('Store closed');
  })
  .catch((error) => {
    console.error(error);
  });

// const tshirt = new Product({
//   name: 'Kemeja Flanel',
//   brand: 'Hollister',
//   price: 750000,
//   color: 'biru muda',
//   size: ['S', 'M', 'L'],
//   description:
//     'Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.',
//   condition: 'baru',
//   stock: 25,
//   availability: {
//     online: true,
//     offline: true,
//   },
// });

// tshirt
//   .save()
//   .then((result) => {
//     console.log('Data saved successfully');
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error('Error saving data:', error);
//   });

// Product.findOneAndUpdate(
//   { name: 'Kemeja Flanel' },
//   {
//     price: -123456789,
//     stock: -25,
//   },
//   {
//     new: true,
//     runValidators: true, // wajib klo ada validasi
//   }
// )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     // Ambil error message ringkas
//     if (error.name === 'ValidationError') {
//       for (let field in error.errors) {
//         console.log(`${field}: ${error.errors[field].message}`);
//       }
//     } else {
//       console.log(error.message);
//     }
//   });
