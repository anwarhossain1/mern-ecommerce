const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51Hx5XkF3TEUNtEMpIiz3qr7cMZ3ZQ14UiVpTS4IsUIEeuwhnY7OaRSSr5115LcFNdjYpAYVKpjtEHQAyS99okSS700wet0jcld"
);
const { v4: uuidv4 } = require("uuid");

router.post("/placeorder", async (req, res) => {
  const { token, cartItems, currentUser, subtotal } = req.body;

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
    res.send("Payment Successful");
  } else {
    return res.status(400).json({ message: "Payment failed" });
  }
});

module.exports = router;
