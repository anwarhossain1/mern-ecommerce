const express = require("express");
const app = express();

let dbConnection = require("./db");
app.get("/", (req, res) => {
  res.send("This is from server");
});

const port = 5000;
app.listen(port, () => `server running on port ${port}`);
