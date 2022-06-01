const mongoose = require("mongoose");

const dbConnection = async (uri) => {
  try {
    const conn = await mongoose.connect(uri);
    console.log("db connection successful", conn.connection.name);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
