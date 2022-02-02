const { Router } = require('express');
const { listUsersController, createUserController, getUserController, userPaymentController } = require('../modules/users/controllers');

const router = Router();

router.get('/', listUsersController);
router.post('/', createUserController);
router.get('/:id', getUserController);
router.post('/payment', userPaymentController);

module.exports = router;