const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/getallproducts", async (req, res) => {
  try {
    const allProducts = await Product.find();
    // res.json({ data: allProducts });
    res.send(allProducts);
  } catch (err) {
    console.log(err);
  }
  //   Product.find({}, (err, docs) => {
  //     if (!err) {
  //       return res.json({ data: docs });
  //     } else {
  //       return res.status(400).json({ message: "Something went wrong" });
  //     }
  //   });
});

router.post("/getproductbyid", async (req, res) => {
  try {
    // await Product.find({ _id: req.body.productid }, (err, docs) => {
    //   if (!err) {
    //     res.send(docs[0]);
    //   } else {
    //     return res.status(400).json({ message: "something went wrong" });
    //   }
    // });
    const findById = await Product.find({ _id: req.body.id });
    res.send(findById);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
