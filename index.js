const express = require("express");
const cors = require("cors");
const server = express();

const locRoute = require("./locations/locations-router.js");
const userRoute = require("./users/user-router.js");

server.use(express.json());
server.use(cors());
server.use("/api/locations", locRoute);
server.use("/api", userRoute);

server.listen(8000, () => {
    console.log("Yay!!!")
})

server.get("/", (req, res) => {
    res.send("Ghost towns come to life!")
})