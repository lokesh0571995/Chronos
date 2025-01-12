// integration/userAPI.test.js

const request = require('supertest');
const app = require('../../src/app');

describe('User API', () => {
  describe('POST /users', () => {
    it('should create a new user successfully', async () => {
      const userData = {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: 'securepassword',
        role: 'admin'
      };

      const response = await request(app).post('/users').send(userData);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('user_id');
    });

    it('should return error for invalid user data', async () => {
      const invalidUserData = {
        name: '',
        email: '',
        password: '',
        role: ''
      };

      const response = await request(app).post('/users').send(invalidUserData);
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  // Add more tests for other endpoints
});
