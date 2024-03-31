const mongoose = require("mongoose");
const catogoeySchema = new mongoose.Schema({
   
    title: { type: String, required: true}
    
 
  });
  module.exports = mongoose.model("Catogoey", catogoeySchema);
