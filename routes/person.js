const { Router } = require('express');
const personController = require('../controller/person');
const restricted = require('../helper/restricted_middleware');
const validateRequest = require('../helper/validate_request');
const personDto = require('../dto/validator/person_dto');

const personRouter = Router();
personRouter.get('/', restricted, personController.getPerson);
personRouter.post('/', personDto, validateRequest, restricted, personController.createPerson);

module.exports = personRouter;