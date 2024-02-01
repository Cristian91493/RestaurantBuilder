const express = require('express')
const router = express.Router()
const seeReservationsCtrl = require('../controllers/seeReservationsController')

router.get('/seereservations', seeReservationsCtrl.showReservations)

module.exports = router