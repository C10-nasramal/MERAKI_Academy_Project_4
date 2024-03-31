const orderModel = require ("../models/order")
const createOrder=(req,res)=>{
    const {Prodect1,Prodect2,user1,user2} = req.body;
    const neworder = new orderModel({Prodect1,Prodect2,user1,user2});
    neworder.save()
  
  .then((result)=>{res.status(201).json({
          success: true,
          prodect: result,
          massage: "Order Created"
      })})
      .catch((err)=>{
        res.status(500).json({
                    success: false,
                    massage: "server error",
                    err: err.massage
                     })
  
      })
}


module.exports={
    createOrder
}