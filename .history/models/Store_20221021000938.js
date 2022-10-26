const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;
const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please provide a store name"],
      lowercase: true,
      enum: { values: ["dhaka", "chattogram", "rajshahi", "sylhet", "khulna""barishal""ran] },
    },
    description: String,
    email: {
      type: String,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    website: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    location: String,
    products: [{ type: ObjectId, ref: "Product" }],
    suppliers: [
      {
        name: String,
        contactNumber: String,
        id: { type: ObjectId, ref: "Supplier" },
      },
    ],
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);
const Store = mongoose.model("Store", storeSchema);
module.exports = Store;
