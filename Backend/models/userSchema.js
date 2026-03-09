const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  salt: {type: String, required: true},
  imgSrc: {type: String, default: ""},
  hash: { type: String, required: true },
  recoveryToken: {type: String},
  recoveryExpires: {type: Date},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);