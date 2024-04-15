const express = require("express");
const {
  createCategory,
  getAllcategory,
  updateCategoryBYiD,
} = require("../controllers/category");
const categoryRouter = express.Router();
categoryRouter.post("/", createCategory);
categoryRouter.get("/", getAllcategory);
categoryRouter.put("/update/:id", updateCategoryBYiD);

module.exports = categoryRouter;
