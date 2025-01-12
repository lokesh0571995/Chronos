// workerService/index.js

const express = require('express');
const taskProcessor = require('./taskProcessor');

const router = express.Router();

router.post('/process', async (req, res) => {
  try {
    const { jobId } = req.body;
    if (!jobId) {
      return res.status(400).json({ message: 'Job ID is required' });
    }

    await taskProcessor.processTask(jobId);
    res.status(200).json({ message: 'Task processed successfully' });
  } catch (error) {
    res.status(500).json({ message: `Error processing task: ${error.message}` });
  }
});

module.exports = router;
