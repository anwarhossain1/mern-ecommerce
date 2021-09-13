const express = require("express");
let cors = require("cors");
let bodyparser = require("body-parser");
const app = express();
const userRoute = require("./routes/userRouter");
const orderRoute = require("./routes/orderRoute");
app.use(cors());
app.use(bodyparser());

let dbConnection = require("./db");
const productsRoute = require("./routes/productsRoute");

//Routes
app.use("/api/products/", productsRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);
app.get("/", (req, res) => {
  res.send("This is from server");
});

const port = 5000;
app.listen(port, () => `server running on port ${port}`);
