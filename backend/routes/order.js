const express = require ("express")
const {createOrder,getOrderByUserId,DeleteOrderbyID} = require("../controllers/order")
const authentication = require("../middleware/authentication")
const authorization = require("../middleware/authorization")
const orderRouter = express.Router();
orderRouter.post("/",authentication,authorization ("CREATE_user"),createOrder);
orderRouter.get("/:id",authentication,authorization ("get_user"),getOrderByUserId);
orderRouter.delete("/delete/:id",DeleteOrderbyID)

module.exports = orderRouter