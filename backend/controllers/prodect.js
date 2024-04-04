const prodectModel = require ("../models/prodect")
const creatProdect = (req,res)=>{
    const {catogoey,title,description,img,price} = req.body;
    const newprodect = new prodectModel({catogoey,title,description,img,price});
    newprodect.save()
  
  .then((result)=>{res.status(201).json({
          success: true,
          prodect: result,
          massage: "Prodect Created"
      })})
      .catch((err)=>{
        res.status(500).json({
                    success: false,
                    massage: "server error",
                    err: err.massage
                     })
  
      })
}


const getProdectById = (req,res)=>{
    const id = req.params.id
    prodectModel.findOne({ _id: id }).then((result)=>{res.status(200).json({
        success: true,
        prodect: result,
        massage: `Prodect ${id}`
    })})
    .catch((err)=>{
      res.status(500).json({
                  success: false,
                  massage: "server error",
                  err: err.massage
                   })

    })
}
const getProdectByCatogoryId = (req,res)=>{
    const id = req.params.id
    prodectModel.find({ catogoey: id }).populate("catogoey")
    .then((result)=>{res.status(200).json({
        success: true,
        prodect: result,
        massage: `Prodect ${id}`
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

const updateProdectById = (req,res)=>{
    const id = req.params.id
    const body = req.body
    prodectModel.findByIdAndUpdate({_id: id},body,{new:true}) 
       .then((result)=>{res.status(202).json({
      success: true,
      prodect: result,
      massage: " updated Prodect "
  })})
  .catch((err)=>{
    res.status(500).json({
                success: false,
                massage: "server error",
                err: err.massage
                 })

  })
}
const deleteProdectById = (req,res)=>{
    const id = req.params.id
    prodectModel.findByIdAndDelete(id).then((result)=>{res.status(202).json({
        success: true,
        prodect: result,
        massage:  `deleted Prodect ${id} `
    })})
    .catch((err)=>{
      res.status(500).json({
                  success: false,
                  massage: "server error",
                  err: err.massage
                   })
  
    })
}
const getAllProdect =(req,res)=>{
    prodectModel.find([]).then((result)=>{res.status(200).json({
        success: true,
        prodect: result,
        massage: `Prodects`
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
    creatProdect,getProdectById,getProdectByCatogoryId,updateProdectById,deleteProdectById,getAllProdect
}