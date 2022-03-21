const { body } = require("express-validator");
const personRepository = require('../../repository/person');

module.exports = [
    body('email').isEmail().withMessage('must be email format').custom(value => {
        return personRepository.findByEmail(value).then(person => {
            if (person) {
                return Promise.reject('E-mail already in use');
            }
        });
    }),
    body('firstName').isString(),
    body('lastName').isString(),
];