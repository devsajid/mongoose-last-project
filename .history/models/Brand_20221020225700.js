const mongoose = require("mongoose");
const brandSchema = mongoose.Schema({
  name: { type: String, trim: true, required },
});
