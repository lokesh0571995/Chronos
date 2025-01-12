const http = require('http');
const logger = require('./config/logger');

module.exports.start = (app, db) => {
  const port = process.env.PORT || 3000;
  const server = http.createServer(app);

  server.listen(port, () => {
    logger.info(`Server started on port ${port}`);
  });

  db.connect();
};