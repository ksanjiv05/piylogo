const mongoose = require("mongoose");
const { run } = require("../controller/user.controller");

const connectDB = async () => {
  console.log("process.env.MONGO_URI", process.env.MONGO_URI);
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDB");
      // run();
    })
    .catch((err) => console.log(err));
};

module.exports = connectDB;
