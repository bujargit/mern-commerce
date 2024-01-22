const mongoose = require("mongoose");

const orderSchena = mongoose.Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        _id: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],
    shippingAddress: {
      address: { type: String, require },
      city: { type: String, require },
      postalCode: { type: Number, require },
      country: { type: String, require },
    },
    orderAmount: { type: Number, require },
    transactionId: { type: String, require },
    isDelivered: { type: Boolean, require },
  },
  {
    timestamps: true,
  }
);

const Ordermodel = mongoose.model("orders", orderSchena);

module.exports = Ordermodel;
