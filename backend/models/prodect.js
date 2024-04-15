const mongoose = require("mongoose");

const prodectSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  catogoey: { type: mongoose.Schema.Types.ObjectId, ref: "Catogoey" },
  title: { type: String, required: true },
  description: { type: String },
  img: { type: String },
  price: { type: String, required: true },
});
module.exports = mongoose.model("Prodect", prodectSchema);
