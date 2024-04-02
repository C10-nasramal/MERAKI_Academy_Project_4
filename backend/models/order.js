const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
   
    Prodectgiver: { type: mongoose.Schema.Types.ObjectId, ref: "Prodect" },
    Prodecttaker: { type: mongoose.Schema.Types.ObjectId, ref: "Prodect" },
    usergiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
   usertaker: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
    
    });
    module.exports = mongoose.model("Order", orderSchema);
    //6609aa43200239bdda819a47
    //"6609d9faef94908ad4d41934"user 2 
    //6609da200c43f7a12c695f05 pro1
    //6609da7214ba3dbdb420ccf0