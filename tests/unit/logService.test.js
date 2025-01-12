// unit/logService.test.js

const { describe, it, expect } = require('@jest/globals');
const logService = require('../../src/services/logService');

describe('Log Service', () => {
  describe('createLog', () => {
    it('should create a new log successfully', async () => {
      const logData = {
        job_id: 1,
        status: 'completed',
        log_message: 'Job completed successfully'
      };

      const result = await logService.createLog(logData);
      expect(result).toHaveProperty('id');
      expect(result.status).toBe('completed');
    });

    it('should throw an error for invalid log data', async () => {
      const invalidLogData = {
        job_id: null,
        status: '',
        log_message: ''
      };

      await expect(logService.createLog(invalidLogData)).rejects.toThrow();
    });
  });

  // Add more tests as necessary
});
