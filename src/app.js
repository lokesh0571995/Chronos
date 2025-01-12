const express = require('express');
const app = express();
const server = require('./server');
const db = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./api/routes'));

server.start(app, db);