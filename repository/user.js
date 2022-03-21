const db = require('../db/db');

class UserRepository {
    async createUser(name, email, password) {
        const user = await db('users').insert({
            email,
            name,
            password: password,
        })
            .returning('*');

        return user;
    }

    async findByEmail(email) {
        const user = await db('users').where({ email }).first();

        return user;
    }
}

module.exports = new UserRepository();