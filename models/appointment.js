const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    apptDate: String,
    apptTime: String,
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User" },
    created_at: {
      type: Date,
      default: Date.now(),
    },
  });

  const Appointment = mongoose.model("Appointment", appointmentSchema);

  module.exports = Appointment;