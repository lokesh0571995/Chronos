// unit/jobService.test.js

const { describe, it, expect } = require('@jest/globals');
const jobService = require('../../src/services/jobService');

describe('Job Service', () => {
  describe('createJob', () => {
    it('should create a new job successfully', async () => {
      const jobData = {
        name: 'Test Job',
        type: 'one-time',
        schedule: '0 0 * * *',
        user_id: 1
      };
      
      const result = await jobService.createJob(jobData);
      expect(result).toHaveProperty('id');
      expect(result.name).toBe('Test Job');
    });

    it('should throw an error for invalid job data', async () => {
      const invalidJobData = {
        name: '',
        type: '',
        schedule: '',
        user_id: null
      };

      await expect(jobService.createJob(invalidJobData)).rejects.toThrow();
    });
  });

  describe('getJobStatus', () => {
    it('should retrieve job status successfully', async () => {
      const jobId = 1;
      const status = await jobService.getJobStatus(jobId);
      expect(status).toHaveProperty('status');
    });

    it('should throw an error for non-existent job ID', async () => {
      const invalidJobId = 9999;
      await expect(jobService.getJobStatus(invalidJobId)).rejects.toThrow();
    });
  });

  // Add more tests as necessary
});
