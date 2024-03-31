const mongoose = require("mongoose");

const rolesSchema = new mongoose.Schema({
  
  permissions: [{ type: String, required: true }]

});

module.exports = mongoose.model("Role", rolesSchema);