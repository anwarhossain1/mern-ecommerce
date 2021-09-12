const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/register", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  User.find({ email: req.body.email }, (err, docs) => {
    if (docs.length > 0) {
      return res.status(400).json({ message: "Something went wrong" });
    } else {
      newUser.save((error) => {
        if (!error) {
          res.send("User Registration Successful");
        } else {
          res.send("Something went wrong!!!");
        }
      });
    }
    if (err) {
      return res.status(400).json({ message: "Something went wrong" });
    }
  });
});

router.post("/login", (req, res) => {
  User.find(
    { email: req.body.email, password: req.body.password },
    (err, docs) => {
      if (docs.length > 0) {
        const user = {
          name: docs[0].name,
          _id: docs[0]._id,
          email: docs[0].email,
        };
        res.send(user);
      } else {
        return res.status(400).json({ message: "Invalid Cradentials" });
      }
    }
  );
});

module.exports = router;
