const express = require("express");
const userRoute = express.Router();

const bcrypt = require("bcryptjs");

const Users = require("./user-model.js");
const generateToken = require("../auth-and-middleware/generateToken")



/***sanity check***/
userRoute.get("/", (req, res) => {
    res.send("I am the users api. Yay.")
})

/***register and login */
userRoute.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password);
    user.password = hash;

    Users.addUser(user)
        .then(saved => res.status(200).json(saved))
        .catch(err => res.status(500).json(err.message))

})

userRoute.post("/login", (req, res) => {
    let { username, password } = req.body
    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync( password, user.password )) {
                const token = generateToken(user);
                res.status(200).json({
                    message: "login successful...",
                    token, 
                    user
                })
            } else {
                res.status(401).json({ message: "Invalid credentials"})
            }
        })

        .catch(err => res.status(500).json(err.message))
})

module.exports = userRoute;