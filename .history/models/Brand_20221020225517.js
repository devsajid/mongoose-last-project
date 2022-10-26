const mongoose = require("mongoose");
const { stringify } = require("query-string");
const brandSchema = mongoose.Schema({ name: { type: stringify } });
