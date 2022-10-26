const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;
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
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  website: {
    type: String,
    validate: [validator.isURL, "Please provide a valid url"],
  },
  location: String,
  products: [{ type:  }],
});
