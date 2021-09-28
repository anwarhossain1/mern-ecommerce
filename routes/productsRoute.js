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

router.post("/addreview", async (req, res) => {
  const { review, productid, currentUser } = req.body;

  const product = await Product.findById({ _id: productid }); //db te product er id diye ber kora

  const reviewModel = {
    name: currentUser.name,
    userid: currentUser._id,
    rating: review.rating,
    comment: review.comment,
  };

  product.reviews.push(reviewModel);

  // updating total rating of the database
  let rating =
    product.reviews.reduce((acc, x) => acc + x.rating, 0) /
    product.reviews.length;
  product.rating = rating; //setting product average total rating

  product.save((err) => {
    if (err) {
      return res.status(400).json({ message: "something went wrong" + err });
    } else {
      res.send("Review added successfully");
    }
  });
});

router.post("/deleteproduct", (req, res) => {
  const productid = req.body.productid;
  Product.findByIdAndDelete(productid, (err) => {
    if (err) {
      return res.status(400).json({ message: "something went wrong" + err });
    } else {
      res.send("Product deleted successfully");
    }
  });
});

router.post("/addnewproduct", (req, res) => {
  const { product } = req.body;
  console.log(product);
  const newProduct = new Product({
    name: product.name,
    price: product.price,
    description: product.description,
    countinStock: product.countInStock,
    image: product.imageurl,
    category: product.category,
  });
  newProduct.save((err) => {
    if (err) {
      return res.status(400).json({ message: "something went wrong" + err });
    } else {
      res.send("Product added successfully");
    }
  });
});
module.exports = router;
