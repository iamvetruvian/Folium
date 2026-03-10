const mongoose = require('mongoose');

//Salt and hash are set to optional because users may log in via google.
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  salt: { type: String },
  imgSrc: { type: String, default: "" },
  hash: { type: String },
  recoveryToken: { type: String },
  recoveryExpires: { type: Date },
  googleId: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);