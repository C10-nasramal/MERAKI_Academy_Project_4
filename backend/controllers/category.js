const categoryModel = require("../models/category");
const createCategory = (req, res) => {
  const { title } = req.body;
  const newCategory = new categoryModel({ title });
  newCategory
    .save()

    .then((result) => {
      res.status(201).json({
        success: true,
        category: result,
        massage: "Category Created",
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

const getAllcategory = (req, res) => {
  categoryModel
    .find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        category: result,
        massage: "All the Category",
      });
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        massage: "No Category",
      });
    });
};

const updateCategoryBYiD = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  categoryModel
    .findByIdAndUpdate({ _id: id }, body, { new: true })
    .then((result) => {
      res.status(202).json({
        success: true,
        category: result,
        massage: " Updated Category",
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
  createCategory,
  getAllcategory,
  updateCategoryBYiD,
};
