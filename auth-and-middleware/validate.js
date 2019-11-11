const jwt = require("jsonwebtoken");
const secrets = require("./secrets.js");

const validate = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ message: "You have a token, but something went wrong."})
            } else {
                req.user = {
                    username: decodedToken.username,
                    id: decodedToken.id
                }
                next();
            }
        })
    } else {
        res.status(400).json({ message: "Sorry bro. No token"})
    }
}

module.exports = validate;