// Core Modules
const path = require("path");

// NPM Modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Routes
const userRoutes = require("./routes/user");
const classRoutes = require("./routes/class");
const disciplineRoutes = require("./routes/discipline");
const courseRoutes = require("./routes/course");

// Starting Express.js
const app = express();

// Connecting to MongoDB
mongoose
  .connect(
    "mongodb+srv://app:XpFaNNsjTHOgjMrP@cluster0-sr2he.mongodb.net/app-plano-ensino?retryWrites=true"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// Starting bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Allowing Access-Control from other server (origin)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/disciplines", disciplineRoutes);
app.use("/api/courses", courseRoutes);

module.exports = app;
