const orderModel = require("../models/order");
const prodect = require("../models/prodect");
const getOrderByOwnerId = (req, res) => {
  const id = req.token.userId;
  console.log(typeof id + " owner");
  orderModel
    .find({ exchangeOwnerId: id })
    .populate("exchangeWantedId")
    .populate("exchangeOfferedId")
    .then((result) => {
      res.status(200).json({
        success: true,
        order: result,
        massage: `order ${id}`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err.massage,
      });
    });
};

const getOrderByTakerId = (req, res) => {
  const id = req.token.userId;
  console.log(id + " taker");
  orderModel
    .find({ exchangeTakerId: id })
    .populate("exchangeWantedId")
    .populate("exchangeOfferedId")
    .then((result) => {
      res.status(200).json({
        success: true,
        order: result,
        massage: `order ${id}`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err.massage,
      });
    });
};

const creatNewOrder = (req, res) => {
  const {
    exchangeWantedId,
    exchangeOwnerId,
    exchangeOfferedId,
    exchangeAccepted,
  } = req.body;
  const neworder = new orderModel({
    exchangeWantedId,
    exchangeOwnerId,
    exchangeOfferedId,
    exchangeAccepted,
    exchangeTakerId: req.token.userId,
  });
  neworder
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        order: result,
        massage: "order Created",
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err.massage,
      });
    });
};

const DeleteOrderbyID = (req, res) => {
  const id = req.params.id;
  orderModel
    .findByIdAndDelete(id)
    .then((result) => {
      res.status(202).json({
        success: true,
        order: result,
        massage: `deleted order ${id} `,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err.massage,
      });
    });
};
const AccepOrderbyId = (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  orderModel
    .findByIdAndUpdate({ _id: id }, newData, {new: true})
    .then((result) => {
      res.status(202).json({
        success: true,
        order: result,
        massage: `updated order ${id} `,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        massage: "server error",
        err: err.massage,
      });
    });
};

module.exports = {
  getOrderByOwnerId,
  getOrderByTakerId,
  DeleteOrderbyID,
  creatNewOrder,
  AccepOrderbyId,
};
