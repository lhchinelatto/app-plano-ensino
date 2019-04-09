const express = require("express");
const DisciplineController = require("../controllers/discipline");
const checkAuth = require("../middleware/check-auth");
const router = express.Router();

//router.post("/register", DisciplineController.createDiscipline);
//router.get("/list", DisciplineController.listDisciplines);

module.exports = router;
