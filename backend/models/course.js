const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const courseSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  coordenator: { type: [Schema.Types.ObjectId], required: true },
  classes: { type: [Schema.Types.ObjectId] },
  courses: { type: [Schema.Types.ObjectId] }
});

courseSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Course", courseSchema);
