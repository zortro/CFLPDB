const router = require('express').Router()
const wine = require('./api/wineRoutes')
const event = require('./api/eventRoutes')
const menu = require('./api/menuRoutes')

router.use('/wine', wine)
router.use('/event', event)
router.use('/menu', menu)

module.exports = router