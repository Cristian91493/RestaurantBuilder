const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/seeReservationsController')

router.get('/', seeReservationsCtrl.show)

module.exports = router