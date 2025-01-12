const { validationResult, checkSchema } = require("express-validator");

/**
 * Middleware to validate request schema
 * @param {Object} schema - Schema to validate the request body, params, or query
 * @returns {Function} Middleware function
 */
const validateRequest = (schema) => {
  return async (req, res, next) => {
    await Promise.all(
      Object.keys(schema).map((key) =>
        checkSchema(schema[key], [key]).run(req)
      )
    );

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation failed.",
        errors: errors.array(),
      });
    }

    next();
  };
};

module.exports = validateRequest;
