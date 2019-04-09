const express = require("express");
const ClassController = require("../controllers/class");
const checkAuth = require("../middleware/check-auth");
const router = express.Router();

//router.post("/register", ClassController.createClass);
//router.get("/list", ClassController.listClasses);

module.exports = router;
