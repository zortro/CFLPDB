const router = require('express').Router()
const mongoose = require('mongoose')

const wines = require('../../models/wine')

router.get('/getWine', (req, res) => {
    wines.find().then((wine) =>
    !wine
        ? res.status(404).json({ message: 'No wines were found'})
        : res.json(wine)
    ).catch((err) => res.status(500).json(err))
})

router.post('/postWine', (req, res) => {
    wines.create({
        color: "Red",
        name: "Provance",
        desc: "A red wine.",
        price: 49
    }),
    (err, results) => {
        if (err) throw err
        res.json(results)
    }
})

module.exports = router