const { Schema, model, Types } = require('mongoose')

const wineSchema = new Schema({
    color: String,
    name: String,
    desc: String,
    price: Number
})

const Wine = model('wine', wineSchema)

module.exports = Wine