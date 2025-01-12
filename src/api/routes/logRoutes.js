const express = require("express");
const logController = require("../controllers/logController");
const authMiddleware = require("../../middlewares/authMiddleware");
const validateRequest = require("../../middlewares/validateRequest");

const router = express.Router();

const createLogSchema = {
  body: {
    action: {
      in: ["body"],
      isString: true,
      notEmpty: {
        errorMessage: "Action is required and must be a string.",
      },
    },
    details: {
      in: ["body"],
      isString: true,
      optional: true,
      errorMessage: "Details must be a string.",
    },
  },
};

const deleteLogSchema = {
  params: {
    logId: {
      in: ["params"],
      isMongoId: true,
      errorMessage: "Invalid log ID format.",
    },
  },
};

router.post(
  "/",
  authMiddleware,
  validateRequest(createLogSchema),
  logController.createLog
);

router.delete(
  "/:logId",
  authMiddleware,
  validateRequest(deleteLogSchema),
  logController.deleteLog
);

module.exports = router;
