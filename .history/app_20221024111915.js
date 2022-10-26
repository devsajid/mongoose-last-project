const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
app.use(express.json());
app.use(cors());

// routes
const productRoute = require("./routes/product.route");
const brandRoute = require("./");
app.get("/", (req, res) => {
  res.send("Route is working succesfully");
});

// //Posting to Daabase

app.use("/api/v1/product", productRoute);

module.exports = app;
