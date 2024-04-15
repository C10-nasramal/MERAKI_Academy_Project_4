const rolesModel = require("../models/roles");

const createRole = (req, res) => {
  const { permissions } = req.body;
  const newRole = new rolesModel({ permissions });
  newRole
    .save()

    .then((result) => {
      res.status(201).json({
        success: true,
        role: result,
        massage: "Role Created",
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

module.exports = { createRole };
