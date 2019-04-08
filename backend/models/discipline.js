const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const disciplineSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  credits: { type: Number, required: true },
  classes: { type: [Schema.Types.ObjectId] },
  courses: { type: [Schema.Types.ObjectId] }
});

disciplineSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Discipline", disciplineSchema);
