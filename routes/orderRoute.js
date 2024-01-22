const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const Order = require("../models/orderModel");

router.post("/placeorder", async (req, res) => {
  const { token, cartItems, currentUser, subtotal } = req.body;

  console.log("Received request with body:", req.body);
  console.log("Payment details:", token);

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.charges.create(
      {
        amount: subtotal * 100,
        currency: "eur",
        customer: customer.id,
        receipt_email: token.email,
      },
      { idempotencyKey: uuidv4() }
    );

    console.log("Payment details:", payment);

    if (payment.paid) {
      console.log("Creating order with currentUser:", currentUser);

      const order = new Order({
        userId: currentUser && currentUser._id,
        name: currentUser && currentUser.name,
        email: currentUser && currentUser.email,
        orderItems: cartItems,
        shippingAddress: {
          address: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          postalCode: token.card.address_zip,
        },
        orderAmount: subtotal,
        transactionId: payment.source.id,
        isDelivered: false,
      });

      // Save the order to the database
      await order.save();

      console.log("Order placed successfully");
      res.send("Order Placed successfully");
    } else {
      console.error("Payment Failed");
      return res.status(400).json({ message: "Payment Failed" });
    }
  } catch (error) {
    console.error("Error processing payment:", error);
    return res.status(400).json({ message: "Something went wrong!" });
  }
});

module.exports = router;