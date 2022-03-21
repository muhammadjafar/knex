const { body } = require("express-validator");

module.exports = [
    body('email').isEmail().withMessage('must be email format'),
    body('password').isString().isLength({ min: 5 }).withMessage('must be at least 5 chars long')
];