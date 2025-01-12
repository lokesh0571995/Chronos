// integration/jobAPI.test.js

const request = require('supertest');
const app = require('../../src/app');

describe('Job API', () => {
  describe('POST /jobs', () => {
    it('should create a new job successfully', async () => {
      const jobData = {
        name: 'Test Job API',
        type: 'one-time',
        schedule: '0 0 * * *',
        user_id: 1
      };

      const response = await request(app).post('/jobs').send(jobData);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('job_id');
    });

    it('should return error for invalid job data', async () => {
      const invalidJobData = {
        name: '',
        type: '',
        schedule: '',
        user_id: null
      };

      const response = await request(app).post('/jobs').send(invalidJobData);
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  // Add more tests for other endpoints
});
