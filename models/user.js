const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

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
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  emergencyName: { type: String, required: true },
  emergencyTel: { type: Number, required: true },
  petName: { type: String, require: true },
  petType: { type: String, require: true },
  petBreed: { type: String },
  addInfo: { type: String },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
