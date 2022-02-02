const { listUsers, createUser, getUser, userPayemnt } = require('./services');
const { sendSuccess, sendError } = require('../../utils/responses');

const listUsersController = async (req, res) => {
    try {
        const val = await listUsers(req.body);

        sendSuccess(res, val);
    } catch (error) {
        return sendError(res, 500, `${error}`);
    }
};

const createUserController = async (req, res) => {
    try {
        if(!req.body.name) {
            return sendError(res, 400, "field name is required");
        } else if(!req.body.email) {
            return sendError(res, 400, "field email is required");
        }

        const val = await createUser(req.body);

        sendSuccess(res, val, 201);
    } catch (error) {
        return sendError(res, 500, `${error}`);
    }
};

const getUserController = async (req, res) => {
    try {
        const val = await getUser(req.params.id);

        sendSuccess(res, val);
    } catch (error) {
        return sendError(res, 500, `${error}`);
    }
};

const userPaymentController = async (req, res) => {
    try {
        if(!req.body.userId) {
            return sendError(res, 400, "userId is required");
        }

        const val = await userPayemnt(req.body.userId);

        sendSuccess(res, val, 200);
    } catch (error) {
        return sendError(res, 500, `${error}`);
    }
}

module.exports = {
    listUsersController,
    createUserController,
    getUserController,
    userPaymentController
}