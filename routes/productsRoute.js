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
router.post("/getproductbyid", (req, res) => {
  Product.find({ _id: req.body.productid }, (error, docs) => {
    if (!error) {
      res.send(docs[0]);
    } else {
      return res.status(400).json({ message: "Something Went Wrong" });
    }
  });
});
module.exports = router;
