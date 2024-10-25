const mongoose = require("mongoose");
const connectDb = async () => {
  await mongoose.connect(process.env.DATABASE);
};

module.exports = connectDb;