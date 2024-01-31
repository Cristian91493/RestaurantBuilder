const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reservationsSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true
    },
    lastName: {
        type: String, 
        required: true
    },
    date: {
        type: String, 
        required: true
    },
    time: {
        type: String, 
        required: true
    },
    phoneNum: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true 
    }
})

const Reservations = mongoose.model('Reservations', reservationsSchema)

module.exports = Reservations