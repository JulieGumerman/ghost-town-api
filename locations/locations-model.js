const db = require("../data/dbconfig.js");

const get = () => {
    return db("locations")
}

const getById = (id) => {
    return db("locations").where({id});
}

module.exports = {
    get, 
    getById
}