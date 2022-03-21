const { Router } = require('express');
const authController = require('../controller/auth');
const validateRequest = require('../helper/validate_request');
const loginDto = require('../dto/validator/login_dto');
const registerDto = require('../dto/validator/register_dto');

const userRouter = Router();
userRouter.post('/login', loginDto, validateRequest, authController.login);
userRouter.post('/register', registerDto, validateRequest, authController.register);

module.exports = userRouter;