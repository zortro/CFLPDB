const { Schema, model, Types } = require('mongoose')

const menuSchema = new Schema({
    type: String,
    name: String,
    desc: String,
    price: Number
})

const Menu = model('menu', menuSchema)

module.exports = Menu