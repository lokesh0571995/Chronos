// utils/cronParser.js

const cronParser = require('node-cron');

class CronParser {
  static parseCronExpression(cronExpression) {
    try {
      const schedule = cronParser.schedule(cronExpression);
      return schedule;
    } catch (error) {
      throw new Error(`Invalid cron expression: ${cronExpression}`);
    }
  }

  static isValidCronExpression(cronExpression) {
    try {
      cronParser.validate(cronExpression);
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = CronParser;
