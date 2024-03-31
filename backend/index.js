const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./models/db")
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const usersRouter = require("./routes/users");
const rolesRouter = require("./routes/roles");
const categoryRouter = require("./routes/category");
const prodectRouter = require("./routes/prodect");
const orderRouter = require("./routes/order")
app.use("/users", usersRouter);
app.use("/roles", rolesRouter);
app.use("/category",categoryRouter);
app.use("/prodect",prodectRouter);
app.use("/order",orderRouter);

// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
