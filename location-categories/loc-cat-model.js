const db = require("../data/dbconfig")

const addLocationCategory = (newCat) => {
    return db("location-categories").insert(newCat, "id")
}

const getCategories = (id) => {
    return db("location-categories").where("location_id", id);
}
module.exports = {
    addLocationCategory,
    getCategories
}