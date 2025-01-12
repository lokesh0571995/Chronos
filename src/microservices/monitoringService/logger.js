// monitoringService/logger.js

class Logger {
    static systemStatus = {
      status: 'healthy',
      uptime: process.uptime(),
      lastChecked: new Date(),
    };
  
    static logMessage(message) {
      console.log(`[${new Date().toISOString()}] ${message}`);
    }
  
    static getSystemStatus() {
      return this.systemStatus;
    }
  
    static updateSystemStatus(status) {
      this.systemStatus.status = status;
      this.systemStatus.uptime = process.uptime();
      this.systemStatus.lastChecked = new Date();
      this.logMessage(`System status updated to: ${status}`);
    }
  }
  
  module.exports = Logger;
  