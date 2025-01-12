// monitoringService/index.js

const express = require('express');
const logger = require('./logger');

const router = express.Router();

router.get('/status', (req, res) => {
  try {
    const status = logger.getSystemStatus();
    res.status(200).json({ status });
  } catch (error) {
    res.status(500).json({ message: `Error fetching system status: ${error.message}` });
  }
});

module.exports = router;
