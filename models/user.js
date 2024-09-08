const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
    sparse: true,
  },
  password: {
    type: String,
    required: true,
  },
});


// 

const User = mongoose.model('User', userSchema);

module.exports = User;
