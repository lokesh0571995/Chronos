const Job = require("../models/jobModel");
const Log = require("../models/logModel");

exports.createJob = async (jobData) => {
  return await Job.create(jobData);
};

exports.getJobById = async (jobId) => {
  return await Job.findById(jobId);
};

exports.cancelJob = async (jobId) => {
  return await Job.findByIdAndUpdate(jobId, { status: "canceled" }, { new: true });
};

exports.getLogsByJobId = async (jobId) => {
  return await Log.find({ job_id: jobId });
};
