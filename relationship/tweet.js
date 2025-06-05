const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/relationship_db')
  .then((result) => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

// (si user gabole buat relasi ke tweet)
const userSchema = new mongoose.Schema({
  username: String,
  age: Number,
});

// one to squillion
const tweetSchema = new mongoose.Schema({
  text: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeUser = async () => {
  const user = new User({
    username: 'Rendra',
    age: 20,
  });

  const result = await user.save();

  console.log(result);
};
makeUser();

const makeTweet = async ({ username, text }) => {
  const user = await User.findOne({ username });
  if (!user) return console.log(`User ${username} not found`);

  const tweet = await Tweet.create({
    text,
    likes: 0,
    user: user._id,
  });

  console.log(tweet);
};
makeTweet({ username: 'Rendra', text: 'iniTeksTweetLagi' });

// query 1 tweet + dimiliki oleh user siapa
// find user by tweet
const getUserByTweet = async ({ _id }) => {
  const tweets = await Tweet.findById({ _id }).populate('user');
  if (!tweets) return console.log(`Tweet ${_id} not found`);

  console.log(tweets);
};
getUserByTweet({ _id: '68413c5907d79f510e43bbd8' });

// query nyari semua tweets dri 1 user
// find tweets by user
const getTweetsByUser = async ({ username }) => {
  const user = await User.findOne({ username });
  if (!user) return console.log(`User ${username} not found`);

  const tweets = await Tweet.find({ user: user._id }).populate({
    path: 'user',
    select: 'username',
  });

  console.log(tweets);
};
getTweetsByUser({ username: 'Rendra' });
