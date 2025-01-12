const LogService = require("../../services/logService");

// Create a log entry
exports.createLog = async (req, res) => {
  try {
    const { action, details } = req.body;

    const log = await LogService.createLog({
      userId: req.user.id,
      action,
      details,
    });

    res.status(201).json({ message: "Log created successfully.", log });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get logs for the authenticated user
exports.getLogs = async (req, res) => {
  try {
    const logs = await LogService.getUserLogs(req.user.id);

    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a log by ID
exports.deleteLog = async (req, res) => {
  try {
    const { logId } = req.params;

    const log = await LogService.deleteLogById(logId);
    if (!log) {
      return res.status(404).json({ error: "Log not found." });
    }

    res.status(200).json({ message: "Log deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
