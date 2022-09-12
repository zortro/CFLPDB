const mongoose = require('mongoose')
const connection = require('../config/connection')
const { Wine, Event, Menu } = require('../models')

const wines = [
    {
        color: "White",
        name: "Chardonnay",
        desc: "Rich, full bodied and lightly oaked. Offering many tropical aromas and flavors including apple, fig melon, lemon pear adn quince. Evolves, lingers with a long yet smooth finish.",
        price: 28.99,
        year: 2020
    },
    {
        color: "White",
        name: "Pinot Gris",
        desc: "Intense peach, melon apple honey and almond flavors that sail on and throughout the long, lingering finish.",
        price: 26.99,
        year: 2021
    },
    {
        color: "White",
        name: "NV Cuvee Blanc",
        desc: 'Semi-Sweet blend with floral aromas accompanied by a clean soft texture. Our Cuvee Blanc compliments a wide variety of foods and will find many fans seeking that perfect "everyday porch wine".',
        price: 26.99,
        year: 2021
    },
    {
        color: "Red",
        name: "Grenache",
        desc: "Hints of blackberry, black currant, and cherries combined with allspice, cinnamon and orange blossoms in the nose followed by black pepper and sweet woody flavors that linger throughout the wines nice, long finish.",
        price: 42.99,
        year: 2018
    },
    {
        color: "Red",
        name: "Mourvèdre",
        desc: "Medium bodied displaying luscious soft red fruit flavors of raspberry and cherry. Wild Berry and spice are present mid palate followed by a distinct earthiness on the smooth finish.",
        price: 44.99,
        year: 2018
    },
    {
        color: "Red",
        name: "Sangiovese",
        desc: "Concentrated and full-bodied example of the clean crisp acidity and bright fruit flavors. Wild berry and cherry, framed by hints of mineral and spice create a perfect balance throughout the long lingering finish.",
        price: 44.99,
        year: 2018
    },
    {
        color: "Red",
        name: "Tempranillo",
        desc: "Starts with leather and earth notes then moves slowly through raspberry, cherry, and mocha. Finally layering on spice, black fruit, cedar, and tobacco throughout its long smooth finish.",
        price: 49.99,
        year: 2018
    },
    {
        color: "Red",
        name: "Carmenere",
        desc: "Red fruit aromas combine with smokey, earthy, and spicy notes in this soft but full-bodied version of the Carmenere. Dark chocolate, tobacco, and leather emerge during the wine's long, smooth finish.",
        price: 44.99,
        year: 2018
    },
    {
        color: "Red",
        name: "Petit Verdot",
        desc: "Blackberry, violet, and black plum aromas intertwine with vanilla, spice and cedar notes. Lush, leathery tones begin to show mid-palate and continue in a long, satisfying finish.",
        price: 39.99,
        year: 2018
    },
    {
        color: "Red",
        name: "Petit Verdot",
        desc: "Blackberry, violet, and black plum aromas intertwine with vanilla, spice and cedar notes. Lush, leathery tones begin to show mid-palate and continue in a long, satisfying finish.",
        price: 39.99,
        year: 2018
    },
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