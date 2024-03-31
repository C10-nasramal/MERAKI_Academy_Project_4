const mongoose = require("mongoose");

const prodectSchema = new mongoose.Schema({
   
  catogoey: { type: mongoose.Schema.Types.ObjectId, ref: "Catogoey" },
  title: { type: String, required: true},
    description :  { type: String },
    img:{ type: String },
price : { type: String , required: true },


 
  });
  module.exports = mongoose.model("Prodect", prodectSchema);
