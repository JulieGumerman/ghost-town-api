const db = require("../data/dbconfig")

const addLocationCategory = (newCat) => {
    return db("location-categories").insert(newCat, "id")
}

const getCategories = () => {
    return db("location-categories");
}
module.exports = {
    addLocationCategory,
    getCategories
}