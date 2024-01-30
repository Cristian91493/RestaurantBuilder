const express = require("express")
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});