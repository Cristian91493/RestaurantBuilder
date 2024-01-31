const Reservations = require("../models/Reservations");

async function post(req, res) {
  console.log("POST /api/reservations");
app.post('/api/reservations', async (req, res) => {
    try {
        console.log('POST /api/reservations')
        console.log(req.body)
        const reservations = await Reservations.create(req.body)
        res.status(200).json(reservations)
    } catch(err) {
        console.log(err.message)
        res.status(400).json(err)
    }
})

}

module.exports = {
  post,
};