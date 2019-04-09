const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ObjectId = mongoose.Schema.Types.ObjectId;

const courseSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  coordenator: { type: [ObjectId], required: true },
  classes: { type: [ObjectId] },
  courses: { type: [ObjectId] }
});

courseSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Course", courseSchema);
