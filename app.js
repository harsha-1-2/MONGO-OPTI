const express = require("express");
const connectDB = require("./config/db");

const ingestRoutes = require("./routes/ingest.routes");
const analyticsRoutes = require("./routes/analytics.routes");

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/events", ingestRoutes);
app.use("/analytics", analyticsRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Event Data Pipeline API is running");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app;
