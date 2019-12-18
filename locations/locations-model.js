const db = require("../data/dbconfig.js");

const get = () => {
    return db("locations")
}

const getSolo = (id) => {
    return db('locations as l')
    .where('l.id', id)
}

module.exports = {
    get,
    getSolo
}