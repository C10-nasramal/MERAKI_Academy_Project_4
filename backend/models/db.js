const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Ready To Use");
  })
  .catch((err) => {
    console.log(err);
  });
