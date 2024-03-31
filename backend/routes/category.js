const express = require ("express")
const {createCategory,getAllcategory,updateCategoryBYiD} = require("../controllers/category")
const categoryRouter = express.Router();
categoryRouter.post("/",createCategory)
categoryRouter.get("/",getAllcategory)
categoryRouter.put(":id",updateCategoryBYiD)

module.exports = categoryRouter





