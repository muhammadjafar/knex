const bcrypt = require('bcryptjs');
const userRepository = require('../repository/user');
class AuthService {
    register(input) {
        const { name, email, password } = input;
        const hash = bcrypt.hashSync(password, 12);
        return userRepository.createUser(name, email, hash);
    }
}

module.exports = new AuthService();