const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51Hx5XkF3TEUNtEMpIiz3qr7cMZ3ZQ14UiVpTS4IsUIEeuwhnY7OaRSSr5115LcFNdjYpAYVKpjtEHQAyS99okSS700wet0jcld"
);
const { v4: uuidv4 } = require("uuid");
const Order = require("../models/orderModel");

router.post("/placeorder", async (req, res) => {
  const { token, modCartItems, currentUser, subtotal } = req.body;

  //this is for storing coustomers data into stripe website
  const customer = await stripe.customers.create({
    email: token.email,
    source: token.id,
  });
  const payment = await stripe.charges.create(
    {
      amount: subtotal * 100,
      currency: "BDT",
      customer: customer.id,
      receipt_email: token.email,
    },
    {
      idempotencyKey: uuidv4(), //unique id for every transactions
    }
  );

  if (payment) {
    const order = new Order({
      userid: currentUser._id,
      name: currentUser.name,
      email: currentUser.email,
      orderItems: modCartItems,
      shippingAddress: {
        address: token.card.address_line1,
        city: token.card.address_city,
        postalCode: token.card.address_zip,
        country: token.card.address_country,
      },
      orderAmount: subtotal,
      transactionId: payment.source.id, //collected from stripe backend
      isDelivered: false,
    });
    order.save((err) => {
      if (err) {
        return res.status(400).json({ message: "Something went wrong" });
      } else {
        res.send("Payment with order Successfully added to the database");
      }
    });
  } else {
    return res.status(400).json({ message: "Payment failed" });
  }
});

router.post("/getordersbyuserid", (req, res) => {
  const userid = req.body.userid;
  Order.find({ userid: userid }, (err, docs) => {
    if (err) {
      return res
        .status(400)
        .json({ message: "Something went wrong into finding userid database" });
    } else {
      res.send(docs);
    }
  });
});

//this is for order item's description page
router.post("/getorderbyid", (req, res) => {
  const orderid = req.body.orderid;
  Order.find({ _id: orderid }, (err, docs) => {
    if (err) {
      return res.status(400).json({
        message: "Something went wrong into finding user item into database",
      });
    } else {
      res.send(docs[0]);
    }
  });
});

module.exports = router;
