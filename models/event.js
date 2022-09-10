const { Schema, model, Types } = require('mongoose')

const eventSchema = new Schema({
    title: String,
    briefDesc: String,
    fullDesc: String,
    date: {type: Date, default: Date.now}
})

const Event = model('event', eventSchema)

module.exports = Event