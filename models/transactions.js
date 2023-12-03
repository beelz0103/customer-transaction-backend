const mongoose = require("mongoose");

const { Schema } = mongoose;

const TransactionSchema = new Schema(
  {
    account_id: Number,
    transaction_count: Number,
    bucket_start_date: Date,
    bucket_end_date: Date,
    transactions: [Object],
  },
  { collection: "transactions" }
);

module.exports = mongoose.model(
  "Transactions",
  TransactionSchema,
  "transactions"
);
