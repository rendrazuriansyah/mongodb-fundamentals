const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/relationship_db')
  .then((result) => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  name: String,
  addresses: [
    {
      _id: false,
      street: String,
      city: String,
      country: String,
    },
  ],
});

const User = mongoose.model('User', userSchema);

// ONE TO FEW
// const makeUser = async () => {
//   const user = new User({
//     name: 'Rendra',
//   });

//   // embed doc (inline)
//   user.addresses.push({
//     street: '123 Main St',
//     city: 'Anytown',
//     country: 'ID',
//   });

//   const res = await user.save();

//   console.log(res);
// };
// makeUser();

// insert data ke property yg punya one to few
// const addAddress = async (id) => {
//   const user = await User.findById(id);

//   user.addresses.push({
//     street: '999 Last St',
//     city: 'Sometown',
//     country: 'WKND',
//   });

//   const res = await user.save();

//   console.log(res);
// };
// addAddress('68404286bbccf0da35558d73');
