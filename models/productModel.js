const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      requred: [true, ""],
    },
    image: {
      type: String,
      requred: [true, "please enter image link"],
    },
    name: {
      type: String,
      requred: [true, "please enter name"],
    },
    description: {
      type: String,
      requred: [true, "please enter description"],
    },
    price: {
      type: Number,
      requred: [true, "please enter price"],
    },
    color: {
      type: String,
      requred: [true, "please enter color"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
