// workerService/taskProcessor.js

const logger = require('../../config/logger');
const jobService = require('../../services/jobService');

class TaskProcessor {
  static async processTask(jobId) {
    try {
      logger.info(`Task processing started for job ID: ${jobId}`);

      // Fetch the job details
      const job = await jobService.getJobById(jobId);
      if (!job) {
        logger.error(`Job not found: ${jobId}`);
        throw new Error(`Job not found: ${jobId}`);
      }

      // Execute job logic
      await jobService.executeJob(job);

      // Update job status to completed
      await jobService.updateJobStatus(jobId, 'Completed');
      logger.info(`Job ${jobId} completed successfully.`);

    } catch (error) {
      logger.error(`Error processing task ${jobId}: ${error.message}`);
      await jobService.updateJobStatus(jobId, 'Failed');
    }
  }
}

module.exports = TaskProcessor;
