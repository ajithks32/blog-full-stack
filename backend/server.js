const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

const PostRoutes = require("./routes/post");

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware setup
app.use(cors());
app.use(bodyparser.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/blog")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database connection error:", err));

// Serve static files (images)
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/posts", PostRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
