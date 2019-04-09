const express = require("express");
const CourseController = require("../controllers/course");
const checkAuth = require("../middleware/check-auth");
const router = express.Router();

//router.post("/register", CourseController.createCourse);
//router.get("/list", CourseController.listCourses);

module.exports = router;
