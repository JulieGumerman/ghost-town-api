const jwt = require("jsonwebtoken");
const secrets = require("./secrets");

const generateToken = user => {
    const payload = {
        username: user.name,
        id: user.id
    }

    const options = {
        expiresIn: "1d"
    }

    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = generateToken;