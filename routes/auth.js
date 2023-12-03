const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware");

const router = express.Router();

router.get("/public", (req, res, next) => {
  res.json("auth public");
});

router.get("/protected", validateAccessToken, (req, res, next) => {
  res.json("auth protected");
});

module.exports = router;
