const express = require("express");
const {
  DeleteOrderbyID,
  creatNewOrder,
  getOrderByOwnerId,
  getOrderByTakerId,
  AccepOrderbyId
} = require("../controllers/order");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const orderRouter = express.Router();
orderRouter.get(
  "/getOrderByOwnerId",
  authentication,
  authorization("CREATE_user"),
  getOrderByOwnerId
);
orderRouter.get(
  "/getOrderByTakerId",
  authentication,
  authorization("CREATE_user"),
  getOrderByTakerId
);
orderRouter.post("/creatNewOrder",authentication,
authorization("CREATE_user"),creatNewOrder)
orderRouter.delete("/delete/:id", DeleteOrderbyID);
orderRouter.put("/AccepOrderbyId/:id",authentication,
authorization("CREATE_user"),AccepOrderbyId)
module.exports = orderRouter;
