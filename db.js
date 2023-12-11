const mongoose = require("mongoose");

const mongoDBURL = process.env.mongoDBURL;

mongoose.connect(mongoDBURL);

const dbConnect = mongoose.connection;

dbConnect.on("error", () => {
  console.log("MongoDb Connection Failed");
});

dbConnect.on("connected", () => {
  console.log("MongoDb Connection Successful");
});

module.exports = mongoose;
