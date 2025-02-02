const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const PostRoutes = require("./routes/post");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware setup
app.use(cors());
app.use(bodyparser.json());

// MongoDB connection (Using MongoDB Atlas)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
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
