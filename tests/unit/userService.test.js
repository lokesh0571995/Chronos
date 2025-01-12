// unit/userService.test.js

const { describe, it, expect } = require('@jest/globals');
const userService = require('../../src/services/userService');

describe('User Service', () => {
  describe('createUser', () => {
    it('should create a new user successfully', async () => {
      const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'securepassword',
        role: 'standard'
      };

      const result = await userService.createUser(userData);
      expect(result).toHaveProperty('id');
      expect(result.name).toBe('John Doe');
    });

    it('should throw an error for invalid user data', async () => {
      const invalidUserData = {
        name: '',
        email: '',
        password: '',
        role: ''
      };

      await expect(userService.createUser(invalidUserData)).rejects.toThrow();
    });
  });

  // Add more tests as necessary
});
