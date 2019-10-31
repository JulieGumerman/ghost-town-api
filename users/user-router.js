const express = require("express");
const userRoute = express.Router();

const bcrypt = require("bcryptjs");

const Users = require("./user-model.js");



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


module.exports = userRoute;