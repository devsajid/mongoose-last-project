const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
app.use(express.json());

const app = require("./app");

//database connection

mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(`Database Connecting Succesfully`.red.bold);
});

// server
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
