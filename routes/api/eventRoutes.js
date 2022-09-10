const router = require('express').Router()
const mongoose = require('mongoose')

const events = require('../../models/event')

router.get('/getEvents', (req, res) => {
    events.find().then((event) =>
    !event
        ? res.status(404).json({ message: 'No events were found'})
        : res.json(event)
    ).catch((err) => res.status(500).json(err))
})

module.exports = router