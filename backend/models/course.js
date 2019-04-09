const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ObjectId = mongoose.Schema.Types.ObjectId;

const courseSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  coordinator: { type: [ObjectId], ref: "User", required: true },
  classes: { type: [ObjectId], ref: "Class" },
  disciplines: { type: [ObjectId], ref: "Discipline" }
});

courseSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Course", courseSchema);
