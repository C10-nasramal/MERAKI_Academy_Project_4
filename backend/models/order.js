const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  exchangeWantedId:  {type: mongoose.Schema.Types.ObjectId, ref: "Prodect"},
  exchangeOwnerId: { type: mongoose.Schema.Types.ObjectId, ref: "Prodect" },
  exchangeTakerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  exchangeOfferedId:  {type: mongoose.Schema.Types.ObjectId, ref: "Prodect"},
  exchangeAccepted:{ type: String, required: true },
});
module.exports = mongoose.model("Order", orderSchema);
