const AccountModel = require("../models/accounts");
const CustomerModel = require("../models/customers");
const TransactionModel = require("../models/transactions");

const customers = async (req, res, next) => {
  const { active } = req.query;

  const searchQuery = {};

  if (active === "true") searchQuery.active = true;

  const details = await CustomerModel.find(searchQuery);

  res.json(details);
};

const accounts = async (req, res, next) => {
  const { dbQuery } = req.query;

  const details = await AccountModel.find(JSON.parse(dbQuery));

  res.json(details);
};

const transactions = async (req, res, next) => {
  const { dbQuery } = req.query;

  const details = await TransactionModel.find(JSON.parse(dbQuery));

  res.json(details);
};

const products = async (req, res, next) => {
  const details = await AccountModel.distinct("products");

  res.json(details);
};

module.exports = { customers, accounts, transactions, products };
