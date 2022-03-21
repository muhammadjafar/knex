const personService = require('../service/person')

class PersonController {
    async createPerson(req, res){
        try {
            const person = await personService.createPerson(req.body);
            res.status(200).json(person);
        } catch (error) {
            res.status(500).json('something went wrong');
        }
    }
    async getPerson(req, res){
        try {
            const person = await personService.getPerson();
            res.status(200).json(person);
        } catch (error) {
            res.status(500).json('something went wrong');
        }
    }
}

module.exports = new PersonController();