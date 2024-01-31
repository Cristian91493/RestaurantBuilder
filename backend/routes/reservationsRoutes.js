const express = require('express')
const router = express.Router()

const reservationsCtrl = require('../controllers/reservationsController')

router.post('/reservations', reservationsCtrl.post)


module.exports = router