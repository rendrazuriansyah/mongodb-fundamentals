const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/movie_db')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const personSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
});

// virtual property
personSchema
  .virtual('full_name')
  .get(function () {
    return `${this.first_name} ${this.last_name}`;
  })
  .set(function (v) {
    const parts = v.split(' ');
    this.first_name = parts[0];
    this.last_name = parts[parts.length - 1];
  });

// mengaktifkan virtual property ke db
// personSchema.set('toJSON', { virtuals: true });
// personSchema.set('toObject', { virtuals: true });

const Person = mongoose.model('Person', personSchema);

// si virtual gabakal di store ke db
// const person = new Person({
//   first_name: 'Rendra',
//   last_name: 'Zuriansyah',
// });

const person = new Person();
person.full_name = 'Rendra Zuriansyah';

console.log(person); // virtual property gabakalan muncul disini
console.log(person.first_name);
console.log(person.last_name);
console.log(person.full_name); // hrs diakses melalui virtual get property
