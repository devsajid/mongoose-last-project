const mongoose = require("mongoose");
// schema design
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide a name for this Inventory"],
      trim: true,
      unique: [true, "Name must be unique"],
      minLength: [2, "Name must be at least 3 characters."],
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
        values: ["kg", "littre", "pcs"],
        message: "Choose  must be  unit {VALUE}",
      },
    },

    status: {
      type: String,
      required: true,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "Status can't be {value}",
      },
    },
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
