const express = require("express");
const locRoute = express.Router();
const Locations = require("./locations-model");
const validate = require("../auth-and-middleware/validate");



locRoute.get("/", validate, (req, res) => {
    Locations.get()
        .then(locations => res.status(200).json(locations))
        .catch(err => res.status(500).json(err))
})

locRoute.get("/:id", validate, (req, res) => {
    Locations.getById(req.params.id)
        .then(location => {
            res.status(200).json(location)
        })
        .catch(err => {
            res.status(500).json({ message: "getById didn't work"})
        })
})

locRoute.post("/", validate, (req, res) => {
    Locations.addLocation(req.body)
        .then(location => res.status(200).json(location))
        .catch(err => res.status(500).json({ message: "town cannot be added at this time"}))
})

module.exports = locRoute;