// src/loadBalancer/loadBalancer.js

const http = require('http');
const cluster = require('cluster');
const os = require('os');
const numCPUs = os.cpus().length;

// Check if the current process is the master process
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Listen for dying workers
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();  // Start a new worker
  });
} else {
  // Workers can share the HTTP server
  require('../server');  // Import the server from server.js
}
