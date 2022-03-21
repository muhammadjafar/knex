const db = require('../db/db');

class PersonRepository {
    async createPerson(firstName, lastName, email) {
        const person = await db('person').insert({
            email,
            first_name: firstName,
            last_name: lastName,
        })
        .returning('*');

        return person;
    }

    async getPerson() {
        const person = await db('person');

        return person;
    }

    async findByEmail(email) {
        const user = await db('person').where({ email }).first();

        return user;
    }
}

module.exports = new PersonRepository();