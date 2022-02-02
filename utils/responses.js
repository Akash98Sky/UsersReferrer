const sendSuccess = (res, data, status = 200) => {
    res.status(status).json({
        status,
        success: true,
        response: data
    });
};

const sendError = (res, status = 500, data = null) => {
    res.status(status).json({
        status,
        success: false,
        response: data
    });
};

module.exports = {
    sendSuccess,
    sendError
};