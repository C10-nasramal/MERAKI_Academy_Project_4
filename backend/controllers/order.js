const orderModel = require ("../models/order")
const createOrder=(req,res)=>{
    const {Prodectgiver,Prodecttaker,usergiver, usertaker} = req.body;
    const neworder = new orderModel({Prodectgiver,Prodecttaker,usergiver, usertaker});
    neworder.save()
  
  .then((result)=>{res.status(201).json({
          success: true,
          order: result,
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

const getOrderByUserId = (req,res)=>{
    const id = req.params.id
    
    orderModel.find({ usergiver :id}).populate("usertaker").populate("Prodecttaker").exec()
    .then((result)=>{res.status(200).json({
        success: true,
        order: result,
        massage: `order ${id}`
    })})
    .catch((err)=>{
        console.log(err)
      res.status(500).json({
                  success: false,
                  massage: "server error",
                  err: err.massage
                   })

    })
}
const DeleteOrderbyID = (req,res)=>{
    const id = req.params.id
    orderModel.findByIdAndDelete(id).then((result)=>{res.status(202).json({
        success: true,
        order: result,
        massage:  `deleted order ${id} `
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
    createOrder,
    getOrderByUserId,
    DeleteOrderbyID
}