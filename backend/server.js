require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const PostRoutes = require("./routes/post");

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware setup
app.use(cors());
app.use(bodyparser.json());

// MongoDB connection (using env variable)
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Database connected successfully"))
  .catch((err) => console.log("❌ Database connection error:", err));

// Serve static files (images)
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/posts", PostRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
