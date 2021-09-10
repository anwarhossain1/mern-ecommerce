const moongoose = require("mongoose");

const userSchema = moongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const User = moongoose.model("users", userSchema);

module.exports = User;
