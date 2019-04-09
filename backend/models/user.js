const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: [String], enum: ["Admin", "Professor", "Coordinator"]},
  classes: { type: [ObjectId]},
  courses: { type: [ObjectId]}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
