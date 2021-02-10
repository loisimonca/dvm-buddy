const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classifiedSchema = new Schema({
  category: { type: String, required: true },
  details: { type: String },
  name: { type: String, require: true },
  tel: { type: Number, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  zipCode: { type: Number, required: true },
});

const Classified = mongoose.model("Classified", classifiedSchema);
module.exports = Classified;
