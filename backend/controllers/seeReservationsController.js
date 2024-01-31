
const Reservations = require("../models/Reservations");

async function showReservations(req, res){
    try{
        const allReservations = await Reservations.find();
        res.json(allReservations)
    }catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }}

module.exports = {
  showReservations,
};