const express = require("express");
const Product = require("../models/productModel");

const router = express.Router();

router.get("/getallproducts", (req, res) => {
  Product.find({}, (error, docs) => {
    if (!error) {
      return res.send(docs);
    } else {
      return res.status(400).json({ message: "Something Went Wrong!" });
    }
  });
});
module.exports = router;
