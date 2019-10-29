const express = require("express");
const locRoute = express.Router();
const Locations = require("./locations-model")


locRoute.get("/", (req, res) => {
    res.send("sanity check!")
})

locRoute.get("/locations", (req, res) => {
    Locations.get()
        .then(locations => res.status(200).json(locations))
        .catch(err => res.status(500).json(err))
})

module.exports = locRoute;