const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/subgql";

async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit the process if the connection fails
    }
}

module.exports = connectDB;
