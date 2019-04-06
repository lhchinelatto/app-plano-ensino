// Core Modules
const path = require("path");

// NPM Modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Starting Express.js
const app = express();
// Starting bodyParser
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/api/posts", (req, res, next) => {
  const posts = [

  ];
  res.json();
});

module.exports = app;
