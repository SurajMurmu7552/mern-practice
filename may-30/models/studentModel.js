const { Schema, model } = require("mongoose");

const studentSchema = new Schema({
  name: String,
  roll: Number,
  grade: String,
});

module.exports = model("demo", studentSchema);
