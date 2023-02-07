const bodyParser = require('body-parser')
const { Joi } = require('express-validation')

const personValidation = {
    body: Joi.object({
        email: Joi.string()
            .email()
            .required()
            .custom((value, helpers) => {
                return personRepository.findByEmail(value).then(person => {
                    console.log(person);
                    if (person) {
                        // return Promise.reject('E-mail already in use');
                        throw new Error('E-mail already in use');
                    }
                });
            }, 'email validation'),
        firstName: Joi.string()
            .required(),
        lastName: Joi.string()
            .required(),
    }),
}

module.exports = personValidation;