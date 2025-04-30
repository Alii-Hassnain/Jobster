

const mongoose = require("mongoose")
const dotenv = require("dotenv")

const connectDB = async (URI) => {
  try {
    const conn = await mongoose.connect(URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error({msg:"something went wrong"});
    process.exit(1); // Stop the server if DB fails
  }
};


module.exports = connectDB
