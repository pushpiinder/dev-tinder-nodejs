const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:ECHLEON45456@namastenode.2f8gt.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
