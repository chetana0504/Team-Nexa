const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection (MongoDB)
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/doctor_appointments";
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Doctor Availability API
app.get("/doctors", (req, res) => {
  const doctors = [
    { id: 1, name: "Dr. John Doe", specialty: "Cardiologist", available: true },
    { id: 2, name: "Dr. Jane Smith", specialty: "Dermatologist", available: false }
  ];
  res.json(doctors);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

