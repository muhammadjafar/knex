const { body } = require("express-validator");
const userRepository = require('../../repository/user');

module.exports = [
    body('email').isEmail().withMessage('must be email format').custom(value => {
        return userRepository.findByEmail(value).then(user => {
            if (user) {
                return Promise.reject('E-mail already in use');
            }
        });
    }),
    body('password').isString().isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    body('password_confirmation').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('password confirmation does not matched with password');
        }
        return true;
    }),
    body('name').isString()
];