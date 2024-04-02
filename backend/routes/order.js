const express = require ("express")
//, getOrderByUserId, DeleteOrderbyID
const {createOrder,getOrderByUserId,DeleteOrderbyID} = require("../controllers/order")
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")
const orderRouter = express.Router();
orderRouter.post("/",authentication,authorization ("CREATE_user"),createOrder);
orderRouter.get("/:id",getOrderByUserId);
orderRouter.delete("/delete/:id",DeleteOrderbyID)

module.exports = orderRouter