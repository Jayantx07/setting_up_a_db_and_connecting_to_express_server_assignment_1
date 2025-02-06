  require("dotenv").config(); // Load environment variables
  const express = require("express");
  const mongoose = require("mongoose");
  
  const app = express();
  const PORT = process.env.PORT || 5000;
  const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error.message);
  });

// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
