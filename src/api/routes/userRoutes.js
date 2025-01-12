const express = require("express");
const userController = require("../controllers/userController");
const validateRequest = require("../../middlewares/validateRequest");

const router = express.Router();

const registerSchema = {
  body: {
    username: {
      in: ["body"],
      isString: true,
      notEmpty: {
        errorMessage: "Username is required and must be a string.",
      },
    },
    email: {
      in: ["body"],
      isEmail: true,
      errorMessage: "Valid email is required.",
    },
    password: {
      in: ["body"],
      isLength: {
        options: { min: 8 },
        errorMessage: "Password must be at least 8 characters long.",
      },
    },
  },
};

router.post("/register", validateRequest(registerSchema), userController.register);

module.exports = router;
