const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["one-time", "recurring"], required: true },
  schedule: { type: String, required: true },
  status: { type: String, enum: ["pending", "running", "completed", "failed"], default: "pending" },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", jobSchema);
