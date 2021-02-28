const mongoose = require("mongoose");

const userSessionSchema = new mongoose.Schema({
  token: {
    type: String,
    default: " "
  },
  username: {
      type:String,
      required:true,
      unique:true,
      dropDups:true
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("userSession", userSessionSchema);
