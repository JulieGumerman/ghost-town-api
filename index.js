require("dotenv").config();

const express = require("express");
const cors = require("cors");
const server = express();

const locRoute = require("./locations/locations-router.js");
const userRoute = require("./users/user-router.js");
const locCatRoute = require("./location-categories/loc-cat-routes");

server.use(express.json());
server.use(cors());
server.use("/api", userRoute);
server.use("/api/locations", locRoute);
server.use("/api/category", locCatRoute);


const port = process.env.PORT;
server.listen(port, () => {
    console.log("Yay!!!")
})

server.get("/", (req, res) => {
    res.send("Ghost towns come to life!")
})