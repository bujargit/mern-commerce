const express = require("express");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();
const dbconnection = require("./db");
const productsRoute = require("./routes/productsRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");
app.use(bodyParser.json());
app.use("/api/products/", productsRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);

app.get("/", (req, res) => {
  res.send("This is from backend");
});

const port = 5000;

app.listen(port, () => console.log(`Node JS Server Started on port: ${port}`));
