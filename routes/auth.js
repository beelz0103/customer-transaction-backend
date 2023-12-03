const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware");
const Accounts = require("../models/accounts");
const Transactions = require("../models/transactions");
const Customers = require("../models/customers");

const router = express.Router();

router.get("/public", (req, res, next) => {
  res.json("auth public");
});

router.get("/protected", validateAccessToken, async (req, res, next) => {
  res.json("auth protected");
});

module.exports = router;
