const http = require('http');
require('dotenv').config();

const { connectDB } = require('./utils/db');
const logger = require('./utils/logger');
const app = require('./app');

async function init() {
    try {
        await connectDB();

        const port = process.env.PORT || 5000;

        const server = http.createServer(app);

        server.listen(port, () => {
            logger.info(`App running at port ${port}`);
        });
    } catch (error) {
        logger.error('Server can not start, Error: ', error);
    }
}

init();