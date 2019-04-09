const express = require("express");
const CourseController = require("../controllers/course");
const checkAuth = require("../middleware/check-auth");
const router = express.Router();

router.post("", CourseController.createCourse);
router.get("", CourseController.getCourses);
router.get("/:id", CourseController.getCourse);

module.exports = router;
