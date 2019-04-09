const Discipline = require("../models/discipline");

exports.createDiscipline = (req, res, next) => {
  //const url = req.protocol + "://" + req.get("host");
  const discipline = new Discipline({
    name: req.body.name,
    credits: req.body.credits,
  });
  discipline
    .save()
    .then(createdDiscipline => {
      res.status(201).json({
        message: "Discipline added successfully",
        discipline: {
          ...createdDiscipline,
          id: createdDiscipline._id
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Creating a discipline failed!"
      });
    });
};

exports.getDiscipline = (req, res, next) => {
  Discipline.findById(req.params.id)
    .then(discipline => {
      if (discipline) {
        res.status(200).json(discipline);
      } else {
        res.status(404).json({ message: "Discipline not found!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching discipline failed!"
      });
    });
};

exports.getDisciplines = (req, res, next) => {
  const disciplineQuery = Discipline.find();
  let fetchedDisciplines;
  disciplineQuery
    .then(documents => {
      fetchedDisciplines = documents;
      return Discipline.count();
    })
    .then(count => {
      res.status(200).json({
        message: "Disciplines fetched successfully!",
        disciplines: fetchedDisciplines,
        maxDisciplines: count
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching disciplines failed!"
      });
    });
};
