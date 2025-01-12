const Log = require("../models/logModel");

// Create a new log entry
exports.createLog = async (logData) => {
  const log = new Log(logData);
  return await log.save();
};

// Get logs for a specific user
exports.getUserLogs = async (userId) => {
  return await Log.find({ userId }).sort({ timestamp: -1 });
};

// Delete logs by ID
exports.deleteLogById = async (logId) => {
  return await Log.findByIdAndDelete(logId);
};
