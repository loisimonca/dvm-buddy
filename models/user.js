const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  tel: { type: Number, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  password: { type: String, required: true },
  emergencyName: { type: String, required: true },
  emergencyTel: { type: Number, required: true },
  petName: { type: String, require: true },
  petType: { type: String, require: true },
  petBreed: { type: String },
  addInfo: { type: String },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
