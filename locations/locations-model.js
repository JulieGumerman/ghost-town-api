const db = require("../data/dbconfig.js");

const get = () => {
    return db("locations")
}

module.exports = {
    get
}