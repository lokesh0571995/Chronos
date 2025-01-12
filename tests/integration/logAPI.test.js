// integration/logAPI.test.js

const request = require('supertest');
const app = require('../../src/app');

describe('Log API', () => {
  describe('GET /jobs/:id/logs', () => {
    it('should fetch logs for a specific job successfully', async () => {
      const jobId = 1;

      const response = await request(app).get(`/jobs/${jobId}/logs`);
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });

    it('should return error for non-existent job ID', async () => {
      const invalidJobId = 9999;

      const response = await request(app).get(`/jobs/${invalidJobId}/logs`);
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error');
    });
  });

  // Add more tests for other endpoints
});
