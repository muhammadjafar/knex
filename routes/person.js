const { Router } = require('express');
const personController = require('../controller/person');
const restricted = require('../helper/restricted_middleware');
const validateRequest = require('../helper/validate_request');
const personDto = require('../dto/validator/person_dto');
const personValidation = require('../dto/validator/person_joi');
const bodyParser = require('body-parser')
const { Joi, validate, ValidationError } = require('express-validation')

const personRouter = Router();
personRouter.use(bodyParser.json());
personRouter.get('/', restricted, personController.getPerson);
personRouter.post('/', validate(personValidation, {}, {}), restricted, personController.createPerson);

personRouter.use(function (err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }

    return res.status(500).json(err)
})

module.exports = personRouter;