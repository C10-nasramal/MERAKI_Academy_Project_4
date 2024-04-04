const express = require ("express")

const {creatProdect,getProdectById,getProdectByCatogoryId,updateProdectById,deleteProdectById,getAllProdect} = require("../controllers/prodect")
const prodectRouter = express.Router();
prodectRouter.post("/",creatProdect)
prodectRouter.get("/",getAllProdect)
prodectRouter.get("/ProdectById/:id",getProdectById)
prodectRouter.get("/:id",getProdectByCatogoryId)

prodectRouter.put("/update/:id",updateProdectById)
prodectRouter.delete("/delete/:id",deleteProdectById)


module.exports = prodectRouter
