// utils/jwtUtils.js

const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your_secret_key';

class JWTUtils {
  static generateToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  }

  static verifyToken(token) {
    try {
      return jwt.verify(token, SECRET_KEY);
    } catch (error) {
      throw new Error(`Invalid or expired token: ${error.message}`);
    }
  }
}

module.exports = JWTUtils;
