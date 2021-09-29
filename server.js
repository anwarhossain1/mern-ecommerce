const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const userRoute = require("./routes/userRouter");
const orderRoute = require("./routes/orderRoute");
app.use(cors());

let dbConnection = require("./db");
const productsRoute = require("./routes/productsRoute");

//Routes
app.use("/api/products/", productsRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", orderRoute);

//to run this app into production environment
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.send(path.resolve(__dirname, "client/build/index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => `server running on port ${port}`);
