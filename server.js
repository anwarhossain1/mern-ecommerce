const express = require("express");
let cors = require("cors");
const app = express();

app.use(cors());

let dbConnection = require("./db");
const productsRoute = require("./routes/productsRoute");

app.use("/api/products/", productsRoute);
app.get("/", (req, res) => {
  res.send("This is from server");
});

const port = 5000;
app.listen(port, () => `server running on port ${port}`);
