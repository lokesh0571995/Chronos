// jobProcessor.js

const logger = require('../config/logger');
const jobService = require('../services/jobService');

class JobProcessor {
  static async processJob(jobId) {
    try {
      logger.info(`Processing job with ID: ${jobId}`);
      
      // Fetch job details
      const job = await jobService.getJobById(jobId);
      if (!job) {
        logger.error(`Job not found: ${jobId}`);
        throw new Error(`Job not found: ${jobId}`);
      }

      // Simulating job processing
      await jobService.updateJobStatus(jobId, 'In Progress');
      logger.info(`Job ${jobId} status updated to In Progress.`);

      // Perform the actual job processing
      await jobService.executeJob(job);

      // Update job status to completed
      await jobService.updateJobStatus(jobId, 'Completed');
      logger.info(`Job ${jobId} completed successfully.`);

    } catch (error) {
      logger.error(`Error processing job ${jobId}: ${error.message}`);
      await jobService.updateJobStatus(jobId, 'Failed');
    }
  }
}

module.exports = JobProcessor;
