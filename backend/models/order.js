const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
   
    Prodect1: { type: mongoose.Schema.Types.ObjectId, ref: "Prodect" },
    Prodect2: { type: mongoose.Schema.Types.ObjectId, ref: "Prodect" },
    user1: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
   user2: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    
  
  
   
    });
    module.exports = mongoose.model("Order", orderSchema);