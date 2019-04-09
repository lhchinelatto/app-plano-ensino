const express = require("express");
const UserController = require("../controllers/user");
//const checkAuth = require("../middleware/check-auth");
const router = express.Router();

router.post("/register", UserController.createUser);
//router.get("/list", UserController.listUsers);
//router.post("/login", UserController.userLogin);

module.exports = router;
