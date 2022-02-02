const { colorConsole } = require('tracer');

const logger = colorConsole({level: process.env.LOG_LEVEL});

module.exports = logger;