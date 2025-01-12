# Chronos - Job Scheduler System

## Overview

Chronos is a job scheduler system built with Node.js, Express, and MongoDB. It allows users to submit jobs that can be executed either immediately or at a specific future time. The system also supports recurring jobs and provides comprehensive job management functionality.

## Features

* Job submission
* Recurring jobs
* Job management (view, cancel, reschedule)
* Failure handling with automatic retries
* Logging and monitoring

## API Documentation

### Job API

* `POST /jobs`: Submit a new job
* `GET /jobs`: Get all jobs
* `GET /jobs/:id`: Get a job by ID
* `PUT /jobs/:id`: Update a job
* `DELETE /jobs/:id`: Delete a job

### User API

* `POST /users`: Create a new user
* `GET /users`: Get all users
* `GET /users/:id`: Get a user by ID
* `PUT /users/:id`: Update a user
* `DELETE /users/:id`: Delete a user

### Log API

* `GET /logs`: Get all logs
* `GET /logs/:id`: Get a log by ID

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the server with `npm start`
4. Use the API endpoints to interact with the system

## Testing

1. Run `npm test` to run unit tests and integration tests