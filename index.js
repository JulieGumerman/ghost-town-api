const express = require("express");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(cors());

server.listen(8000, () => {
    console.log("Yay!!!")
})

server.get("/", (req, res) => {
    res.send("Ghost towns come to life!")
})