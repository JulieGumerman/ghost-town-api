const db = require("../data/dbconfig.js");

/*******location info get and post requests******/
const get = () => {
    return db("locations")
}

const getById = (id) => {
    return db("locations").where({id}).first();
}

const addLocation = (newPlace) => {
    return db("locations").insert(newPlace, "id");
}


module.exports = {
    get, 
    getById,
    addLocation,
}