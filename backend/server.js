const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = [];  // in-memory storage

// 1. Health Check API
app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "onboarding-api" });
});

// 2. Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// 3. Add user (POST)
app.post("/users", (req, res) => {
  const { name, email, role } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email required" });
  }

  const newUser = { name, email, role };
  users.push(newUser);

  res.json({ message: "User added", user: newUser });
});

// Start server
app.listen(4000, () => console.log("Server running on port 4000"));
