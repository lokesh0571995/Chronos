const express = require("express");
const jobController = require("../controllers/jobController");
const validateRequest = require("../../middlewares/validateRequest");

const router = express.Router();

// Validation schemas
const createJobSchema = {
  body: {
    jobName: {
      in: ["body"],
      isString: true,
      notEmpty: {
        errorMessage: "Job name is required and must be a string.",
      },
    },
    schedule: {
      in: ["body"],
      isString: true,
      matches: {
        options: [/^(\*|\d+|\d+-\d+|\/)+(\s+\*|\d+|\d+-\d+|\/)+{4}$/],
        errorMessage: "Schedule must be a valid cron expression.",
      },
    },
    data: {
      in: ["body"],
      isObject: true,
      optional: true,
      errorMessage: "Data must be an object if provided.",
    },
  },
};

const getJobStatusSchema = {
  params: {
    id: {
      in: ["params"],
      isMongoId: true,
      errorMessage: "Job ID must be a valid MongoDB ObjectID.",
    },
  },
};

const cancelJobSchema = {
  params: {
    id: {
      in: ["params"],
      isMongoId: true,
      errorMessage: "Job ID must be a valid MongoDB ObjectID.",
    },
  },
};

const getJobLogsSchema = {
  params: {
    id: {
      in: ["params"],
      isMongoId: true,
      errorMessage: "Job ID must be a valid MongoDB ObjectID.",
    },
  },
};

// Routes with validation middleware
router.post("/", validateRequest(createJobSchema), jobController.createJob);

router.get(
  "/:id",
  validateRequest(getJobStatusSchema),
  jobController.getJobStatus
);

router.delete(
  "/:id",
  validateRequest(cancelJobSchema),
  jobController.cancelJob
);

router.get(
  "/:id/logs",
  validateRequest(getJobLogsSchema),
  jobController.getJobLogs
);

module.exports = router;
