const mongoose = require('mongoose')
const connection = require('../config/connection')
const { Wine, Event, Menu } = require('../models')

const wines = [
    {
        color: "Red",
        name: "Sangiovese",
        desc: "A red wine.",
        price: 49.99
    }
]

const events = [
    {
        title: "Test!",
        briefDesc: "Testing the API!",
        fullDesc: "Testing the API to the max!",
        Date: 2022
    }
]

const menuItems = [
    {
        type: "Appetizer",
        name: "Bread and Oil",
        desc: "Simply bread and oil.",
        price: 10.99
    }
]

connection.once('open', async () => {
    console.log('connection established, beginning seeding...')
    await Wine.deleteMany()
    await Event.deleteMany()
    await Menu.deleteMany()
    console.log('all database deleted')

    await Wine.insertMany(wines)

    console.log('wines inserted')

    await Event.insertMany(events)

    console.log('events inserted')

    await Menu.insertMany(menuItems)

    console.log('menu inserted')

    console.log('done.')
})