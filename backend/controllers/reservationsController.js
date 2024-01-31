const Reservations = require("../models/Reservations");

async function resPost(req, res) {
  console.log("POST /api/reservations");
  try {
    console.log('POST /api/reservations');
    console.log(req.body);

    const { firstName, lastName, date, time, phoneNum, email } = req.body;

    const reservation = await Reservations.create({
      firstName,
      lastName,
      date,
      time,
      phoneNum,
      email,
    });

    res.status(200).json(reservation);
  } catch (err) {
    console.log(err.message);
    res.status(400).json(err);
  }
}

module.exports = {
  resPost,
};