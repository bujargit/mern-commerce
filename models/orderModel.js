const mongoose = require("mongoose");

const orderSchena = mongoose.Schema(
  {
    userid: {
      type: String,
      require,
    },
    name: {
      type: String,
      type: require,
    },
    email: {
      type: String,
      require,
    },
    oserItems: [
      {
        name: { type: String, require },
        quantity: { type: Number, require },
        _id: { type: String, require },
        price: { type: Number, require },
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
