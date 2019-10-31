const db = require("../data/dbconfig.js");

const findById = (id) => {
    return db("users").where({id}).first()
}

async function addUser(user) {
    const [id] = await db("users").insert(user, "id")
    return findById(id)
}


module.exports = {
    addUser
}