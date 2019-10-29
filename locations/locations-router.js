const express = require("express");
const locRoute = express.Router();


locRoute.get("/", (req, res) => {
    res.send("sanity check!")
})

module.exports = locRoute;