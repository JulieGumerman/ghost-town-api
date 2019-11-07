require("dotenv").config();

const express = require("express");
const cors = require("cors");
const server = express();

const locRoute = require("./locations/locations-router.js");
const userRoute = require("./users/user-router.js");

server.use(express.json());
server.use(cors());
server.use("/api/locations", locRoute);
server.use("/api", userRoute);

const port = process.env.PORT;
server.listen(port, () => {
    console.log("Yay!!!")
})

server.get("/", (req, res) => {
    res.send("Ghost towns come to life!")
})