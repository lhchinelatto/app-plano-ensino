const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ObjectId = mongoose.Schema.Types.ObjectId;

const disciplineSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  credits: { type: Number, required: true },
  classes: { type: [ObjectId] },
  courses: { type: [ObjectId] }
});

disciplineSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Discipline", disciplineSchema);
