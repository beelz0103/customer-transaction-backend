const mongoose = require("mongoose");

const { Schema } = mongoose;

const CustomerSchema = new Schema(
  {
    username: String,
    name: String,
    address: String,
    birthdate: Date,
    email: String,
    active: Boolean,
    accounts: [Number],
    tier_and_details: Object,
  },
  { collection: "transactions" }
);

module.exports = mongoose.model("Customers", CustomerSchema, "customers");
