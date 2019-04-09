const  Course = require("../models/course");

exports.createCourse = (req, res, next) => {
  //const url = req.protocol + "://" + req.get("host");
  const course = new  Course({
    name: req.body.name,
    coordinator: req.body.coordinator,
  });
  course
    .save()
    .then(createdCourse => {
      res.status(201).json({
        message: " Course added successfully",
        course: {
          ...createdCourse,
          id: createdCourse._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a course failed!"
      });
    });
};

exports.getCourse = (req, res, next) => {
   Course.findById(req.params.id)
    .then(course => {
      if (course) {
        res.status(200).json(course);
      } else {
        res.status(404).json({ message: " Course not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching course failed!"
      });
    });
};

exports.getCourses = (req, res, next) => {
  const courseQuery =  Course.find();
  let fetchedCourses;
  courseQuery
    .then(documents => {
      fetchedCourses = documents;
      return  Course.count();
    })
    .then(count => {
      res.status(200).json({
        message: " Courses fetched successfully!",
        courses: fetchedCourses,
        maxCourses: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching courses failed!"
      });
    });
};
