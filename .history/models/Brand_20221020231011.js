const mongoose = require("mongoose");
const validator = require("validator");
const brandSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a brand name"],
    maxLength: 100,
    unique: true,
  },
  description: String,
  email: {
    type: String,
    validate: [validator.isEmail, "Please provide a valid e"],
  },
  website: {
    type: String,
    validate: [validator.isURL, "Please provide a valid url"],
  },
});
