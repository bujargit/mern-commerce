const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      res.send("Email already registered");
      res.status(400).send({ message: "Something went wrong" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      const result = await newUser.save();
      res.send("User Registration success");
      console.log(result);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
    res.status(400).send({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const foundUser = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    }).exec();

    if (foundUser) {
      const user = {
        name: foundUser.name,
        _id: foundUser._id,
        email: foundUser.email,
      };
      res.send(user);
    } else {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
