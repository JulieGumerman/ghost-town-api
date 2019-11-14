const db = require("../data/dbconfig")

const addLocationCategory = (newCat) => {
    return db("location-categories").insert(newCat, "id")
}

module.exports = {
    addLocationCategory
}