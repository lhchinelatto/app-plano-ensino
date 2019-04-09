const express = require("express");
const DisciplineController = require("../controllers/discipline");
const checkAuth = require("../middleware/check-auth");
const router = express.Router();

router.post("", DisciplineController.createDiscipline);
router.get("", DisciplineController.getDisciplines);
router.get("/:id", DisciplineController.getDiscipline);

module.exports = router;
