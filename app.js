const express = require('express');

const usersRoute = require('./routes/users');
const logger = require('morgan');

const app = express();

app.use(express.json());
app.use(logger('dev'));

// API routes
app.use('/api/users', usersRoute);

module.exports = app;