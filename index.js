const express = require("express");
const server = express();
require("dotenv").config();

const router = require("./routes/town-router");



// const port = process.env.PORT || 1234;
const port = 1234;

server.use("/api/towns", router);

server.get("/", (req, res) => {
    res.send("<h1>Welll?????</h1>")
})

server.listen(port, () => {
    console.log("Your mom!!!!", port);
})