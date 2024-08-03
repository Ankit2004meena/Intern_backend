// server/models/Login.js
const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  ip: { type: String, required: true },
  browser: { type: String, required: true },
  os: { type: String, required: true },
  deviceType: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Login', loginSchema);
