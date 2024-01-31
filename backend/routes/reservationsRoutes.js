const express = require('express')
const router = express.Router()

const reservationsCtrl = require('../controllers/reservationsController')

router.post('/reservations', reservationsCtrl.resPost)


module.exports = router