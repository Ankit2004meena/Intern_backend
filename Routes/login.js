// server/routes/login.js
const express = require('express');
const router = express.Router();
const Login = require('../Model/Login');

// Endpoint to save login information
router.post('/', async (req, res) => {
  try {
    const login = new Login(req.body);
    await login.save();
    res.status(201).send(login);
  } catch (error) {
    res.status(500).send('Error saving login information');
  }
});

// Endpoint to get login history for a user
router.get('/user/:userId/history', async (req, res) => {
  try {
    const { userId } = req.params;
    const logins = await Login.find({ userId }).sort({ timestamp: -1 });
    res.status(200).json(logins);
  } catch (error) {
    res.status(500).send('Error retrieving login history');
  }
});

module.exports = router;
