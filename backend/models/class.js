const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const classSchema = mongoose.Schema({
  classId: { type: String, required: true, unique: true },
  professor: { type: Schema.Types.ObjectId, required: true },
  weekday: { type: String, required: true },
  discipline: { type: ObjectId, required: true }
});

classSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Class", classSchema);
