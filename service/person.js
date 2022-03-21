const personRepository = require('../repository/person')
class PersonService {
    createPerson(personDto){
        const { firstName, lastName, email } = personDto;
        return personRepository.createPerson(firstName, lastName, email);
    }
    getPerson(){
        return personRepository.getPerson();
    }
}

module.exports = new PersonService();