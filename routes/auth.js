const express = require("express");
const { validateAccessToken } = require("../middleware/auth0.middleware");
const authController = require("../controllers/authController");

const router = express.Router();

router.get("/customers", validateAccessToken, async (req, res, next) => {
  await authController.customers(req, res, next);
});

router.get("/accounts", validateAccessToken, async (req, res, next) => {
  await authController.accounts(req, res, next);
});

router.get("/transactions", validateAccessToken, async (req, res, next) => {
  await authController.transactions(req, res, next);
});

router.get(
  "/accounts/products",
  validateAccessToken,
  async (req, res, next) => {
    await authController.products(req, res, next);
  }
);

module.exports = router;
