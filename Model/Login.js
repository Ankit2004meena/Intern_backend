const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  userId: String,
  ip: String,
  userAgent: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Login', loginSchema);
