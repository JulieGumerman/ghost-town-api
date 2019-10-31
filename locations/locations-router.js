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

locRoute.get("/locations/:id", (req, res) => {
    Locations.getById(req.params.id)
        .then(location => {
            res.status(200).json(location)
        })
        .catch(err => {
            res.status(500).json({ message: "getById didn't work"})
        })
})

module.exports = locRoute;