const express = require("express");
const ClassController = require("../controllers/class");
const checkAuth = require("../middleware/check-auth");
const router = express.Router();

router.post("", ClassController.createClass);
router.get("", ClassController.getClasses);
router.get("/:id", ClassController.getClass);

module.exports = router;
