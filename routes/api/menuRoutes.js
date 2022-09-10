const router = require('express').Router()
const mongoose = require('mongoose')

const menu = require('../../models/menu')

router.get('/getMenu', (req, res) => {
    menu.find().then((items) =>
    !items
        ? res.status(404).json({ message: 'No menu items were found'})
        : res.json(items)
    ).catch((err) => res.status(500).json(err))
})

module.exports = router