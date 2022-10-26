const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide a cat"],
    unique: true,
  },
});
