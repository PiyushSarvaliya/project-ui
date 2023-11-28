const mongoose = require("mongoose")

const productschema = new mongoose.Schema({
    title : String,
    desc : String,
    duedate : String,
    response : String
})

const product = mongoose.model("product" , productschema)

module.exports = product