const mongoose = require("mongoose");

const { Schema } = mongoose;

const AccountsSchema = new Schema(
  {
    account_id: Number,
    limit: Number,
    author: String,
    products: [String],
  },
  { collection: "accounts" }
);

module.exports = mongoose.model("Accounts", AccountsSchema, "accounts");
