const mongoose = require("mongoose");
require('dotenv').config()

const uri =process.env.DATABASE_URL;
const connectDB = async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("db connected");
};

module.exports = connectDB;
