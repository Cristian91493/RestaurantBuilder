const express = require("express")
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const apiRoutes = require('./routes/api'); // Import the API routes


const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

//Connect to MongoDb
connectDB();


//Use API routes
app.use('/api', apiRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});