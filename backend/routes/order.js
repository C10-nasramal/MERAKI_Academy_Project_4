const express = require ("express")
//, getOrderByUserId, DeleteOrderbyID
const {createOrder} = require("../controllers/order")
const orderRouter = express.Router();
orderRouter.post("/",createOrder);
// orderRouter.get("/;id",getOrderByUserId);
// orderRouter.delete("/delete",DeleteOrderbyID)

module.exports = orderRouter