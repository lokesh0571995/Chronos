// scheduler.js

const cron = require('node-cron');
const logger = require('../config/logger');
const jobProcessor = require('./jobProcessor');

class Scheduler {
  static start() {
    logger.info('Scheduler started.');

    // Define cron jobs
    cron.schedule('* * * * *', async () => {
      logger.info('Checking for jobs to process.');

      // Fetch jobs with a "Pending" status
      const pendingJobs = await jobProcessor.getPendingJobs();
      
      for (const job of pendingJobs) {
        jobProcessor.processJob(job.id);
      }
    });

    logger.info('Scheduler running every minute.');
  }
}

module.exports = Scheduler;
