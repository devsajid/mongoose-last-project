const mongoose = require("mongoose");
// schema design
const productSchema = mongoose.Schema(
  {
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
    c,
    // supplier:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Supplier"
    // },
    // categories:[{
    //     name:{
    //         type:String,
    //         required:true
    //     },
    //     _id:mongoose.Schema.Types.ObjectId
    // }]
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
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
