const express = require("express");
const router = express.Router();
const towns = require("../data/index.js");

router.get("/", (req, res) => {
    res.json(towns);
})

module.exports = router;