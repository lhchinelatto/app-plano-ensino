const Class = require("../models/class");

exports.createClass = (req, res, next) => {
  //const url = req.protocol + "://" + req.get("host");
  const _class = new Class({
    classId: req.body.classId,
    professor: req.body.professor,
    weekday: req.body.weekday,
    discipline: req.body.discipline
  });
  _class
    .save()
    .then(createdClass => {
      res.status(201).json({
        message: " Class added successfully",
        class: {
          ...createdClass,
          id: createdClass._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a class failed!"
      });
    });
};

exports.getClass = (req, res, next) => {
  Class.findById(req.params.id)
    .then(_class => {
      if (_class) {
        res.status(200).json(_class);
      } else {
        res.status(404).json({ message: " Class not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching class failed!"
      });
    });
};

exports.getClasses = (req, res, next) => {
  const classQuery = Class.find();
  let fetchedClasses;
  classQuery
    .then(documents => {
      fetchedClasses = documents;
      return Class.count();
    })
    .then(count => {
      res.status(200).json({
        message: " Classes fetched successfully!",
        classes: fetchedClasses,
        maxClasses: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching classes failed!"
      });
    });
};
