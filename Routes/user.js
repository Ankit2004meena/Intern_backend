const express = require('express');
const router = express.Router();
const LoginHistory = require('../models/LoginHistory');

router.get('/login-history', async (req, res) => {
  const { userId } = req.query;
  const history = await LoginHistory.find({ userId });
  res.json(history);
});

module.exports = router;
