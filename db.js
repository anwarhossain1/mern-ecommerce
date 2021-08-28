const mongoose = require("mongoose");

let mongoDbUrl =
  "mongodb+srv://anwar:anwar@cluster0.w44p3.mongodb.net/mern-ecommerce";

mongoose.connect(mongoDbUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

let dbConnect = mongoose.connection;

dbConnect.on("error", () => {
  console.log("MongoDb Connection Failed!");
});

dbConnect.on("connected", () => {
  console.log("Connected");
});

module.exports = mongoose;
