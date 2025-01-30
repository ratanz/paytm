const mongoose = require("mongoose");
require("dotenv").config();

// MongoDB Connection Function
async function connectToMongoDB() {
    try {
        if (!process.env.MONGODB_URL) {
            throw new Error("MONGODB_URL environment variable is not defined");
        }

        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit with failure
    }
}

module.exports = {
    connectToMongoDB
};