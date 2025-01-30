const express = require("express");
const mainRouter = require("./routes/index");
const { connectToMongoDB } = require("./db/db");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes - all API routes are prefixed with /api/v1
app.use("/api/v1", mainRouter);

// Basic route for testing
app.get("/", (req, res) => {
    res.json({
        message: "Paytm backend is running"
    });
});

// Start the server
const PORT = process.env.PORT || 3000;

// Connect to MongoDB and then start the server
const startServer = async () => {
    try {
        await connectToMongoDB();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start the server:", error);
        process.exit(1);
    }
};

startServer();


