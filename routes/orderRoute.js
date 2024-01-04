const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

router.post("/placeorder", async (req, res) => {
  const { token, cartItems, currentUser, subtotal } = req.body;

  const customer = await stripe.customers.create({
    email: token.email,
    source: token.id,
  });

  const payment = await stripe.charges.create(
    {
      amount: subtotal*10,
      currency: "eur",
      customer: customer.id,
      receipt_email: token.email,
    },
    { idempotencyKey: uuidv4() }
  );

  if (payment) {
    res.send("Payment Successfull");
  } else {
    return res.status(400).json({message: 'Payment Failed'})
  }
});

module.exports = router;