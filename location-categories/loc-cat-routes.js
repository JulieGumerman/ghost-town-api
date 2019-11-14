const express = require("express");
const locCatRoute = express.Router();

const LocationCategories = require("./loc-cat-model");

/*** sanity check ***/

locCatRoute.get("/", (req, res) => {
    res.send("Tralalala")
})

/***add, delete, and get location categories***/

locCatRoute.post("/", (req, res) => {
    LocationCategories.addLocationCategory(req.body)
        .then(category => res.status(200).json(category))
        .error(err => res.status(500).json(err))
})

module.exports = locCatRoute;