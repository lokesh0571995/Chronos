const JobService = require("../../services/jobService");

exports.createJob = async (req, res) => {
  try {
    const job = await JobService.createJob(req.body);
    res.status(201).json({ message: "Job successfully created.", job_id: job._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJobStatus = async (req, res) => {
  try {
    const job = await JobService.getJobById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found." });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.cancelJob = async (req, res) => {
  try {
    const job = await JobService.cancelJob(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found." });
    }
    res.status(200).json({ message: "Job successfully canceled." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJobLogs = async (req, res) => {
  try {
    const logs = await JobService.getLogsByJobId(req.params.id);
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
