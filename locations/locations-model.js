const db = require("../data/dbconfig.js");

const get = () => {
    return db("locations")
}

const getById = (id) => {
    return db("locations").where({id}).first();
}

const addLocation = (newPlace) => {
    return db("locations").insert(newPlace);
}

module.exports = {
    get, 
    getById,
    addLocation
}