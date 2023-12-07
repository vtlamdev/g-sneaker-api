const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/api/v1/products", async (req, res) => {
  // get all products
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/api/v1/products/:id", async (req, res) => {
  // get product by id
  try {
    const { id } = req.params;
    const products = await Product.findOne({ id: parseInt(id) });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.delete("/api/v1/products/:id", async (req, res) => {
  // delete product by id
  try {
    const { id } = req.params;
    const products = await Product.findOneAndDelete({ id: parseInt(id) });
    if (!products) {
      return res
        .status(404)
        .json({ message: `can not find product by id: ${id}` });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.put("/api/v1/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOneAndUpdate(
      { id: parseInt(id) },
      req.body
    );
    if (!product) {
      return res
        .status(404)
        .json({ message: `cannot find and update product with ID ${id}` });
    }
    const newUpdateProduct = await Product.findOne({ id: parseInt(id) });
    res.status(200).json(newUpdateProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/api/v1/products", async (req, res) => {
  // add products
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
  console.log(req.body);
  res.send(req.body);
});

mongoose.set("strictQuery", false);
const { MONGODB_CONNECT_URL, PORT } = process.env;
mongoose
  .connect(MONGODB_CONNECT_URL)
  .then(() => {
    console.log("connected to mongodbs");
    app.listen(PORT, () => {
      console.log(`Node API app is running on port 8080`);
    });
  })
  .catch((err) => {
    console.log("ERROR " + err);
  });
//12231123je
