const express = require("express");

const {
  creatProdect,
  getProdectById,
  getProdectByCatogoryId,
  updateProdectById,
  deleteProdectById,
  getAllProdect,
  getProdectByUserID
} = require("../controllers/prodect");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const prodectRouter = express.Router();
prodectRouter.post("/",authentication,authorization("CREATE_user"),creatProdect);
prodectRouter.get("/", getAllProdect);
prodectRouter.get("/ProdectById/:id", getProdectById);
prodectRouter.get("/:id", getProdectByCatogoryId);
prodectRouter.get("/getProdectByUserID/:id", getProdectByUserID)

prodectRouter.put("/update/:id", updateProdectById);
prodectRouter.delete("/delete/:id", deleteProdectById);

module.exports = prodectRouter;
