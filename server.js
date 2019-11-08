// set up server
//
const express = require('express');
const helmet = require('helmet');

// Resources
const ProjectRouter = require('./projects/project-router.js');
const ResourceRouter = require('./resources/resource-router.js');
const TaskRouter = require('./tasks/task-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);

server.get('/', (req, res) => {
  res.send('<h1>Projects - an API to manage to manage your projects and todos</h1>');
})

module.exports = server;
