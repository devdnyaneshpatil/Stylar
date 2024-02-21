const mongoose = require("mongoose");
require("dotenv").config()
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error; 
  }
};

module.exports = connectDB;
