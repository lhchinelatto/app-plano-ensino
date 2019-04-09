const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ObjectId = mongoose.Schema.Types.ObjectId;

const disciplineSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  credits: { type: String, required: true },
  classes: { type: [ObjectId], ref: "Class" },
  courses: { type: [ObjectId], ref: "Course" }
});

disciplineSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Discipline", disciplineSchema);
