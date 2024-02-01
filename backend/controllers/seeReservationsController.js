
const Reservations = require("../models/Reservations");

async function showReservations(req, res){
  console.log('GET /api/reservations')
    // const { firstName, lastName, date, time, phoneNum, email } = req.body;
    
    try{
        const foundReservations= await Reservations.find();
        
        res.status(200).json({foundReservations})
        // console.log(foundReservations)
    }catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }}

module.exports = {
  showReservations,
};
console.log(showReservations)


