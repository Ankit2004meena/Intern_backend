const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  userId: String,
  ip: String,
  userAgent: String,
  timestamp: Date,
});

module.exports = mongoose.model('Login', loginSchema);
