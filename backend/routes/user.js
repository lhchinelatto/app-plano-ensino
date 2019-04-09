const express = require("express");
const UserController = require("../controllers/user");
//const checkAuth = require("../middleware/check-auth");
const router = express.Router();

router.post("", UserController.createUser);
router.get("", UserController.getUsers);
router.get("/:id", UserController.getUser);

module.exports = router;
