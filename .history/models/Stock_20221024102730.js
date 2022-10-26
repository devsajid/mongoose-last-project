const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const StockSchema = mongoose.Schema(
  {
    productId: {
      type: ObjectId,
      required: true,
      ref: "Product",
    },
    name: {
      type: String,
      required: [true, "Please Provide a name for this Inventory"],
      trim: true,
      unique: [true, "Name must be unique"],
      lowercase: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    description: {
      type: String,
      required: true,
    },
    unit: {
      type: [String],
      required: true,
      enum: {
        values: ["kg", "littre", "pcs", "bag"],
        message: "unit value can't be {VALUE}, must be kg/litre/pcs/bag",
      },
    },
    imageURLs: [
      {
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            if (!Array.isArray(value)) {
              return false;
            }
            let isValid = true;
            value.forEach((url) => {
              if (!validator.isURL(url)) {
                isValid = false;
              }
            });
            return isValid;
          },
          message: "Please provide valid image urls",
        },
      },
    ],
    price: {
      type: Number,
      required: true,
      min: [0, "Product price"],
    },
    category: { type: String, require: true },
    brand: {
      name: { type: String, required: true },
      id: {
        type: ObjectId,
        ref: "Brand",
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

// mongoose middleware for saving data:pre/post
productSchema.pre("save", function (next) {
  console.log("Before gffkkfkk");
  if (this.quantity == 0) {
    this.status = "out-of-stock";
  }
  next();
});
// productSchema.post('save',function(doc,next) {
//     console.log('After gffkkfkk');
//     next()
// })
productSchema.methods.logger = function () {
  console.log(`Data saved for ${this.name} `);
};
// Schema model query
const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;
