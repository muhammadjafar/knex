const authService = require('../service/auth');
const userRepository = require('../repository/user');
const bcrypt = require('bcryptjs');
const generateToken = require('../helper/generate_token');

class AuthController {
    async register(req, res) {
        try {
            const user = await authService.register(req.body);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json('something went wrong');
        }
    }

    login(req, res) {
        const { email, password } = req.body;
        try {
            userRepository.findByEmail(email).then(user => {
                if (bcrypt.compareSync(password, user.password)) {
                    const token = generateToken(user);
                    res.status(200).json({ message: `Welcome ${user.name}`, token });
                } else {
                    res.status(400).json({ message: 'user not found' });
                }
            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
        } catch (error) {
            res.status(500).json('something went wrong');
        }
    }
}

module.exports = new AuthController();