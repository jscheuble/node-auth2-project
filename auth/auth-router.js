const express = require("express");
const bcrypt = require("bcryptjs");
//const jwt = require('jsonwebtoken');

const router = express.Router();

const Users = require("../users/users-model");

router.post("/register", (req, res) => {
  let creds = req.body;
  const rounds = process.env.HASH_ROUNDS || 8;

  const hash = bcrypt.hashSync(creds.password, rounds);
  creds.password = hash;

  Users.add(creds)
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
