const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/relationship_db')
  .then((result) => {
    console.log('connected to mongodb');
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    name: ['spring', 'summer', 'fall', 'winter'],
  },
});

// one to many
const farmSchema = new mongoose.Schema({
  name: String,
  city: String,
  // products: [productSchema],
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//   {
//     name: 'apple',
//     price: 5000,
//     season: 'fall',
//   },
//   {
//     name: 'banana',
//     price: 10000,
//     season: 'summer',
//   },
//   {
//     name: 'orange',
//     price: 15000,
//     season: 'winter',
//   },
//   {
//     name: 'pineapple',
//     price: 20000,
//     season: 'spring',
//   },
//   {
//     name: 'grape',
//     price: 25000,
//     season: 'summer',
//   },
// ])
//   .then((result) => {
//     console.log('Products inserted:', result);
//   })
//   .catch((error) => {
//     console.error('Error inserting products:', error);
//   });

// one to one
// const makeFarm = async () => {
//   const farm = new Farm({
//     name: 'Rendra Farm',
//     city: 'Anytown',
//   });

//   const grape = await Product.findOne({
//     name: 'grape',
//   });

//   farm.products.push(grape);

//   const res = await farm.save();

//   console.log(res);
// };
// makeFarm();

// one to many (krn sebelumya uda ditambahkan product)
// const addProduct = async () => {
//   const farm = await Farm.findOne({
//     name: 'Rendra Farm',
//   });

//   const apple = await Product.findOne({
//     name: 'apple',
//   });

//   farm.products.push(apple);

//   const res = await farm.save();

//   console.log(res);
// };
// addProduct();

// cara nampilin data turunan dari relasi one to many pke populate()
// parameter pertama=> field relasi
// parameter kedua=> field mana aja yg ditampil
// bisa eksplisit pke object params
// bisa exclude field dengan '-field'
// pke array untuk ngebungkus si objek klo mau populate lebih dri satu
// *bisa nested populate
Farm.findOne({
  name: 'Rendra Farm',
})
  .populate({ path: 'products', select: 'name' })
  .then((result) => {
    console.log(result);
    // for (const product of result.products) {
    //   console.log(product);
    // }
  });
