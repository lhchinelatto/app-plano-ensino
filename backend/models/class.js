const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ObjectId = mongoose.Schema.Types.ObjectId;

const classSchema = mongoose.Schema({
  classId: { type: String, required: true, unique: true },
  professor: { type: ObjectId, required: true },
  weekday: { type: String, required: true },
  discipline: { type: ObjectId, required: true }
});

classSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Class", classSchema);
