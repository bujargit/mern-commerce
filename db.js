const mongoose = require("mongoose");

const mongoDBURL =
  "mongodb+srv://hysenibujar:Mernstack123@merncamp.nusdfzg.mongodb.net/e-commerce";

mongoose.connect(mongoDBURL);

const dbConnect = mongoose.connection;

dbConnect.on("error", () => {
  console.log("MongoDb Connection Failed");
});

dbConnect.on("connected", () => {
  console.log("MongoDb Connection Successful");
});

module.exports = mongoose;
